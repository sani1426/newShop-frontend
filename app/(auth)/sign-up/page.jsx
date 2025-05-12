'use client'

import Link from 'next/link'
import '../auth.css'
import { useState } from 'react'
import useFetchData from '@/hooks/useFetchData'
import SummaryApi from '@/common'
import { useRouter } from 'next/navigation'
import { toast } from 'sonner'

const page = () => {
  const [send, setSend] = useState(false)
  const router = useRouter()
  const [data, setData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    gender: '',
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

    if (data.password === data.confirmPassword) {
      setSend(true)
      const { responseData } = await useFetchData(
        SummaryApi.SignUp.url,
        SummaryApi.SignUp.method,
        data
      )
      setSend(false)
      if (responseData.success) {
        toast.success('succesfully registered ✨✨✨')
        setTimeout(() => {
          router.push('/login')
        }, 1000)
      }
      if (responseData.error) {
        toast.error(newdata.message)
      }
    } else {
      toast.error('please check password and confirm password')
    }
  }

  return (
    <section className='w-full h-screen grid md:grid-cols-2 overflow-hidden'>
      <div className='w-full h-full flex items-center justify-center'>
        <div className='bg-slate-100 dark:bg-slate-900 shadow-md w-full h-full py-10 px-10'>
          <div className='w-full text-center border-b-2 pb-8 '>
            <h1 className='text-3xl'>Sign Up</h1>
          </div>
          <form
            onSubmit={handleSubmit}
            className='w-full h-full py-6 flex flex-col gap-4'
          >
            <div className='grid gap-1'>
              <label className='text-lg'>Name</label>
              <input
                required
                type='text'
                name='name'
                value={data.name}
                onChange={handleOnChange}
                className='w-full bg-gray-200 py-2 rounded-lg outline-none px-5'
                placeholder='enter your name ...'
              />
            </div>
            <div className='grid gap-1'>
              <label className='label'>Email</label>
              <input
                required
                type='email'
                name='email'
                value={data.email}
                onChange={handleOnChange}
                className='w-full bg-gray-200 py-2 rounded-lg outline-none px-5'
                placeholder='enter your email ...'
              />
            </div>
            <div className='flex-between'>
              <div className='grid gap-1'>
                <label className='label'>Password</label>
                <input
                  required
                  type='password'
                  name='password'
                  value={data.password}
                  onChange={handleOnChange}
                  className='w-full bg-gray-200 py-2 rounded-lg outline-none px-5'
                  placeholder='enter your password ...'
                />
              </div>

              <div className='grid gap-1'>
                <label className='label'>Confirm Password</label>
                <input
                  required
                  type='password'
                  name='confirmPassword'
                  value={data.confirmPassword}
                  onChange={handleOnChange}
                  className='w-full bg-gray-200 py-2 rounded-lg outline-none px-5'
                  placeholder='enter your confirm password ...'
                />
              </div>
            </div>

            <div className='grid gap-1'>
              <label className='text-lg'>gender :</label>
              <select
                value={data.gender}
                onChange={handleOnChange}
                className='py-2 px-4 bg-gray-200 rounded-md'
                name='gender'
              >
                <option value=''>select...</option>
                <option value='Men'>men</option>
                <option value='Women'>women</option>
              </select>
            </div>
            <button
              className={`${
                send ? 'opacity-75 cursor-not-allowed' : ''
              } px-4 py-2 bg-blue-400 rounded-lg hover:bg-blue-600`}
            >
              {send ? 'Registering ...' : 'Sign Up'}
            </button>
            <div className='flex-center mt-5 gap-3'>
              <p className='text-sm'>Alredy have Account?</p>

              <Link className='text-blue-400' href='/login'>
                Login now
              </Link>
            </div>
          </form>
        </div>
      </div>
      <div className='hidden md:block w-full h-full bg-signup'></div>
    </section>
  )
}

export default page
