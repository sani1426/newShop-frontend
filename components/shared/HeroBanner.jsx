"use client"

import React, { useState } from 'react'
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa'


const HeroBanner = ({bannerMovies}) => {

const [activeImage , setActiveImage] = useState(0)
  const handleNext = ()=> {
      if(activeImage < bannerMovies.length - 1){
        setActiveImage(prev => prev + 1)
      }
  }
  const handlePrev = ()=> {
    if(activeImage > 0){
      setActiveImage(prev => prev - 1)
    }
  }




  return (
    <section className='w-full h-full'>
        <div className="flex min-h-full max-h-[95vh] overflow-hidden">
            {
              bannerMovies.map((item , index) => {

                return(
                  <div className="min-w-full min-h-[450px] lg:min-h-full overflow-hidden relative "  style={{transform : `translateX(-${activeImage * 100}%)`}}>
                    <div className="w-full h-full ">
                      <img src={item?.backdrop} className='h-full object-cover w-full'  alt={item?.name} />
                    </div>

                    {/*  next and prev button */}
                    <div className="absolute top-0 w-full h-full flex-between px-4 ">
                      <button onClick={handleNext} className='bg-white  p-1 rounded-full text-2xl z-10 text-black '>
                        <FaAngleRight />
                      </button>
                      <button onClick={handlePrev} className='bg-white  p-1 rounded-full text-2xl z-10'>
                        <FaAngleLeft />
                      </button >
                    </div> 

                    <div className="absolute top-0  w-full h-full bg-gradient-to-t from-slate-900 to-transparent pb-2"></div>

                    <div className="container w-full mx-auto absolute bottom-0 max-w-md px-3 text-white">
                      <h2 className='font-bold text-2xl'>{item?.name}</h2>
                      <p className="text-ellipsis line-clamp-3 text-slate-100  my-2">{item?.description}</p>

                      <div className="flex-center gap-2">
                        <p>امتیاز : {item?.rating}+</p>
                        <span>|</span>
                        <p>زمان : {item?.duration}دقیقه</p>
                      </div>
                      <button className=' px-4 py-2 text-black font-bold rounded mt-4 bg-gradient-to-r from-grown-50 to-grown-100 shadow-md  transition-all hover:bg-opacity-75'>
                        مشاهده
                      </button>
                    </div>

                  </div>
                )
              })
            }
        </div>
    </section>
  )
}

export default HeroBanner