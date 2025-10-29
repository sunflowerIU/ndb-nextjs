import Link from "next/link";
import { Suspense } from "react";
import Button from "./Button";
import ProductGrid from "./ProductGrid";
import Spinner from "./Spinner";
import { getHomeProducts } from "@/_lib/data-service";

function ShowMoreButton() {
  return (
    <Link href="/all-products/thermos">
      <Button type="primary">Show More</Button>
    </Link>
  );
}

async function HomeProducts() {
  const productList = await getHomeProducts();
  return (
    <main id="products" className="px-4 py-12">
      {/* Section header */}
      <header className="mb-10 text-center">
        <h1 className="font-mulish text-primary text-3xl font-bold sm:text-4xl">
          Our Premium Products
        </h1>
        <p className="text-text mt-3 text-base sm:text-lg">
          Explore our handpicked, high-quality essentials
        </p>
      </header>

      {/* Top Show More (desktop only) */}
      <div className="mx-auto mb-8 flex max-w-[1200px] justify-center">
        <ShowMoreButton />
      </div>

      <>
        {/* Product Grid */}
        <Suspense fallback={<Spinner />}>
          <ProductGrid productList={productList} />
        </Suspense>
      </>

      {/* Bottom Show More (mobile only) */}
      <div className="mx-auto mt-10 flex max-w-[1200px] justify-center sm:hidden">
        <ShowMoreButton />
      </div>
    </main>
  );
}

export default HomeProducts;
