import { getProductById } from "@/_lib/data-service";
import { formatCurrency } from "@/_lib/utils";
import AddToCart from "@/app/_components/AddToCart";
import MightAlsoLike from "@/app/_components/MightAlsoLike";
import ProductCarousel from "@/app/_components/ProductCarousel";
import Spinner from "@/app/_components/Spinner";
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
