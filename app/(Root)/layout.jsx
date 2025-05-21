import MobileNav from '@/components/shared/MobileNav'
import Topbar from '@/components/shared/Topbar'

export default function Layout({ children }) {
  return (
    <>
      <Topbar />
      <main className='overflow-x-hidden'>{children}</main>
      <MobileNav />
    </>
  )
}
