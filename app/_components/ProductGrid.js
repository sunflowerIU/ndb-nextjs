import { getHomeProducts, getProducts } from "@/_lib/data-service";
import ProductCard from "./ProductCard";
import Pagination from "./Pagination";

async function ProductGrid({ type }) {
  let productList;
  if (type) {
    productList = await getProducts(type);
  } else {
    productList = await getHomeProducts();
  }
  // console.log(productList);
  // const finalProductList = !type
  //   ? productList
  //   : productList.filter((product) => product.type === type);
  return (
    <div className="max-w-[1200px]">
      {/* product grid */}
      <div className="mx-auto grid grid-cols-2 gap-4 px-4 py-6 sm:grid-cols-3 sm:px-10 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
        {productList.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {/* pagination */}
      <div className="flex justify-center">{type && <Pagination />}</div>
    </div>
  );
}

export default ProductGrid;
