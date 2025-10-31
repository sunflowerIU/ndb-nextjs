import { supabaseAdmin } from "@/_lib/supabaseAdmin";
import { formatCurrency } from "@/_lib/utils";
import Image from "next/image";
import { notFound } from "next/navigation";
import EsewaCheckout from "../_components/EsewaCheckout";
import { auth } from "@/_lib/auth";
import { getUser } from "@/_lib/action";

async function page({ searchParams }) {
  const session = await auth();
  if (!session) return notFound();
  const { data: userData, error: userError } = await getUser(
    session.user.email,
  );
  // console.log(userData);
  const { checkoutId } = await searchParams;

  const { data, error } = await supabaseAdmin
    .from("checkout_session")
    .select("*")
    .eq("id", checkoutId)
    .single();

  // console.log("checkout", data);
  // console.log("userdata", userData);

  ///if current user id is not equal to checkout_session user_id then return notFOund
  if (userData.id !== data.user_id) return notFound();

  if (error) return notFound("Checkout not found");

  const cart = data.cart || [];
  const total = Math.ceil(
    cart.reduce((curr, acc) => curr + acc.price * acc.quantity, 0),
  );
  return (
    <main className="h-[90vh] bg-gray-50 px-6 py-8">
      {/* Grid with 3 fixed rows: header, scrollable content, footer */}
      <div className="mx-auto grid h-full max-w-3xl grid-rows-[auto,1fr,auto]">
        {/* 🏷️ 1️⃣ Header */}
        <section>
          <h1 className="text-center text-2xl font-semibold text-gray-800">
            Review Your Order
          </h1>
        </section>

        {/* 🧾 2️⃣ Scrollable Cart Section */}
        <section className="space-y-4 overflow-y-auto px-2 py-4">
          {cart.length === 0 ? (
            <p className="text-center text-gray-600">Your cart is empty.</p>
          ) : (
            cart.map((item) => (
              <CheckoutReviewItems item={item} key={item.id} />
            ))
          )}
        </section>

        {/* 💳 3️⃣ Summary (Fixed at bottom) */}
        <section className="w-full">
          <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-md">
            <h2 className="mb-4 text-xl font-semibold text-gray-800">
              Order Summary
            </h2>

            <div className="my-4 border-t border-gray-200"></div>

            <div className="flex justify-between text-lg font-semibold text-green-700">
              <span>Total</span>
              <span>{formatCurrency(total)}</span>
            </div>

            <EsewaCheckout total={total} transactionId={data.id} />

            <p className="mt-3 text-center text-xs text-gray-400">
              Secure checkout powered by Nepal Digital Bazar
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}

export default page;

function CheckoutReviewItems({ item }) {
  return (
    <div className="md:text-md relative flex min-h-[100px] items-center justify-between gap-2 rounded-xl border border-gray-200 bg-white p-3 text-sm shadow-sm transition hover:scale-101 hover:shadow-md md:gap-4 lg:text-lg">
      {/* Image */}
      <div className="w-[30px] flex-shrink-0 md:w-[80px] lg:w-[100px]">
        <Image
          src={item.cover_image}
          alt={item.name}
          width={60}
          height={60}
          className="rounded-md object-cover"
        />
      </div>

      {/* Info */}
      <div className="flex flex-1 flex-col justify-center">
        <p className="text-text font-semibold">{item.name}</p>
        <p className="text-xs text-gray-500 md:text-sm lg:text-base">
          Qty: {item.quantity}
        </p>
      </div>

      {/* Price */}
      <p className="text-primary font-bold md:text-lg">
        {formatCurrency((item.price * item.quantity).toFixed(2))}
      </p>
    </div>
  );
}
