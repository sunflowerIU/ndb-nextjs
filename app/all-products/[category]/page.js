import AllProducts from "@/app/_components/AllProducts";
import Spinner from "@/app/_components/Spinner";
import TypeOptions from "@/app/_components/TypeOptions";
import { Suspense } from "react";

async function Category({ params }) {
  const { category } = await params;
  // console.log(category);

  return (
    <>
      <TypeOptions category={category} />

      <>
        <Suspense fallback={<Spinner />}>
          <AllProducts category={category} currentPage={1} />
        </Suspense>
      </>
    </>
  );
}

export default Category;
