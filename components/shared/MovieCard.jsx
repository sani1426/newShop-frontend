

import Image from 'next/image'
import React from 'react'
import { MdInfoOutline } from 'react-icons/md'

const MovieCard = ({movie}) => {
  return (
   <div className='flex flex-col px-10 pt-20 gap-10 max-w-xl'>
    <div className="absolute top-0 left-0 -z-10 h-screen w-screen">
        <img className='object-cover w-full h-full' src={movie?.movieImage} alt={movie?.name}/>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black-1"></div>
    </div>

    <h1 className='text-white text-2xl '>{movie?.name}</h1>
    <p className='text-white text-sm'>{movie?.description}</p>

    <div className="">
        <button className='flex-center gap-1.5 px-4 py-3 rounded-xl cursor-pointer bg-white text-xl'><MdInfoOutline /> More Info</button>
    </div>
   </div>
  )
}

export default MovieCard