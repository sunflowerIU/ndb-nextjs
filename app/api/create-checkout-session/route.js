import { auth } from "@/_lib/auth";
import { supabase } from "@/_lib/supabase";
import { supabaseAdmin } from "@/_lib/supabaseAdmin";
import { NextResponse } from "next/server";

export async function POST(req) {
  //first check if they are authenticated or not
  const session = await auth();
  // console.log(session);
  if (!session)
    return NextResponse.json({
      success: false,
      message: "user is not logged in",
    });

  //find user_id and delivery address by that email
  const { data: userData, error: userError } = await supabaseAdmin
    .from("users")
    .select("id,delivery_address")
    .eq("email", session.user.email)
    .single();

  console.log("delivery_address", userData.delivery_address);
  // if user has no delivery details then show error
  if (!userData.delivery_address)
    return NextResponse.json({
      success: false,
      message: "Please update your delivery address in profile",
      error: "delivery_address",
    });

  if (!userData || userError)
    return NextResponse.json({
      success: false,
      message: "user data doesnot exist",
      error: "not_authenticated",
    });

  // console.log(userData);

  //get cart items from req
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
    return NextResponse.json({
      success: false,
      message: error.message,
      error: "Failed to fetch data",
    });

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
    .insert([{ cart: cart, user_id: userData.id }])
    .select();

  // console.log(data);
  // console.log(insertError);
  if (insertError) {
    return NextResponse.json({ success: false, message: insertError.message });
  }
  // console.log(data);
  return NextResponse.json({ checkoutId: data[0].id });
}
