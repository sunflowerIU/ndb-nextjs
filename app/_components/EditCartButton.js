import { useCart } from "../_contexts/CartContext";

export function EditCartButton({ type, id, size = "big" }) {
  const { dispatch } = useCart();

  return (
    <button
      onClick={() => dispatch({ type: `${type}Item`, payload: id })}
      className={`bg-royal text-secondary cursor-pointer rounded-full px-3 py-1 select-none hover:scale-110 ${size === "small" ? "" : "text-2xl"}`}
    >
      {type === "increment" ? "+" : "-"}
    </button>
  );
}
