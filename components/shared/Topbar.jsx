'use client'
import { MdLogin } from 'react-icons/md'
import Logo from './logo.jsx'
import { FaCartShopping } from 'react-icons/fa6'
import Link from 'next/link'
import { useAppContext } from '@/context/appContext.jsx'


const Topbar = () => {
  const { user, setUser } = useAppContext()

  

  return (
    <header className='h-16  bg_soft  shadow-md fixed w-full z-50'>
      <div className='container mx-auto flex-between h-full gap-5   px-4'>
        <Link className='flex-center grow-1' href='/'>
          <Logo w={70} h={40} />
          <span className='text-2xl text-grown-50'>NewShop</span>
        </Link>

        <div className='hidden grow-3 w-full  rounded-md border border-grown-50  shadow-sm focus-within:shadow-md  md:block'>
          <input
            type='text'
            placeholder='Search for Product'
            className='w-full py-2 rounded-md pl-4 outline-none'
          />
        </div>

        <div className='flex justify-end grow-2 gap-4'>
          {user ? (
            <h1>{user?.name}</h1>
          ) : (
            <Link href="/login" className='bg-transparent border-2 px-4 py-2 rounded-md text-sm flex-center gap-2'>
              <span className='text-xl'>
                <MdLogin />
              </span>
              <span>Login / Sign up</span>
            </Link>
          )}

          <button className='text-3xl'>
            <FaCartShopping />
          </button>
        </div>
      </div>
    </header>
  )
}

export default Topbar
