import { FaHome } from "react-icons/fa";
import { BiSolidMoviePlay } from "react-icons/bi";
import { HiMiniTv } from "react-icons/hi2";
import { FaBullhorn } from "react-icons/fa6";

export const navItem = [
    {
      id: 1,
      label: 'صفحه اصلی',
      icon : <FaHome /> ,
      href: '/',
    },
    {
      id: 2,
      label: 'فیلم',
      icon : <BiSolidMoviePlay /> ,
      href: '/movie?pageNumber=1',
    },
    {
      id: 3,
      label: 'سریال',
      icon : < HiMiniTv /> ,
      href: '/tv',
    },
    {
      id: 4,
      label: 'خرید اشتراک',
      icon : <FaBullhorn />,
      href: 'product',
    },

  ]

  export const mobileNavItem = [
    {
      id: 1,
      label:<FaHome /> ,
      href: '/',
    },
    {
      id: 2,
      label: <BiSolidMoviePlay /> ,
      href: '/movie',
    },
    {
      id: 3,
      label: < HiMiniTv /> ,
      href: '/tv',
    },
    {
      id: 4,
      label:  <FaBullhorn />,
      href: 'product',
    },
  ]