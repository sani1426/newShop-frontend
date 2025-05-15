'use client'

import SummaryApi from '@/common'
import { useAppContext } from '@/context/appContext'
import useFetchData from '@/hooks/useFetchData'
import { useEffect } from 'react'

const ClientLayout = ({ children }) => {
  const { setUser } = useAppContext()

  const getUserDetails = async () => {
    const { result } = await useFetchData(SummaryApi.UserDetail.url, 'get')
    setUser(result)
  }

  useEffect(() => {
    getUserDetails()
  }, [])

  return <>{children}</>
}

export default ClientLayout
