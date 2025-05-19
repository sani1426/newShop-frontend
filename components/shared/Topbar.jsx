'use client'
import { MdLogin } from 'react-icons/md'
import Logo from './logo.jsx'
import { FaUserCircle } from 'react-icons/fa'
import Link from 'next/link'
import { useAppContext } from '@/context/appContext.jsx'
import ThemeToggle from '../themeToggle/ThemeToggle.jsx'
import MenuBar from './MenuBar.jsx'
import { navItem } from '@/data/constance.js'

const Topbar = () => {
  const { user, setUser } = useAppContext()

  return (
    <header className='h-16  bg_soft  shadow-md fixed w-full z-50'>
      <div className='container mx-auto flex-between h-full gap-8   px-4'>
        <Link className='flex-center ' href='/'>
          <Logo w={70} h={40} />
          <span className='text-2xl text-grown-50'>سامی فیلم</span>
        </Link>

        <div className='hidden w-full lg:block'>
          <ul className='flex-center gap-7'>
            {navItem.map((item) => (
              <li key={item?.id}>
                <Link href={item?.href}>{item?.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className='flex items-center justify-end  gap-4'>
          {user ? (
            <h1>{user?.name}</h1>
          ) : (
            <>
              <Link
                href='/login'
                className='hidden bg-transparent border-2 px-4 py-2 rounded-md text-sm md:flex md:items-center justify-center gap-2'
              >
                <span className='text-xl'>
                  <MdLogin />
                </span>
                <span>ورود / ثبت نام</span>
              </Link>

              <Link
                href='/login'
                className=' bg-transparent border-2 px-3 py-2 rounded-md text-2xl md:hidden'
              >
                <FaUserCircle />
              </Link>
            </>
          )}

          <ThemeToggle />
          <MenuBar />
        </div>
      </div>
    </header>
  )
}

export default Topbar
