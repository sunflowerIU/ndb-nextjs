import { supabase } from "./supabase";

export async function getProducts(type) {
  let query = supabase.from("products").select("*").eq("type", type);

  const { data: products, error } = await query;
  if (error) {
    throw new Error(error.message);
  }

  return products;
}
