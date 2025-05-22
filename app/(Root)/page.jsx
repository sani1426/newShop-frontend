"use client"

import SummaryApi from '@/common'
import HeroBanner from '@/components/shared/HeroBanner'
import axios from 'axios'
import { useEffect, useState } from 'react'



export default  function Home() {
 const [movies , setMovies] =useState()

 const getMovie = async ()=>{

   const {data} = await axios.get(SummaryApi.getHeroMovies.url)
   console.log(data);
   if (data.success) {
     setMovies(data?.data)
     
   }
 }

 useEffect(()=>{getMovie()},[])
  return (
    <>
      <HeroBanner bannerMovies={movies} />
    </>
  )
}
