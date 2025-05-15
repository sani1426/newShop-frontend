import Link from 'next/link'
import { AiOutlineMenu } from 'react-icons/ai'

const navItem = [
  {
    id: 1,
    label: 'home',
    href: '/',
  },
  {
    id: 2,
    label: 'about us',
    href: '/about',
  },
  {
    id: 3,
    label: 'call us',
    href: '/',
  },
  {
    id: 4,
    label: 'product',
    href: 'product',
  },
  {
    id: 5,
    label: 'blog',
    href: 'blog',
  },
]

const Navbar = () => {
  return (
    <section className='border-b px-5'>
      <div className='flex items-center gap-8 py-2'>
        <button className='flex-center gap-1  '>
          <span className='text-xl'>
            <AiOutlineMenu />
          </span>

          <span>All</span>
        </button>

        <ul className='flex-center gap-7'>
          {navItem.map((item) => (
            <li key={item?.id}>
              <Link href={item?.href}>{item?.label}</Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default Navbar
