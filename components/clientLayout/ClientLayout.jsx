'use client'


import { AppContextProvider, useAppContext } from '@/context/appContext'


const ClientLayout = ({ children }) => {


  return (<>
  <AppContextProvider>
  {children}
  </AppContextProvider>

  </>)
}

export default ClientLayout
