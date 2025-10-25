import { useCartStore } from "@/store/cart-store";

export function EditCartButton({ type, id, size = "big" }) {
  const incrementItem = useCartStore((state) => state.incrementItem);
  const decrementItem = useCartStore((state) => state.decrementItem);
  return (
    <button
      onClick={() =>
        type === "increment" ? incrementItem(id) : decrementItem(id)
      }
      className={`bg-royal text-secondary cursor-pointer rounded-full px-3 py-1 select-none hover:scale-110 ${size === "small" ? "" : "text-2xl"}`}
    >
      {type === "increment" ? "+" : "-"}
    </button>
  );
}
