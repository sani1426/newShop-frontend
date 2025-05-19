"use client"

import { useState } from "react"

const SearchToggle = () => {
    const [open , setOpen]=useState(false)
  return (
    <>
      <button className=' bg-transparent border-2 px-3 py-2 rounded-md text-2xl '>
        <IoSearchOutline />
      </button>

      {
        open && (
            <div className="w-20 h-8 bg_soft ">
                <input className="w-full py-2 bg-gray-300 " type="text" placeholder="سرچ کنید" />
            </div>
        )
      }
    </>
  )
}

export default SearchToggle
