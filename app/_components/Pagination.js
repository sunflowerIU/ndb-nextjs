"use client";

import { useRouter } from "next/navigation";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";

function Pagination({ totalCount, category, currentPage }) {
  const router = useRouter();
  const totalPage = Math.ceil(totalCount / process.env.NEXT_PUBLIC_ITEMS_LIMIT);
  console.log(totalCount);
  console.log(totalPage);

  function handleNext() {
    router.push(`/all-products/${category}/page/${currentPage + 1}`);
  }

  function handlePrev() {
    router.push(`/all-products/${category}/page/${currentPage - 1}`);
  }

  if (totalPage < 2) return;

  return (
    <div className="text-royal mt-5 mb-5 flex flex-row items-center justify-center gap-3 text-2xl">
      <button
        disabled={currentPage <= 1}
        className={`cursor-pointer ${currentPage < 2 ? "hidden" : ""}`}
        onClick={handlePrev}
      >
        <FaAngleLeft />
      </button>
      <span>{currentPage}</span>
      <button
        disabled={currentPage >= totalPage}
        className={`cursor-pointer ${currentPage < totalPage ? "" : "hidden"}`}
        onClick={handleNext}
      >
        <FaAngleRight />
      </button>
    </div>
  );
}

export default Pagination;
