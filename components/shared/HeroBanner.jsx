'use client'

import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa'

const HeroBanner = ({ bannerMovies }) => {
  const [activeImage, setActiveImage] = useState(0)
  const handleNext = () => {
    if (activeImage < bannerMovies.length - 1) {
      setActiveImage((prev) => prev + 1)
    } else {
      setActiveImage(0)
    }
  }
  const handlePrev = () => {
    if (activeImage > 0) {
      setActiveImage((prev) => prev - 1)
    }
  }

  setTimeout(() => {
    handleNext()
  }, 5000)
  return (
    <section className='w-full h-full'>
      <div className='flex min-h-full max-h-[100vh] overflow-hidden'>
        {bannerMovies.map((item, index) => {
          return (
            <div
              key={index}
              className='min-w-full min-h-[450px] lg:min-h-full overflow-hidden relative transition-all duration-150'
              style={{ transform: `translateX(${activeImage * 100}%)` }}
            >
              <div className='w-full h-full '>
                <Image
                  src={item?.backdrop}
                  className='h-full object-cover w-full'
                  alt={item?.name}
                  priority
               
                />
              </div>

              {/*  next and prev button */}
              <div className='absolute top-0 w-full h-full flex-between px-4 '>
                <button
                  onClick={handleNext}
                  className=' p-1 bg-transparent text-2xl z-10 text-slate-300 hover:text-slate-50  hover:bg-slate-300 transition-all duration-300'
                >
                  <FaAngleRight />
                </button>
                <button
                  onClick={handlePrev}
                  className='p-1 bg-transparent text-2xl z-10 text-slate-300 hover:text-slate-50  hover:bg-slate-300 transition-all duration-300'
                >
                  <FaAngleLeft />
                </button>
              </div>

              <div className='absolute top-0  w-full h-full bg-gradient-to-t from-slate-900 to-transparent '></div>

              <div className='container w-full mx-auto absolute bottom-0 lg:bottom-12 left-2 max-w-md lg:max-w-xl px-3 text-white pb-4 flex flex-col gap-4 '>
                <h1 className='font-bold text-2xl lg:text-4xl text-center'>{item?.name}</h1>
                <p className='text-ellipsis line-clamp-2 lg:line-clamp-4 text-slate-200  my-2'>
                  {item?.description}
                </p>

                <div className='flex-center gap-2'>
                  <p>امتیاز : {item?.rating}+</p>
                  <span>|</span>
                  <p>زمان : {item?.duration}دقیقه</p>
                </div>


                <Link href={`/movie/${item?._id}`} className=' px-4 py-2 text-black font-bold rounded mt-8 bg-gradient-to-r from-grown-50 to-grown-100 shadow-md  transition-all hover:bg-opacity-75 text-center'>
                  مشاهده
                </Link>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default HeroBanner
