import SummaryApi from '@/common'
import AnimationCard from '@/components/shared/AnimationCard'

import FillterBar from '@/components/shared/fillterBar'
import { Pagination } from '@/components/shared/pagination'
import axios from 'axios'
import React from 'react'

const page = async ({searchParams}) => {
  let Movies
const {pageNumber} = await searchParams
console.log(pageNumber);
  const { data } = await axios.get(
    `${SummaryApi.getMoviesByCategory.url}/movie`
  )

  if (data.success) {
    Movies = await data?.data
  }

  return (
    <div className='py-20 bg_soft'>
      <FillterBar />

      <div className='container mx-auto pt-8'>
        <div className='grid grid-cols-3 lg:grid-cols-5 items-center justify-center gap-6'>
          {Movies.map((item) => (
            <AnimationCard key={item?._id} data={item} />
          ))}
        </div>
      </div>
      <Pagination />
    </div>
  )
}

export default page
