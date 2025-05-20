

import Image from 'next/image'
import React from 'react'
import { MdInfoOutline } from 'react-icons/md'

const MovieCard = ({movie}) => {
  return (
   <div className='hero'>
    <div className="herobg">
        <img className='hero-bg-image' src={movie?.movieImage} alt={movie?.name}/>
        <div className="overlay"></div>
    </div>

    <h1 className='hero-title'>{movie?.name}</h1>
    <p className='hero-overview'>{movie?.description}</p>

    <div className="hero-btns">
        <button className='hero-btn'><MdInfoOutline /> More Info</button>
    </div>
   </div>
  )
}

export default MovieCard