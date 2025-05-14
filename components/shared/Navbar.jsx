import { GrSearch } from 'react-icons/gr'
import { MdLogin } from 'react-icons/md'

import Logo from './logo.jsx'
import { FaCartShopping } from 'react-icons/fa6'
import Link from 'next/link.js'

const Navbar = () => {
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
          <button className='bg-transparent border-2 px-4 py-2 rounded-md text-sm flex-center gap-2'>
            <span className='text-xl'>
              <MdLogin />
            </span>
            <span>Login / Sign up</span>
          </button>

          <button className='text-3xl'>
            <FaCartShopping />
          </button>
        </div>
      </div>
    </header>
  )
}

export default Navbar
