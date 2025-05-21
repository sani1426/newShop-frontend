
import SummaryApi from '@/common';
import axios from 'axios';
import React from 'react'

const page = async () => {

let Movies ;

const {data} = await axios.get(`${SummaryApi.getMoviesByCategory}/movie`)

if(data.success){
  Movies = await data?.data
}


  return (
    <div>
      {
        Movies.map(item => {
          <h1 key={item?.id}>{item?.name}</h1>
        })
      }
    </div>
  )
}

export default page