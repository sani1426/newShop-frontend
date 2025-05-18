"use client"

import { useAppContext } from "@/context/appContext"


const themeProvider = ({children}) => {
    const {theme}=useAppContext()
  return (
    <div className={theme}>
            {children}
    </div>
  )
}

export default themeProvider