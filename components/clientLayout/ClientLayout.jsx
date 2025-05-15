'use client'

import { AppContextProvider } from '@/context/appContext'
import Topbar from '../shared/Topbar'
import Navbar from '../shared/Navbar'

const ClientLayout = ({ children }) => {
  return (
    <>
      <AppContextProvider>
      <Topbar />
        <Navbar />
        {children}
        
        </AppContextProvider>
    </>
  )
}

export default ClientLayout
