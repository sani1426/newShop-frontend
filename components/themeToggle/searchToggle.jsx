'use client'

import SummaryApi from '@/common'
import { useAppContext } from '@/context/appContext'
import axios from 'axios'
import { usePathname, useRouter } from 'next/navigation'

import { useEffect, useState } from 'react'
import { IoSearchOutline } from 'react-icons/io5'

const SearchToggle = () => {
  const { setSearchResult} = useAppContext()
  const pathname = usePathname()
  const router = useRouter()
  const [open, setOpen] = useState(false)
  const [query , setQuery] = useState('')


  useEffect(() => {
    const timeOut = setTimeout(async () => {
      if (query) {
        const { data } = await axios.get(`${SummaryApi.getMoviesByFillter.url}?search=${query}`);
        setSearchResult(data.data);
      } else {
        setSearchResult([]);
      }
    }, 800);
    return () => {
      clearTimeout(timeOut);
    };
  }, [query]);

  return (
    <>
      <button
        onClick={() => {
          if (pathname !== '/search') {
            router.push('/search')
          }
          setOpen(!open)
        }}
        className=' bg-transparent border-2 px-3 py-2 rounded-md text-2xl '
      >
        <IoSearchOutline />
      </button>


        <div className={`w-full lg:w-[500px] h-[5rem] flex-center bg_soft absolute py-2 px-8 lg:px-5 top-[5.5rem] left-0 rounded-md transition-all duration-500  ${open ? "opacity-1 pointer-events-auto" : 'opacity-0 pointer-events-none'} `}>
          <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
            className='w-full rounded-md px-4 py-2 bg-gray-300 '
            type='text'
            placeholder='سرچ کنید'
          />
        </div>
      
    </>
  )
}

export default SearchToggle
