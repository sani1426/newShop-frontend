import MenuBar from '@/components/shared/MenuBar'
import Topbar from '@/components/shared/Topbar'

export default function Layout({ children }) {
  return (
    <>
      <Topbar />
      <MenuBar />
      <main>{children}</main>
    </>
  )
}
