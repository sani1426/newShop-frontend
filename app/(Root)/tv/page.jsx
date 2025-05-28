
import SummaryApi from '@/common';
import AnimationCard from '@/components/shared/AnimationCard';

import FillterBar from '@/components/shared/fillterBar';
import PageChanging from '@/components/shared/pagination';
import axios from 'axios';
import React from 'react'

const page = async () => {

let Tv ;
let totalDocument ;

const {data} = await axios.get(`${SummaryApi.getMoviesByCategory.url}/tv`)

if(data.success){
  Tv = await data?.data
  totalDocument = data?.totalDocument
}


  return (
    <div className='py-20 bg_soft'>
      <FillterBar />

    <div className='container mx-auto pt-5'>
      <div className='grid grid-cols-3 lg:grid-cols-5 items-center justify-center gap-6'>

      {
        Tv.map(item => (
          <AnimationCard key={item?._id}  data={item}/>
        ))
      }
      </div>
    </div>
    <PageChanging category="tv" totalDocument={totalDocument} />
    </div>
  )
}

export default page