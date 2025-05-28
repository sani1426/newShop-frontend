import SummaryApi from '@/common'
import AnimationCard from '@/components/shared/AnimationCard'

import FillterBar from '@/components/shared/fillterBar'
import PageChanging from '@/components/shared/pagination'



import axios from 'axios'
import React from 'react'

const page = async ({searchParams}) => {
  let Movies ;
  let total ;
const {pageNumber} = await searchParams
console.log(pageNumber);
  const { data } = await axios.get(
    `${SummaryApi.getMoviesByCategory.url}/movie?pageNumber=${Number(pageNumber)}`
  )

  if (data.success) {
    Movies = await data?.data
    total = data?.totalDocument
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
      <PageChanging category="movie" totalDocument={total} />
    </div>
  )
}

export default page
