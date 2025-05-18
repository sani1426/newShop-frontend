'use client'
import { MdLogin } from 'react-icons/md'
import Logo from './logo.jsx'
import { FaCartShopping } from 'react-icons/fa6'
import Link from 'next/link'
import { useAppContext } from '@/context/appContext.jsx'
import ThemeToggle from '../themeToggle/ThemeToggle.jsx'

const Topbar = () => {
  const { user, setUser } = useAppContext()

  return (
    <header className='h-16  bg_soft  shadow-md fixed w-full z-50'>
      <div className='container mx-auto flex-between h-full gap-8   px-4'>
        <Link className='flex-center ' href='/'>
          <Logo w={70} h={40} />
          <span className='text-2xl text-grown-50'>NewShop</span>
        </Link>

        <div className='hidden max-w-md w-full  rounded-md border border-grown-50  shadow-sm focus-within:shadow-md  md:block'>
          <input
            type='text'
            placeholder='Search for Product'
            className='w-full py-2 rounded-md pl-4 outline-none'
          />
        </div>

        <div className='flex items-center justify-end  gap-4'>
          {user ? (
            <h1>{user?.name}</h1>
          ) : (
            <Link
              href='/login'
              className='bg-transparent border-2 px-4 py-2 rounded-md text-sm flex-center gap-2'
            >
              <span className='text-xl'>
                <MdLogin />
              </span>
              <span>Login / Sign up</span>
            </Link>
          )}

            <ThemeToggle />

        </div>
      </div>
    </header>
  )
}

export default Topbar
