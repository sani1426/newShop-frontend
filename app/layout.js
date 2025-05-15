import { Poppins, Montserrat_Alternates } from 'next/font/google'
import './globals.css'
import { Toaster } from '@/components/ui/sonner'
import Topbar from '@/components/shared/Topbar'
import Navbar from '@/components/shared/Navbar'
import ClientLayout from '@/components/clientLayout/ClientLayout'

// const poppins = Poppins({

//   subsets: ['latin'],
//   weight: ['400', '500', '600', '700', '900'],
// })

const Montserrat = Montserrat_Alternates({
  subsets: ['latin'],
  weight: ['400', '500', '600', '900'],
})

export const metadata = {
  title: {
    template: `${'newShop'}  | %s`,
    default: `${'newShop'}. ${'homePage'}`,
  },
  description: 'real shop',
}

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={Montserrat.className}>
        <Topbar />
        <Navbar />
        <ClientLayout>
          <main>{children}</main>
        </ClientLayout>
        <Toaster position='top-right' richColors />
      </body>
    </html>
  )
}
