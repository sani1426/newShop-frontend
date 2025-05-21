

import React from 'react'

const page = async () => {

  let Tv ;

const {data} = await axios.get(`${SummaryApi.getMoviesByCategory.url}/tv`)

if(data.success){
  Tv = await data?.data
}

  return (
    <div>
       {
        Tv.map(item => {
          <h1 key={item?.id}>{item?.name}</h1>
        })
      }
    </div>
  )
}

export default page