
import SummaryApi from '@/common';
import axios from 'axios';
import React from 'react'

const page = async () => {

let Movies ;

const {data} = await axios.get(`${SummaryApi.getMoviesByCategory.url}/movie`)

if(data.success){
  Movies = await data?.data
}


  return (
    <div className='pt-20'>
      {
        Movies.map(item => (
          <h1 key={item?._id}>{item?.name}</h1>
        ))
      }
    </div>
  )
}

export default page