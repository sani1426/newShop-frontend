'use client'

import SummaryApi from '@/common'
import useFetchData from '@/hooks/useFetchData'
import { createContext, useContext, useEffect, useState } from 'react'

const AppContext = createContext()

export const AppContextProvider = ({ children }) => {
  const getFromLocal = () => {
    if (typeof window !== undefined) {
      const value = localStorage.getItem('theme')

      return value || 'light'
    }
  }

  const [user, setUser] = useState()
  const [theme, setTheme] = useState(() => {
    return getFromLocal()
  })

  const getUserDetails = async () => {
    const { result } = await useFetchData(SummaryApi.UserDetail.url, 'get')

    if (result) {
      setUser(result)
    }
  }

  useEffect(() => {
    getUserDetails()
  }, [])

  return (
    <AppContext.Provider value={{ user, setUser, theme }}>
      {children}
    </AppContext.Provider>
  )
}

export const useAppContext = () => useContext(AppContext)
