"use client";
import { FaCartShopping } from "react-icons/fa6";
import { useCart } from "../_contexts/CartContext";

function CartIcon() {
  const { cartOpen, setCartOpen } = useCart();
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
