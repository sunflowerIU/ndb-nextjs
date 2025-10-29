import { getProductById, getProducts } from "@/_lib/data-service";
import { formatCurrency } from "@/_lib/utils";
import AddToCart from "@/app/_components/AddToCart";
import MightAlsoLike from "@/app/_components/MightAlsoLike";
import ProductCard from "@/app/_components/ProductCard";
import ProductCarousel from "@/app/_components/ProductCarousel";
import Spinner from "@/app/_components/Spinner";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Suspense } from "react";

export default async function Page({ params }) {
  const { id } = await params;
  const { product, error } = await getProductById(id);
  // console.log(product);

  if (error || !product) return notFound();

  // console.log(mightAlsoLike);
  return (
    <div className="mx-auto max-w-6xl px-4 py-8 md:py-12">
      <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
        {/* Product Image */}
        <div className="relative h-80 w-full overflow-hidden rounded-2xl bg-gray-50 shadow-md md:h-[500px]">
          {/* <Image
            src={product.image}
            alt={product.name}
            fill
            priority
            className="object-contain p-6 transition-transform duration-500 hover:scale-105"
          />
          */}
          <ProductCarousel product={product} />
        </div>

        {/* Product Info */}
        <div className="flex flex-col justify-between md:justify-start">
          <div>
            <h1 className="font-raleway mb-3 text-2xl font-medium text-gray-900 md:text-3xl">
              {product.name}
            </h1>
            <p className="text-lg text-gray-700">{product.description}</p>

            <p className="text-primary mt-5 text-3xl font-semibold">
              {formatCurrency(product.price)}
            </p>
          </div>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <AddToCart product={product} />
          </div>
        </div>
      </div>
      <Suspense fallback={<Spinner />}>
        <MightAlsoLike product={product} />
      </Suspense>
    </div>
  );
}

// function AddToCartButton({ product }) {
//   "use client";

//   const addToCart = useCartStore((state) => state.addToCart);
//   const cartItem = useCartStore((state) =>
//     state.cartItems.find((item) => item.id === product.id),
//   );

//   function handleAddToCart() {
//     addToCart(product);
//     toast.success(`Added ${product.name} to cart`);
//   }

//   if (cartItem) {
//     return (
//       <div className="flex items-center justify-center gap-5 text-lg">
//         <EditCartButton type="decrement" id={product.id} />
//         <span>{cartItem.quantity}</span>
//         <EditCartButton type="increment" id={product.id} />
//       </div>
//     );
//   }

//   return (
//     <Button
//       onClick={handleAddToCart}
//       className="w-full rounded-lg py-2 text-sm font-semibold sm:w-auto sm:px-8"
//     >
//       Add To Cart
//     </Button>
//   );
// }
