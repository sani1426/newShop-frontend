
"use client";


import { useRouter } from "next/navigation";
import { useState } from "react";

function Pagination() {
    const router = useRouter()
  const [currentPage, setCurrentPage] = useState(1);

  const onPageChange = (page) => {
    setCurrentPage(page);
    router.push(`/movie?pageNumber=${currentPage}`)
  }
  return (
    <div dir="ltr" className="w-full flex-center">
        <ul className="flex-center gap-2">
            <li className="p-2 border-2 text-xl" onClick={()=>onPageChange(1)}>1</li>
            <li className="p-2 border-2 text-xl" onClick={()=>onPageChange(2)}>2</li>
        </ul>
    </div>
  );
}

export default Pagination