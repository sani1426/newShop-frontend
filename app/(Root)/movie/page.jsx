
import SummaryApi from '@/common';
import Card from '@/components/shared/Card';
import FillterBar from '@/components/shared/fillterBar';
import axios from 'axios';
import React from 'react'

const page = async () => {

let Movies ;

const {data} = await axios.get(`${SummaryApi.getMoviesByCategory.url}/movie`)

if(data.success){
  Movies = await data?.data
}


  return (
    <div className='pt-20 bg_soft'>
      <FillterBar />

    <div className='container mx-auto'>
      <div className='grid grid-cols-3 lg:grid-cols-5 items-center justify-center gap-6'>

      {
        Movies.map(item => (
          <Card key={item?._id}  data={item}/>
        ))
      }
      </div>
    </div>
    </div>
  )
}

export default page