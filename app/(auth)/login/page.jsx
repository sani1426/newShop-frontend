'use client'

import SummaryApi from '@/common'
import { toast } from 'sonner'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import useFetchData from '@/hooks/useFetchData'
import Link from 'next/link'

const page = () => {
  const [send, setSend] = useState(false)
  const router = useRouter()
  const [data, setData] = useState({
    email: '',
    password: '',
  })

  const handleOnChange = (e) => {
    const { name, value } = e.target
    setData((prev) => {
      return {
        ...prev,
        [name]: value,
      }
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setSend(true)
    const { responseData } = await useFetchData(
      SummaryApi.SignIn.url,
      SummaryApi.SignIn.method,
      data
    )
    setSend(false)
    if (responseData.success) {
      toast.success('login successfully ✨✨✨')
      setTimeout(() => {
        router.push('/')
      }, 1000)
    }

    if (responseData.error) {
      toast.error(responseData.message)
    }
  }
  return (
    <section className='w-full h-screen grid md:grid-cols-2 overflow-hidden'>
      <div className='hidden md:block w-full h-full bg-login'></div>
      <div className='w-full h-full flex items-center justify-center'>
        <div className='bg_soft shadow-md w-full h-full py-10 px-10'>
          <div className='w-full text-center border-b-2 pb-8 '>
            <h1 className='text-3xl'>ورود</h1>
          </div>
          <form
            onSubmit={handleSubmit}
            className='w-full h-full py-12 flex flex-col gap-8'
          >
            <div className='grid gap-1'>
              <label className='text-lg '>ایمیل :</label>
              <input
                required
                type='email'
                name='email'
                value={data.email}
                onChange={handleOnChange}
                className='w-full bg-gray-200 py-2 rounded-lg outline-none px-5'
              />
            </div>
            <div className='grid'>
              <label className='label'>رمز عبور :</label>
              <input
                required
                type='password'
                name='password'
                value={data.password}
                onChange={handleOnChange}
                className='w-full bg-gray-200 py-2 rounded-lg outline-none px-5'
              />

              <div className='mt-1 text-red-500 hover:text-red-700'>
                <Link href='#'>رمز عبور  را فراموش کردید؟</Link>
              </div>
            </div>

            <button
              className={`${
                send ? 'opacity-75 cursor-not-allowed' : ''
              } px-4 py-2 bg-blue-400 rounded-lg hover:bg-blue-600`}
            >
              {send ? ' در حال ورود ...' : 'ورود'}
            </button>
            <div className='flex-center mt-5 gap-3'>
              <p className='text-sm'>ثبت نام نکرده اید؟?</p>

              <Link className='text-blue-400' href='/sign-up'>
                ثبت نام کنید
              </Link>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

export default page
