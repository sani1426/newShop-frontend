
"use client";

import { Pagination } from "flowbite-react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

function PageChanging({category}) {
    const router = useRouter()
  const [currentPage, setCurrentPage] = useState(1);

  const onPageChange = (page) => {
    setCurrentPage(page);
  }
  useEffect(()=>{
    router.push(`/${category}?pageNumber=${currentPage}`)
  },[currentPage])
  return (
    <div dir="ltr" className="flex overflow-x-auto sm:justify-center mt-8">
      <Pagination dir="ltr" currentPage={currentPage} totalPages={4} onPageChange={onPageChange} showIcons />
    </div>
  );
}

export default PageChanging