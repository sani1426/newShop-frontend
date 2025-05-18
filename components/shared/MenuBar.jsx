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
        <div className="w-screen h-screen bg-blue-600 z-50">

        </div>
    )
   }
    </>
  )
}

export default MenuBar