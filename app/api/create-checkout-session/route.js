import { supabase } from "@/_lib/supabase";
import { supabaseAdmin } from "@/_lib/supabaseAdmin";
import { NextResponse } from "next/server";

export async function POST(req) {
  const { items } = await req.json();

  //   fetch the real products from db
  const { data: products, error } = await supabase
    .from("products")
    .select("id,name,price,cover_image")
    .in(
      "id",
      items.map((item) => item.id),
    );

  if (error)
    return NextResponse.json({ success: false, message: error.message });

  //merge quantities(quantities from items and name,id,price from products)
  const cart = products.map((product) => {
    const cartItem = items.find((item) => item.id === product.id);
    return {
      ...product,
      quantity: cartItem.quantity,
    };
  });

  //   console.log(cart);

  // insert into database

  const { data, error: insertError } = await supabaseAdmin
    .from("checkout_session")
    .insert([{ cart: cart }])
    .select();

  console.log(data);
  if (insertError) {
    return NextResponse.json({ success: false, message: insertError.message });
  }

  return NextResponse.json({ checkoutId: data[0].id });
}
