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
              className='min-w-full min-h-[550px] lg:min-h-full overflow-hidden relative transition-all duration-150'
              style={{ transform: `translateX(${activeImage * 100}%)` }}
            >
              <div className='w-full h-full '>
                <Image
                  src={item?.backdrop}
                  className='h-full object-cover w-full'
                  alt={item?.name}
                  priority
                  loading='lazy'
                />
              </div>

              {/*  next and prev button */}
              <div className='absolute top-0 w-full h-full flex-between px-4 '>
                <button
                  onClick={handleNext}
                  className='bg-white  p-1 rounded-full text-2xl z-10 text-black '
                >
                  <FaAngleRight />
                </button>
                <button
                  onClick={handlePrev}
                  className='bg-white  p-1 rounded-full text-2xl z-10'
                >
                  <FaAngleLeft />
                </button>
              </div>

              <div className='absolute top-0  w-full h-full bg-gradient-to-t from-slate-900 to-transparent '></div>

              <div className='container w-full mx-auto absolute bottom-0 lg:bottom-10 max-w-md px-3 text-white pb-2 text-center'>
                <h2 className='font-bold text-2xl text-center'>{item?.name}</h2>
                <p className='text-ellipsis line-clamp-3 text-slate-200  my-2'>
                  {item?.description}
                </p>

                <div className='flex-center gap-2'>
                  <p>امتیاز : {item?.rating}+</p>
                  <span>|</span>
                  <p>زمان : {item?.duration}دقیقه</p>
                </div>
                <Link href={`/movie/${item?.id}`} className=' px-4 py-2 text-black font-bold rounded mt-4 bg-gradient-to-r from-grown-50 to-grown-100 shadow-md  transition-all hover:bg-opacity-75'>
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
