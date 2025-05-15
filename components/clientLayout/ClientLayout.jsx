'use client'

import { AppContextProvider } from '@/context/appContext'

const ClientLayout = ({ children }) => {
  return (
    <>
      <AppContextProvider>{children}</AppContextProvider>
    </>
  )
}

export default ClientLayout
