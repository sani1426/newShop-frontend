'use client'
import { MdLogin } from 'react-icons/md'
import Logo from './logo.jsx'
import { FaUserCircle } from 'react-icons/fa'
import Link from 'next/link'
import { useAppContext } from '@/context/appContext.jsx'
import ThemeToggle from '../themeToggle/ThemeToggle.jsx'

import { navItem } from '@/data/constance.js'

import SearchToggle from '../themeToggle/searchToggle.jsx'
import { usePathname } from 'next/navigation.js'
import { useEffect } from 'react'




const Topbar = () => {
  const pathname = usePathname()
  const { user } = useAppContext()

  useEffect(()=>{
   

    window.addEventListener('scroll', function() {
      const navbar = document.querySelector('#navbar');
      if (window.scrollY > 60) { // Adjust the scroll threshold as needed
        navbar.classList.add('bg_main');
        navbar.classList.remove('nav-class');
        console.log('scroll')
      } else {
        navbar.classList.remove('bg_main');
        navbar.classList.add('nav-class');
      }
    });
 
  } ,[])

  return (
    <header id='navbar' className='h-20 nav-class  shadow-md fixed w-full z-[1000]'>
      <div className='container my-auto mx-auto flex-between h-full gap-8 lg:gap-12   px-4'>
        <Link className='flex-center ' href='/'>
          <Logo w={70} h={40} />
          <span className='text-2xl text-grown-50 text-nowrap'>سامی فیلم</span>
        </Link>

        <div className='hidden w-full lg:block'>
          <ul className='flex-center gap-7'>
            {navItem.map((item) => (
              <li key={item?.id}>
                <Link
                  className={`${
                    pathname === item?.href ? 'text-grown-100' : ''
                  } hover:text-grown-50 transition-all duration-300 flex-center gap-1 text-xl`}
                  href={item?.href}
                >
                  {item?.icon}
                  <span className='text-lg text-nowrap'>{item?.label}</span>
                </Link>
              </li>
            ))}
        
          </ul>
        </div>

        <div className='w-full flex items-center justify-end  gap-4'>
          {user ? (
            <h1>{user?.name}</h1>
          ) : (
            <>
              <Link
                href='/login'
                className='hidden primary text-white dark:text-black px-3 py-3 rounded-sm  md:flex md:items-center justify-center gap-2'
              >
                <span className='text-xl'>
                  <MdLogin />
                </span>
                <span className='text-nowrap'>ورود / ثبت نام</span>
              </Link>

              <Link
                href='/login'
                className=' bg-transparent border-2 px-3 py-2 rounded-md text-2xl md:hidden'
              >
                <FaUserCircle />
              </Link>
            </>
          )}

          <SearchToggle />
          <ThemeToggle />
        </div>
      </div>
    </header>
  )
}

export default Topbar
