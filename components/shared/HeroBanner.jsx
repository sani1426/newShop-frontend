

import Image from 'next/image'
import React from 'react'


const HeroBanner = ({bannerMovies}) => {
  return (
    <section className='w-full h-full'>
        <div className="flex min-h-full max-h-[95vh]">
            {
              bannerMovies.map((item , index) => {

                return(
                  <div className="min-w-full min-h-[450px] lg:min-h-full overflow-hidden relative">
                    <div className="w-full h-full ">
                      <img src={item?.backdrop} className='h-full object-cover w-full'  alt={item?.name} />
                    </div>

                    <div className="absolute top-0  w-full h-full bg-gradient-to-t from-slate-800 to-transparent"></div>

                    <div className="container w-full mx-auto absolute bottom-0 max-w-md px-3">
                      <h2 className='font-bold text-2xl'>{item?.name}</h2>
                      <p className="text-ellipsis line-clamp-3  my-2">{item?.description}</p>

                      <div className="flex-center gap-2">
                        <p>امتیاز : {item?.rating}+</p>
                        <span>|</span>
                        <p>زمان : {item?.duration}دقیقه</p>
                      </div>
                      <button className='bg-white px-4 py-2 text-black font-bold rounded mt-4'>
                        Play Now
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