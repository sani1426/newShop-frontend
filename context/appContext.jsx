'use client'

import SummaryApi from '@/common'
import useFetchData from '@/hooks/useFetchData'
import { createContext, useContext, useEffect, useState } from 'react'

const AppContext = createContext()

export const AppContextProvider = ({ children }) => {


  const [user, setUser] = useState()
  const [theme, setTheme] = useState("light")

  const getUserDetails = async () => {
    const { result } = await useFetchData(SummaryApi.UserDetail.url, 'get')

    if (result) {
      setUser(result)
    }
  }



  const toggleTheme = ()=> {
    setTheme(theme ==="light" ? "dark" : "light")

  }

  useEffect(() => {
    getUserDetails()
  }, [])
  useEffect(() => {
   if(theme === "dark"){
    document.documentElement.classList.add("dark")
   }else{
    document.documentElement.classList.remove("dark")
   }
  }, [theme])
  return (
    <AppContext.Provider value={{ user, setUser, theme, toggleTheme }}>
      {children}
    </AppContext.Provider>
  )
}

export const useAppContext = () => useContext(AppContext)
