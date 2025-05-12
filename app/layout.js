import { Poppins, Montserrat_Alternates } from 'next/font/google'
import './globals.css'
import { Toaster } from '@/components/ui/sonner'

const poppins = Poppins({
  variable: '--font-poppins-sans',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '900'],
})

// const Montserrat = Montserrat_Alternates({
//   variable: "--font-montserrat-mono",
//   subsets: ["latin"],
//   weight : ['400' , '500' , '600' , '900']
// });

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
      <body className={`${poppins.variable}`}>
        <main>{children}</main>

        <Toaster />
      </body>
    </html>
  )
}
