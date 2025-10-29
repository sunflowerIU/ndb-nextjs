import { Suspense } from "react";
import TypeOptions from "../_components/TypeOptions";
import ProductGrid from "../_components/ProductGrid";
import Spinner from "../_components/Spinner";
import Pagination from "../_components/Pagination";

async function AllProducts({ searchParams }) {
  const params = await searchParams;
  const type = params?.type ?? "thermos";

  return (
    <div>
      {/* options */}
      <TypeOptions />

      <>
        {/* products */}
        <Suspense key={type} fallback={<Spinner />}>
          <ProductGrid type={type} />
        </Suspense>
      </>
    </div>
  );
}

export default AllProducts;
