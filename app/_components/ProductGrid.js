import { getProducts } from "@/_lib/data-service";
import ProductCard from "./ProductCard";

async function ProductGrid({ type }) {
  const productList = await getProducts(type);
  // const finalProductList = !type
  //   ? productList
  //   : productList.filter((product) => product.type === type);
  return (
    <div className="mx-auto grid max-w-[1200px] grid-cols-2 gap-4 px-4 py-6 sm:grid-cols-3 sm:px-10 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
      {productList.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}

export default ProductGrid;
