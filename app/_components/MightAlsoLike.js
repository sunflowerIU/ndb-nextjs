import { getProducts } from "@/_lib/data-service";
import ProductCard from "./ProductCard";

async function MightAlsoLike({ product }) {
  const products = await getProducts(product.type);

  const mightAlsoLike = products
    .filter((item) => item.id !== product.id)
    .slice(0, 4);
  if (mightAlsoLike.length < 1) return;
  return (
    <section className="mt-16 border-t border-gray-200 pt-10">
      <h2 className="font-raleway mb-6 text-xl font-semibold text-gray-800">
        You might also like
      </h2>
      <div className="mx-auto grid max-w-[1200px] grid-cols-2 gap-4 px-4 py-6 sm:grid-cols-3 sm:px-10 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
        {/* You can map related products here */}
        {mightAlsoLike?.map((item) => (
          <ProductCard key={item.id} product={item} />
        ))}
      </div>
    </section>
  );
}

export default MightAlsoLike;
