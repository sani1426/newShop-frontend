'use client'

import { navItem } from '@/data/constance'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const MobileNav = () => {
  const pathname = usePathname()

  return (
    <>
      <div className='lg:hidden w-full fixed bg-opacity-75  bottom-0  bg_soft '>
        <div className='flex items-center justify-between h-full transition-all duration-500'>
          {navItem.map((item) => (
            <Link
              key={item?.id}
              href={item?.href}
              className={`px-3 flex h-full items-center flex-col justify-center hover:text-grown-50 transition-all duration-300 ${
                pathname === item?.href && 'text-grown-100 transform translate-y-3'
              }`}
            >
              <div className='text-2xl'>{item?.icon}</div>
              <p className='text-sm'>{item?.label}</p>
            </Link>
          ))}
        </div>
      </div>
    </>
  )
}

export default MobileNav
