

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
                    <div className="w-full h-full relative">
                      <Image src={item?.backdrop} className='h-full object-cover w-full' fill priority alt={item?.name} />
                    </div>

                    <div className="absolute top-0  w-full h-full bg-gradient-to-t from-slate-800 to-transparent"></div>

                    <div className="container mx-auto absolute bottom-0 max-w-md"></div>

                  </div>
                )
              })
            }
        </div>
    </section>
  )
}

export default HeroBanner