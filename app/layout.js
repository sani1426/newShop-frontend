import { Vazirmatn, Montserrat_Alternates } from 'next/font/google'
import './globals.css'
import { Toaster } from '@/components/ui/sonner'
import { AppContextProvider } from '@/context/appContext'



const vazir = Vazirmatn({

  subsets: ['arabic'],
  weight: ['400', '500', '600', '700', '900'],
})

// const Montserrat = Montserrat_Alternates({
//   subsets: ['latin'],
//   weight: ['400', '500', '600', '900'],
// })

export const metadata = {
  title: {
    template: `${'سامی فیلم'}  | %s`,
    default: `${'سامی فیلم'}. ${'homePage'}`,
  },
  description: 'بهترین و جدیدترین فیلم های دنیا',
}

export default function RootLayout({ children }) {
  return (
    <html lang='fa' dir='rtl'>
      <body className={vazir.className}>
        <AppContextProvider>

          <main className=''>{children}</main>

        </AppContextProvider>

        <Toaster position='top-right' richColors />
      </body>
    </html>
  )
}
