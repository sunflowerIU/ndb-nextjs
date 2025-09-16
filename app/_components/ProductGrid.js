import ProductCard from "./ProductCard";

// grid-cols-[repeat(auto-fit,minmax(265px,2fr))]
// sm:grid-cols-3 md:grid-cols-4 grid-cols-2
function ProductGrid({ productList }) {
  return (
    <div className="mx-auto grid max-w-[1200px] grid-cols-2 gap-4 px-4 py-6 sm:grid-cols-3 sm:px-10 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
      {productList.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}

export default ProductGrid;
