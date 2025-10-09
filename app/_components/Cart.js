"use client";

import { FaArrowRightLong } from "react-icons/fa6";
import { useCart } from "../_contexts/CartContext";
import CartItem from "./CartItem";
import { formatCurrency } from "@/_lib/utils";

function Cart() {
  const { cartItems, cartOpen, setCartOpen, totalPrice, dispatch } = useCart();

  return (
    <>
      {/* Background overlay */}
      {cartOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm"
          onClick={() => setCartOpen(false)}
        ></div>
      )}

      {/* Cart box */}
      <div
        className={`border-primary/80 bg-secondary fixed top-1/2 left-1/2 z-50 flex -translate-x-1/2 -translate-y-1/2 transform flex-col rounded-sm border p-4 shadow-lg transition-all duration-300 ${
          cartOpen
            ? "h-[80%] w-[90%] scale-100 opacity-100 sm:w-[70%] md:w-[60%] lg:w-[45%]"
            : "pointer-events-none h-0 w-0 scale-90 opacity-0"
        }`}
      >
        {/* Heading */}
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-text text-lg font-semibold sm:text-xl">
            Cart Items
          </h2>
          <button
            onClick={() => setCartOpen(false)}
            className="cursor-pointer rounded-xl border px-2 text-lg font-bold text-red-500 hover:scale-110 hover:text-red-700"
          >
            X
          </button>
        </div>

        {/* Cart Items */}
        <div className="flex-1 space-y-1.5 overflow-y-auto p-2">
          {cartItems.length === 0 ? (
            <p className="text-text/70 mt-10 text-center">
              Your cart is empty.
            </p>
          ) : (
            cartItems.map((item) => (
              <CartItem dispatch={dispatch} key={item.id} item={item} />
            ))
          )}
        </div>
        {/* checkout and total price */}
        <div className="flex flex-row justify-between">
          <h2 className="text-primary font-bold">
            Total Price: {formatCurrency(totalPrice)}
          </h2>
          <button className="text-royal flex cursor-pointer flex-row items-center gap-2 font-bold hover:underline">
            <span>checkout</span>
            <FaArrowRightLong />
          </button>
        </div>
      </div>
    </>
  );
}

export default Cart;
