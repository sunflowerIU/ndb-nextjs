import { Suspense } from "react";
import TypeOptions from "../_components/TypeOptions";
import ProductGrid from "../_components/ProductGrid";

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
function AllProducts({ searchParams }) {
  const type = searchParams?.type ?? "thermos";
  const finalProductList = productList.filter(
    (product) => product.type === type,
  );
  return (
    <div>
      {/* options */}
      <TypeOptions />

      {/* products */}
      <Suspense fallback={<p>loading...</p>}>
        <ProductGrid productList={finalProductList} />
      </Suspense>
    </div>
  );
}

export default AllProducts;
