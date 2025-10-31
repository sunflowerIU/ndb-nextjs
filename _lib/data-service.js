import { supabase } from "./supabase";

export async function getHomeProducts() {
  let { data: products, error } = await supabase
    .from("products")
    .select("*")
    .range(0, 7);
  console.log(error);
  if (error) {
    throw new Error(error.message);
  }
  return products;
}

export async function getProducts(category, currentPage) {
  console.log(category, currentPage);
  let query = supabase
    .from("products")
    .select("*", { count: "exact" })
    .eq("type", category)
    .range(
      (currentPage - 1) * process.env.NEXT_PUBLIC_ITEMS_LIMIT,
      currentPage * process.env.NEXT_PUBLIC_ITEMS_LIMIT - 1,
    );
  const { data: products, count, error } = await query;

  return { products, count, error };
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
