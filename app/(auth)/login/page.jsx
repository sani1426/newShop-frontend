'use client'

import SummaryApi from '@/common'
// import '../auth.css'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import useFetchData from '@/hooks/useFetchData'

const page = () => {
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

    const { responseData } = await useFetchData(
      SummaryApi.SignIn.url,
      SummaryApi.SignIn.method,
      data
    )
    if (responseData.success) {
      toast.success('login successfully ✨✨✨', {
        style: {
          background: '#96F207',
          color: 'white',
        },
      })
      setTimeout(() => {
        router.push('/')
      }, 1000)
    }

    if (responseData.error) {
      toast.error(responseData.message, {
        style: {
          background: 'red',
        },
      })
    } else {
      toast.error('please check password and confirm password', {
        style: {
          background: 'red',
        },
      })
    }
  }
  return (
    <div className='bg-slate-100 dark:bg-slate-900 shadow-md'>
      <div className='text'>Login</div>
      <form onSubmit={handleSubmit}>
        <div className='field'>
          <input
            required
            type='email'
            name='email'
            value={data.email}
            onChange={handleOnChange}
            className='input'
          />
          <span className='span'>
            <FaUser />
          </span>
          <label className='label'>Email</label>
        </div>
        <div className='field'>
          <input
            required
            type='password'
            name='password'
            value={data.password}
            onChange={handleOnChange}
            className='input'
          />
          <span className='span'>
            <RiLockPasswordFill />
          </span>
          <label className='label'>Password</label>
        </div>
        <div className='forgot-pass'>
          <a href='#'>Forgot Password?</a>
        </div>
        <button className='button'>Sign in</button>
        <div className='sign-up'>
          Not a member?
          <a href='/sign-up'>signup now</a>
        </div>
      </form>
    </div>
  )
}

export default page
