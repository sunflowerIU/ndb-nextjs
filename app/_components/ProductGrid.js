import ProductCard from "./ProductCard";

async function ProductGrid({ productList }) {
  return (
    <div className="flex w-full justify-center">
      {/* Centered max-width container */}
      <div className="grid w-full max-w-[1200px] grid-cols-2 place-items-center gap-4 px-4 py-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
        {productList.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default ProductGrid;
