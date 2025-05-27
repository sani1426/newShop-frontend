
import SummaryApi from '@/common';
import AnimationCard from '@/components/shared/AnimationCard';
// import Card from '@/components/shared/Card';
import FillterBar from '@/components/shared/fillterBar';
import axios from 'axios';
import React from 'react'

const page = async () => {

let Tv ;

const {data} = await axios.get(`${SummaryApi.getMoviesByCategory.url}/tv`)

if(data.success){
  Tv = await data?.data
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
    </div>
  )
}

export default page