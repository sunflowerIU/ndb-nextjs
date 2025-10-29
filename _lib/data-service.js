import { supabase } from "./supabase";

export async function getHomeProducts() {
  let { data: products, error } = await supabase
    .from("products")
    .select("*")
    .range(0, 7);

  if (error) {
    throw new Error(error.message);
  }
  return products;
}

export async function getProducts(type) {
  let query = supabase.from("products").select("*").eq("type", type);

  const { data: products, error } = await query;
  if (error) {
    throw new Error(error.message);
  }

  return products;
}

export async function getProductById(id) {
  // Fetch product by ID
  const { data: product, error } = await supabase
    .from("products")
    .select("*")
    .eq("id", id)
    .single();

  return { product, error };
}
