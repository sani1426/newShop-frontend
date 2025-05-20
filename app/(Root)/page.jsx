"use client"

import SummaryApi from "@/common";
import { useEffect, useState } from "react";


export default function Home() {
  const [movies , setMovies]=useState()
  const getMoviesByGenre = async () => {
    const response = await fetch(`${SummaryApi.getMoviesByGenre.url}/?genre=درام`)

    const result = await response.json()
    if(result){
      setMovies(result?.data)

    }

  }
  useEffect(()=>{getMoviesByGenre()},[])
  return (
<>
<div className="text-rose-600 text-6xl w-screen h-screen pt-20">
  {movies?.map((item)=> (
    <h1>{item?.name}</h1>
  ))}
</div>
</>
  );
}
