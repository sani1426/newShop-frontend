'use client'

import { Pagination } from 'flowbite-react'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'

function PageChanging({ category, totalDocument }) {
  const router = useRouter()
  const [currentPage, setCurrentPage] = useState(1)
  const [totalAmount, setTotalAmount] = useState(
    Math.ceil(Number(totalDocument) / 8)
  )

  const onPageChange = (page) => {
    setCurrentPage(page)
  }
  useEffect(() => {
    router.push(`/${category}?pageNumber=${currentPage}`)
  }, [currentPage])
  return (
    <div dir='ltr' className='flex-center overflow-x-auto sm:justify-center mt-8'>
      <Pagination
      className='bg_soft'
        dir='ltr'
        currentPage={currentPage}
        totalPages={totalAmount}
        onPageChange={onPageChange}
        showIcons
      />
    </div>
  )
}

export default PageChanging
