'use client'
import { MdLogin } from 'react-icons/md'
import Logo from './logo.jsx'
import { FaCartShopping } from 'react-icons/fa6'
import Link from 'next/link'
import { useAppContext } from '@/context/appContext.jsx'
import useFetchData from '@/hooks/useFetchData.js'
import SummaryApi from '@/common/index.js'
import { useEffect } from 'react'

const Topbar = () => {
  const { setUser, user } = useAppContext()

  const getUserDetails = async () => {
    const { result } = await useFetchData(SummaryApi.UserDetail.url, 'get')
    setUser(result)
  }

  useEffect(() => {
    getUserDetails()
  }, [])



  
  return (
    <header className='h-16 bg-white shadow-md fixed w-full z-50'>
      <div className='container mx-auto flex-between h-full   px-4'>
        <Link className='flex-center' href='/'>
          <Logo w={70} h={40} />
          <span className='text-2xl text-grown-50'>NewShop</span>
        </Link>

        <div className='hidden w-full max-w-sm  rounded-md border border-grown-50  shadow-sm focus-within:shadow-md  md:block'>
          <input
            type='text'
            placeholder='Search for Product'
            className='w-full py-2 rounded-md pl-4 outline-none'
          />
        </div>

        <div className='flex justify-end gap-4'>
          {user ? (
            <h1>{user?.name}</h1>
          ) : (
            <button className='bg-transparent border-2 px-4 py-2 rounded-md text-sm flex-center gap-2'>
              <span className='text-xl'>
                <MdLogin />
              </span>
              <span>Login / Sign up</span>
            </button>
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
