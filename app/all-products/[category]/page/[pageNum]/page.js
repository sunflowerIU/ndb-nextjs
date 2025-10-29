import AllProducts from "@/app/_components/AllProducts";
import Spinner from "@/app/_components/Spinner";
import TypeOptions from "@/app/_components/TypeOptions";
import { Suspense } from "react";

async function page({ params }) {
  const { pageNum, category } = await params;
  return (
    <>
      <TypeOptions category={category} />
      <>
        <Suspense fallback={<Spinner />}>
          <AllProducts category={category} currentPage={+pageNum} />;
        </Suspense>
      </>
    </>
  );
}

export default page;
