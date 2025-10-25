"use server";

import { signIn, signOut } from "./auth";
import { supabase } from "./supabase";
import { supabaseAdmin } from "./supabaseAdmin";

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
