'use client'

import { useAppContext } from '@/context/appContext'
import Image from 'next/image'


const ThemeToggle = () => {
  const { theme, toggleTheme } = useAppContext()
  console.log(theme)
  return (
    <div
      onClick={toggleTheme}
      className={`min-w-[50px] h-[30px] relative flex-between rounded-[50px] cursor-pointer px-1 transition-all ${
        theme === 'light' ? 'bg-sky-200' : 'bg-blue-600'
      }`}
    >
      <Image src='/icons/sun.png' alt='sun' width={14} height={14} />
      <div
        className={`w-[25px] h-[25px] rounded-full absolute transition-all  bg-white ${
          theme === 'light' ? 'left-[1px]' : 'right-[1px]'
        }`}
      >
        {theme === 'light' ? (
     <img
     src='/icons/sun.png'
     alt='logo-image'
  className='w-25 h-25 rounded-full object-cover'
   />
        ) : (
          <img
          src='/icons/newmoon.png'
          alt='logo-image'
       className='w-25 h-25 rounded-full object-cover'
        />
        )}
      </div>
      <Image src='/icons/moon.png' alt='moon' width={14} height={14} />
    </div>
  )
}

export default ThemeToggle
