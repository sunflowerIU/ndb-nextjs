"use client";
import { formatCurrency } from "@/_lib/utils";
import Image from "next/image";
import AddToCart from "./AddToCart";
import Link from "next/link";

function ProductCard({ product }) {
  const { name, price, cover_image, id, type } = product;

  return (
    <div className="group flex flex-col rounded-lg border border-gray-200 bg-white shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-md">
      {/* Image */}
      <Link href={`/all-products/${type}/${id}`}>
        <div className="relative aspect-square w-full overflow-hidden rounded-t-lg bg-gray-50">
          <Image
            src={cover_image}
            alt={`${name} product`}
            fill
            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 25vw, 200px"
            className="object-contain p-3 transition-transform duration-300 group-hover:scale-105"
          />
        </div>
      </Link>
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
        <AddToCart product={product} />
      </div>
    </div>
  );
}

export default ProductCard;
