"use server";

import { signIn, signOut } from "./auth";
import { supabase } from "./supabase";

export async function createUser(formData) {
  try {
    const { data, error } = await supabase.auth.signUp({
      email: formData.email,
      password: formData.password,
    });
    // console.log(data);
    // console.log(error);
  } catch (error) {
    if (error) {
      throw new Error(error.message);
    }
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
  await signOut({
    redirectTo: "/login",
  });

  //supabase
  await supabase.auth.signOut();
}
