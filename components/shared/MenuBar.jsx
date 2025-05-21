"use client"

import { mobileNavItem} from "@/data/constance";
import Link from "next/link";




const MenuBar = () => {
 
  return (
    <>

        <div className="lg:hidden w-full fixed  buttom-0 left-0  transition-all duration-500 bg_soft flex-center  z-50">
  <ul className='flex items-center justify-between'>
            {mobileNavItem.map((item) => (
              <li key={item?.id}>
                <Link
                  className='hover:text-grown-50 transition-all duration-300 text-xl'
                  href={item?.href}
                >
                  {item?.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

    </>
  )
}

export default MenuBar