"use client"

import { useState } from 'react'
import { IoSearchOutline } from 'react-icons/io5'

const SearchToggle = () => {
    const [open , setOpen]=useState(false)
  return (
    <>
      <button onClick={()=>setOpen(!open)} className=' bg-transparent border-2 px-3 py-2 rounded-md text-2xl '>
        <IoSearchOutline />
      </button>

      {
        open && (
            <div className="w-full lg:w-[500px] h-[5rem] flex-center bg_soft absolute py-2 px-8 lg:px-5 top-[5.5rem] left-0 rounded-md ">
                <input className="w-full rounded-md px-4 py-2 bg-gray-300 " type="text" placeholder="سرچ کنید" />
            </div>
        )
      }
    </>
  )
}

export default SearchToggle
