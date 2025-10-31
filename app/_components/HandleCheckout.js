"use client";

import { useCartStore } from "@/store/cart-store";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FaArrowRightLong } from "react-icons/fa6";

function HandleCheckout() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const cartItems = useCartStore((state) => state.cartItems);
  const setCartOpen = useCartStore((s) => s.setCartOpen);

  async function handleCheckout() {
    setIsLoading(true);
    const response = await fetch("/api/create-checkout-session", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        items: cartItems.map((item) => {
          return {
            id: item.id,
            quantity: item.quantity,
          };
        }),
      }),
    });

    const data = await response.json();

    setCartOpen(false);
    setIsLoading(false);
    //goto checkout page with that checkoutId
    router.push(`/checkout?checkoutId=${data.checkoutId}`);
  }

  return (
    <button
      onClick={handleCheckout}
      disabled={isLoading}
      className="text-royal flex cursor-pointer flex-row items-center gap-2 font-bold hover:underline"
    >
      {isLoading ? (
        <span>checking out....</span>
      ) : (
        <>
          <span>checkout</span>
          <FaArrowRightLong />
        </>
      )}
    </button>
  );
}

export default HandleCheckout;
