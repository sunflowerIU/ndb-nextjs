import Image from "next/image";
import { EditCartButton } from "./EditCartButton";
import { formatCurrency } from "@/_lib/utils";

function CartItem({ item, dispatch }) {
  return (
    <div className="relative flex min-h-[100px] items-center justify-between gap-4 rounded-xl border border-gray-200 bg-white p-3 shadow-sm transition hover:scale-101 hover:shadow-md">
      {/* delete button */}
      <button
        onClick={() => dispatch({ type: "deleteItem", payload: item.id })}
        className="absolute top-2 right-2 rounded-full border px-2 text-red-500 transition hover:scale-110 hover:text-red-700"
      >
        ×
      </button>
      {/* Image */}
      <div className="flex-shrink-0">
        <Image
          src={item.image}
          alt={item.name}
          width={60}
          height={60}
          className="rounded-md object-cover"
        />
      </div>

      {/* Info */}
      <div className="flex flex-1 flex-col justify-center">
        <p className="text-base font-semibold text-gray-800">{item.name}</p>
        <p className="text-sm text-gray-500">Qty: {item.quantity}</p>
      </div>

      {/* button */}
      <div className="space-y-1 space-x-2">
        <EditCartButton size="small" type="decrement" id={item.id} />
        <EditCartButton size="small" type="increment" id={item.id} />
      </div>

      {/* Price */}
      <p className="text-primary text-lg font-bold">
        {formatCurrency((item.price * item.quantity).toFixed(2))}
      </p>
    </div>
  );
}

export default CartItem;
