"use server";

import { revalidatePath } from "next/cache";
import { auth, signIn, signOut } from "./auth";
import { supabase } from "./supabase";
import { supabaseAdmin } from "./supabaseAdmin";
import { create } from "zustand";
import { createServerSupabase } from "./supabaseServer";

export async function createUser(formData) {
  try {
    const { data: signUpData, error: signUpError } = await supabase.auth.signUp(
      {
        email: formData.email,
        password: formData.password,
      },
    );
    if (signUpError)
      return {
        success: false,
        message: signUpError.message,
      };

    if (signUpData.user) {
      const { email, id } = signUpData.user;
      // console.log(formData.fullName);

      const { data: insertData, error: insertError } = await supabase
        .from("users")
        .insert({ id, email, fullName: formData.name });

      if (insertError) {
        await supabaseAdmin.auth.admin.deleteUser(id); // rollback user creation
        return { success: false, message: insertError.message };
      }
      // console.log(insertData);
      return { success: true, message: "User created successfully" };
    }
  } catch (error) {
    console.error("Error creating user:", error.message);
    return { success: false, message: "Error creating user" };
  }
}

export async function loginUser({ email, password }) {
  try {
    await signIn("credentials", {
      email,
      password,
      redirect: false, // prevent auto redirect
    });
  } catch (error) {
    return { error, message: "invalid username or password" };
  }
}

export async function logoutUser() {
  try {
    await signOut({ redirect: false });
    await supabase.auth.signOut();
    return { success: true, message: "Logged out successfully" };
  } catch (error) {
    console.log(error);
    return { success: false, message: "Logout failed" };
  }
}

// get user by email
export async function getUser(email) {
  const userData = await supabaseAdmin
    .from("users")
    .select("*")
    .eq("email", email)
    .single();
  return userData;
}

///save profile
export async function saveProfile(formData) {
  console.log(formData);
  const session = await auth();
  if (!session) return { success: false, message: "Not authenticated" };

  // console.log(formData.get("image").size);
  //upload image
  let imageName;
  if (formData.get("image").size !== 0) {
    imageName = `${Date.now()}_${formData.get("image")?.name}`;
    // console.log(imageName);
    const { data: imageData, error: imageError } = await supabaseAdmin.storage
      .from("profile")
      .upload(imageName, formData.get("image"));
    if (imageError) {
      console.log("Image upload error:", imageError.message);
      return { success: false, message: "Image upload failed" };
    }
  }
  // update profile name
  let query = supabaseAdmin.from("users");

  if (formData.get("image").size !== 0) {
    query = query.update({
      fullName: formData.get("fullName"),
      image: `https://fjmmmwvgjnqfehnhhcek.supabase.co/storage/v1/object/public/profile/${imageName}`,
    });
  } else {
    query = query.update({
      fullName: formData.get("fullName"),
    });
  }

  const { data, error } = await query.eq("email", session?.user?.email);
  revalidatePath("/profile");
  if (error) {
    return { success: false, message: "Profile update failed" };
  }
  return { success: true, message: "Profile updated successfully" };
}

///update password
export async function updatePassword(formData) {
  const session = await auth();
  if (!session) return { success: false, message: "Not authenticated" };

  const currentPassword = formData.get("currentPassword");
  const newPassword = formData.get("newPassword");

  // Re-authenticate user
  const { error: signInError } = await supabase.auth.signInWithPassword({
    email: session.user.email,
    password: currentPassword,
  });

  if (signInError) {
    return { success: false, message: "Current password is incorrect" };
  }

  // Update password
  const supabaseServer = await createServerSupabase();
  const sessionServer = await supabaseServer.auth.getSession();
  // console.log(sessionServer);
  const { error: updateError } = await supabaseServer.auth.updateUser({
    password: newPassword,
  });
  // console.log(updateError);
  if (updateError) {
    return { success: false, message: updateError.message };
  }
  return { success: true, message: "Password updated successfully" };
}
