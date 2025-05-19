"use client"

import { IoSearchOutline } from 'react-icons/io5'

const SearchToggle = () => {
    const [open , setOpen]=useState(false)
  return (
    <div className="relative">
      <button onClick={()=>setOpen(!open)} className=' bg-transparent border-2 px-3 py-2 rounded-md text-2xl '>
        <IoSearchOutline />
      </button>

      {
        open && (
            <div className="w-20 h-8 bg_soft absolute py-2 px-4">
                <input className="w-full py-2 bg-gray-300 " type="text" placeholder="سرچ کنید" />
            </div>
        )
      }
    </div>
  )
}

export default SearchToggle
