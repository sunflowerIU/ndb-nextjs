import { formatCurrency } from "@/_lib/utils";
import { useCartStore } from "@/store/cart-store";
import Image from "next/image";
import { EditCartButton } from "./EditCartButton";

function CartItem({ item }) {
  const deleteItem = useCartStore((s) => s.deleteItem);
  return (
    <div className="md:text-md relative flex min-h-[100px] items-center justify-between gap-2 rounded-xl border border-gray-200 bg-white p-3 text-sm shadow-sm transition hover:scale-101 hover:shadow-md md:gap-4 lg:text-lg">
      {/* delete button */}
      <button
        onClick={() => deleteItem(item.id)}
        className="absolute top-2 right-2 rounded-full border px-2 text-red-500 transition hover:scale-110 hover:text-red-700"
      >
        ×
      </button>
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
        <p className="font-semibold text-gray-800">{item.name}</p>
        <p className="text-xs text-gray-500 md:text-sm lg:text-base">
          Qty: {item.quantity}
        </p>
      </div>

      {/* button */}
      <div className="flex items-center justify-between space-x-1">
        <EditCartButton size="small" type="decrement" id={item.id} />
        <EditCartButton size="small" type="increment" id={item.id} />
      </div>

      {/* Price */}
      <p className="text-primary font-bold md:text-lg">
        {formatCurrency((item.price * item.quantity).toFixed(2))}
      </p>
    </div>
  );
}

export default CartItem;
