import Link from "next/link";
import Button from "./Button";
import ProductGrid from "./ProductGrid";
const productList = [
  {
    id: 1,
    name: "Steel Thermos",
    type: "thermos",
    price: "Rs. 1200",
    image: "/thermos1.png",
  },
  {
    id: 2,
    name: "Water Bottle",
    type: "bottle",
    price: "Rs. 900",
    image: "/thermos2.png",
  },
  {
    id: 3,
    name: "Milk Frother",
    type: "others",
    price: "Rs. 2500",
    image: "/thermos3.png",
  },
  {
    id: 4,
    name: "Premium Hanger",
    type: "others",
    price: "Rs. 500",
    image: "/shaker1.png",
  },
  {
    id: 5,
    name: "Milk Frother",
    type: "others",
    price: "Rs. 2500",
    image: "/thermos3.png",
  },
  {
    id: 6,
    name: "Premium Hanger",
    type: "others",
    price: "Rs. 500",
    image: "/shaker1.png",
  },
];
function ShowMoreButton() {
  return (
    <Link href="/all-products">
      <Button type="primary">Show More</Button>
    </Link>
  );
}

function HomeProducts() {
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

      {/* Product Grid */}
      <ProductGrid productList={productList} />

      {/* Bottom Show More (mobile only) */}
      <div className="mx-auto mt-10 flex max-w-[1200px] justify-center sm:hidden">
        <ShowMoreButton />
      </div>
    </main>
  );
}

export default HomeProducts;
