

import SummaryApi from '@/common'

import NewCard from '@/components/shared/NewCard'
import FillterBar from '@/components/shared/fillterBar'
import PageChanging from '@/components/shared/pagination'
import axios from 'axios'
import React from 'react'

const page = async ({params}) => {
    const {genre} = params
    let Movies ;
    let total ;

    const {data} = await axios.get(`${SummaryApi.getMoviesByGenre.url}؟genre=${genre}`)

    if(data.success) {
        Movies = data?.data
        total = data?.totalDocument
    }
  return (
    <div className='py-20 bg_soft'>
    <FillterBar />

    <div className='container mx-auto pt-8'>
      <div className='grid grid-cols-3 lg:grid-cols-5 items-center justify-center gap-6'>
        {Movies.map((item) => (
          <NewCard key={item?._id} data={item} />
        ))}
      </div>
    </div>
    <PageChanging category={`search/${genre}`} totalDocument={total} />
  </div>
  )
}

export default page