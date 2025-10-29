"use client";

import { useSearchParams } from "next/navigation";
import { useState } from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";

function Pagination() {
  const [currentPage, setCurrentPage] = useState(1);
  const params = useSearchParams();

  return (
    <div className="text-royal mt-5 mb-5 flex flex-row items-center justify-center gap-3 text-2xl">
      <span
        className="cursor-pointer"
        onClick={() => setCurrentPage((currentPage) => currentPage - 1)}
      >
        <FaAngleLeft />
      </span>
      <span>{currentPage}</span>
      <span
        className="cursor-pointer"
        onClick={() => setCurrentPage((currentPage) => currentPage + 1)}
      >
        <FaAngleRight />
      </span>
    </div>
  );
}

export default Pagination;
