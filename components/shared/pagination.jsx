
"use client";

import { Pagination } from "flowbite-react";
import { useRouter } from "next/navigation";
import { useState } from "react";

export function Pagination() {
    const router = useRouter()
  const [currentPage, setCurrentPage] = useState(1);

  const onPageChange = (page) => {
    setCurrentPage(page);
    router.push(`/movie?pageNumber=${currentPage}`)
  }
  return (
    <div className="flex overflow-x-auto sm:justify-center">
      <Pagination currentPage={currentPage} totalPages={100} onPageChange={onPageChange} showIcons />
    </div>
  );
}
