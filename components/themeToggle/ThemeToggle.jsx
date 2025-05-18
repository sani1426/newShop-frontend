"use client"

import { useAppContext } from '@/context/appContext'
import Image from 'next/image'

const ThemeToggle = () => {
    const{theme , toggleTheme}= useAppContext()
    console.log(theme);
  return (
    <div onClick={toggleTheme} className={`w-[40px] h-[20px] relative flex-between rounded-[50px] cursor-pointer px-1 transition-all ${theme === "light" ? "bg-sky-200" : "bg-blue-600"}`}>
      <Image src='/icons/moon.png' alt='moon' width={14} height={14} />
      <div className={`w-[15px] h-[15px] rounded-full absolute transition-all  bg-white ${theme === 'light' ? "left-[1px]" : "right-[1px]"}`}></div>
      <Image src='/icons/sun.png' alt='moon' width={14} height={14} />
    </div>
  )
}

export default ThemeToggle
