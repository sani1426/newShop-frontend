import Navbar from "@/components/shared/Navbar";
import Topbar from "@/components/shared/Topbar";



export default function Layout({ children }) {
  return(
    <>
    <Topbar />
    <Navbar />
     <main >{children}</main>
     </>
     )
}
