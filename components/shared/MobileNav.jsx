'use client'

import { navItem } from '@/data/constance'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const MobileNav = () => {
  const pathname = usePathname()

  return (
    <>
      <div className='lg:hidden py-3 w-full fixed bg-opacity-75  bottom-0  bg_soft '>
        <div className='flex items-center justify-between md:justify-evenly h-full transition-all duration-500'>
          {navItem.map((item) => (
            <Link
              key={item?.id}
              href={item?.href}
              className={` flex h-full items-center flex-col justify-center hover:text-grown-50 transition-all duration-300 bg_soft p-4 rounded-full ${
                pathname === item?.href && 'text-grown-100  '
              }`}
            >
              <div className='text-2xl'>{item?.icon}</div>
              {/* <p className='text-sm'>{item?.label}</p> */}
            </Link>
          ))}
        </div>
      </div>
    </>
  )
}

export default MobileNav
