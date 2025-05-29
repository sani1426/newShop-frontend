"use client"


import AnimationCard from '@/components/shared/AnimationCard'

import FillterBar from '@/components/shared/fillterBar'

import { useAppContext } from '@/context/appContext'
import React from 'react'

const page = () => {
    const {searchResult}=useAppContext()
 
  return (
    <div className='py-20 bg_soft'>
      <FillterBar />

  <div className='container mx-auto pt-8'>
    <div className='grid grid-cols-3 lg:grid-cols-5 items-center justify-center gap-6'>

    {
            searchResult ? (
                searchResult.map(item => (
                    <AnimationCard key={item?._id}  data={item}/>
                  ))
            ):(
                <div>
                    <h1>
                        movie not Found
                    </h1>
                </div>
            )
    }
    </div>
  </div>

  </div>
  )
}

export default page