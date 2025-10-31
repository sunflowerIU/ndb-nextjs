import { useCartStore } from "@/store/cart-store";
import { toast } from "react-toastify";

export function EditCartButton({ type, product, size = "big" }) {
  const incrementItem = useCartStore((state) => state.incrementItem);
  const decrementItem = useCartStore((state) => state.decrementItem);
  // console.log(product);
  const currentProduct = useCartStore(
    (state) => state.cartItems.find((item) => item?.id === product?.id),
    (a, b) => a?.quantity === b?.quantity,
  );
  // const currentProduct = cartItems.find((item) => item.id === product.id);
  // console.log(currentProduct);

  function handleClick() {
    if (type === "increment") {
      if (currentProduct.quantity === product.stock - 3) {
        toast.error("Maximum order reached.");
      }
      incrementItem(product.id);
    }

    if (type === "decrement") {
      decrementItem(product.id);
    }
  }

  return (
    <button
      onClick={handleClick}
      className={`bg-royal text-secondary cursor-pointer rounded-full px-3 py-1 select-none hover:scale-110 ${size === "small" ? "" : "text-2xl"}`}
    >
      {type === "increment" ? "+" : "-"}
    </button>
  );
}
