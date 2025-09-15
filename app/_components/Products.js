import Button from "./Button";
import ProductCard from "./ProductCard";

const productList = [
  { id: 1, name: "Steel Thermos", price: "Rs. 1200", image: "/thermos1.png" },
  { id: 2, name: "Water Bottle", price: "Rs. 900", image: "/thermos2.png" },
  { id: 3, name: "Milk Frother", price: "Rs. 2500", image: "/thermos3.png" },
  { id: 4, name: "Premium Hanger", price: "Rs. 500", image: "/shaker1.png" },
  // Reuse instead of repeating
  { id: 5, name: "Milk Frother", price: "Rs. 2500", image: "/thermos3.png" },
  { id: 6, name: "Premium Hanger", price: "Rs. 500", image: "/shaker1.png" },
];

function Products() {
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
        <Button type="primary">Show More</Button>
      </div>

      {/* Product Grid */}
      <div className="mx-auto grid max-w-[1200px] grid-cols-[repeat(auto-fit,minmax(265px,1fr))] gap-8 px-8">
        {productList.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {/* Bottom Show More (mobile only) */}
      <div className="mx-auto mt-10 flex max-w-[1200px] justify-center sm:hidden">
        <Button type="primary">Show More</Button>
      </div>
    </main>
  );
}

export default Products;
