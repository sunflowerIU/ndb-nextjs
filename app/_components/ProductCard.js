"use client";
import Image from "next/image";
import Button from "./Button";
import { useCart } from "../_contexts/CartContext";
import { EditCartButton } from "./EditCartButton";
import { formatCurrency } from "@/_lib/utils";

function ProductCard({ product }) {
  const { cartItems, dispatch, calculateQuantityById } = useCart();
  const { name, price, image, id } = product;
  const onCartAlready = cartItems.find((item) => item.id === id);

  return (
    <div className="group flex flex-col rounded-lg border border-gray-200 bg-white shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-md">
      {/* Image */}
      <div className="relative aspect-square w-full overflow-hidden rounded-t-lg bg-gray-50">
        <Image
          src={image}
          alt={`${name} product`}
          fill
          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 25vw, 200px"
          className="object-contain p-3 transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col justify-between p-3">
        <div>
          <h2 className="font-raleway line-clamp-2 text-sm font-medium text-gray-900">
            {name}
          </h2>
          <p className="text-primary mt-1 text-base font-semibold">
            {formatCurrency(price)}
          </p>
        </div>

        {/* add to cart or edit cart */}
        <div>
          {onCartAlready ? (
            <div className="text-text flex items-center justify-center gap-5 text-lg">
              <EditCartButton type="decrement" id={id} />

              <span>{calculateQuantityById(id)}</span>
              <EditCartButton type="increment" id={id} />
            </div>
          ) : (
            <Button
              onClick={() => dispatch({ type: "addToCart", payload: product })}
              className="mt-3 w-full rounded-md py-1.5 text-xs font-semibold"
            >
              Add To Cart
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
