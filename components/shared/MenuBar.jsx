"use client"

import { useState } from "react";
import { MdOutlineMenu } from "react-icons/md";



const MenuBar = () => {
    const[open , setOpen] = useState(false)
  return (
    <>
    <button onClick={()=>setOpen(!open)} className=' bg-transparent border-2 px-3 py-2 rounded-md text-2xl md:hidden'>
<MdOutlineMenu  />
    </button>

   {
    open && (
        <div style={{height :'calc(100vh - 64px)'}} className="w-screen  absolute top-16 left-0 transition-all duration-500 bg-blue-600 z-50">

        </div>
    )
   }
    </>
  )
}

export default MenuBar