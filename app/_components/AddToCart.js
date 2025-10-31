"use client";

import { useCartStore } from "@/store/cart-store";
import Button from "./Button";
import { EditCartButton } from "./EditCartButton";
import { toast } from "react-toastify";

function AddToCart({ product }) {
  const addToCart = useCartStore((state) => state.addToCart);
  const onCartAlready = useCartStore(
    (state) => state.cartItems.find((item) => item.id === product.id),
    (a, b) => a?.quantity === b?.quantity,
  );
  const itemQuantity = onCartAlready?.quantity;

  function handleAddToCart() {
    addToCart(product);
    toast.success(`Added ${product.name} to the cart`);
  }
  return (
    <div>
      {Boolean(onCartAlready) ? (
        <div className="text-text flex items-center justify-center gap-5 text-lg">
          <EditCartButton type="decrement" product={product} />

          <span>{itemQuantity}</span>
          <EditCartButton type="increment" product={product} />
        </div>
      ) : (
        <Button
          onClick={handleAddToCart}
          // onClick={() => toast.success("added to cart")}
          className="mt-3 w-full rounded-md py-1.5 text-xs font-semibold"
        >
          Add To Cart
        </Button>
      )}
    </div>
  );
}

export default AddToCart;
