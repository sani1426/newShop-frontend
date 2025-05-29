'use client'

import { navItem } from '@/data/constance'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect } from 'react'

const MobileNav = () => {
  const pathname = usePathname()

  useEffect(() => {
    window.addEventListener('scroll', function () {
      const navbar = document.querySelector('#navbar')
      if (window.scrollY > 60) {
   
        navbar.classList.add('bg_main')
        navbar.classList.remove('nav-class')
      } else {
        navbar.classList.remove('bg_main')
        navbar.classList.add('nav-class')
      }
    })
  }, [])
  return (
    <>
      <div
        id='navbar'
        className='lg:hidden py-2 w-full fixed  bottom-0  nav-class  z-[1000] '
      >
        <div className='flex items-center justify-evenly h-full transition-all duration-500'>
          {navItem.map((item) => (
            <Link
              key={item?.id}
              href={item?.href}
              className={` flex h-full items-center flex-col justify-center hover:text-grown-50 transition-all duration-300  p-4 rounded-full ${
                pathname === item?.href && 'text-grown-100 '
              }`}
            >
              <div className='text-2xl'>{item?.icon}</div>
              <p className=''>{item?.label}</p>
            </Link>
          ))}
        </div>
      </div>
    </>
  )
}

export default MobileNav
