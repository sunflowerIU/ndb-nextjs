import { getProducts } from "@/_lib/data-service";
import { notFound } from "next/navigation";
import Pagination from "./Pagination";
import ProductGrid from "./ProductGrid";

async function AllProducts({ category, currentPage }) {
  if (!["thermos", "bottle", "others"].includes(category)) {
    return notFound();
  }

  const { products, count, error } = await getProducts(category, currentPage);
  if (error) notFound("page not found");

  return (
    <div>
      {/* options */}

      {/* products */}
      <ProductGrid productList={products} />

      {/* pagination */}
      <Pagination
        category={category}
        currentPage={currentPage}
        totalCount={count}
      />
    </div>
  );
}

export default AllProducts;
