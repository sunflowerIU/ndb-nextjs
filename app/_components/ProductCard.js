import Image from "next/image";
import Button from "./Button";

function ProductCard({ product }) {
  const { name, price, image } = product;
  return (
    <div className="group rounded-2xl border border-gray-200 bg-white p-5 shadow-sm transition hover:shadow-lg">
      <div className="overflow-hidden rounded-xl">
        <Image
          src={image}
          alt={`${name} product`}
          width={300}
          height={300}
          quality={100}
          className="mb-4 h-40 w-full rounded-lg object-contain transition duration-300 group-hover:scale-105"
        />
      </div>
      <h2 className="font-raleway text-lg font-semibold text-gray-900">
        {name}
      </h2>
      <p className="mt-1 text-sm font-semibold text-gray-700">{price}</p>

      <Button className="mt-3 w-full">Add To Cart</Button>
    </div>
  );
}

export default ProductCard;
