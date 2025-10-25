"use client";
import { useCartStore } from "@/store/cart-store";
import { FaCartShopping } from "react-icons/fa6";

function CartIcon() {
  const cartOpen = useCartStore((state) => state.cartOpen);
  const setCartOpen = useCartStore((state) => state.setCartOpen);
  if (cartOpen) return;

  return (
    <button
      className="text-royal bg-secondary cursor-pointer rounded-lg border p-2 text-2xl"
      onClick={() => setCartOpen(true)}
    >
      <FaCartShopping />
    </button>
  );
}

export default CartIcon;
