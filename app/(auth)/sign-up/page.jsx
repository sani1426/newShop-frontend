'use client'

import Link from 'next/link'
import '../auth.css'
import { FaUser } from 'react-icons/fa'
import { RiLockPasswordFill } from 'react-icons/ri'
import { useState } from 'react'
import useFetchData from '@/hooks/useFetchData'
import SummaryApi from '@/common'
import { useRouter } from 'next/navigation'
import { toast } from 'sonner'

const page = () => {
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
      const { responseData } = await useFetchData(
        SummaryApi.SignUp.url,
        SummaryApi.SignUp.method,
        data
      )
      if (responseData.success) {
        toast.success('succesfully registered ✨✨✨', {
          style: {
            background: '#96F207',
            color: 'white',
          },
        })
        setTimeout(() => {
          router.push('/login')
        }, 1000)
      }
      if (responseData.error) {
        toast.error(newdata.message, {
          style: {
            background: 'red',
          },
        })
      }
    } else {
      toast.error('please check password and confirm password', {
        style: {
          background: 'red',
        },
      })
    }
  }

  return (
    <div className='content'>
      <div className='text'>Sign Up</div>
      <form onSubmit={handleSubmit}>
        <div className='field'>
          <input
            required
            type='text'
            name='name'
            value={data.name}
            onChange={handleOnChange}
            className='input'
          />
          <span className='span'>
            <FaUser />
          </span>
          <label className='label'>Name</label>
        </div>
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
        <div className='field'>
          <input
            required
            type='password'
            name='confirmPassword'
            value={data.confirmPassword}
            onChange={handleOnChange}
            className='input'
          />
          <span className='span'>
            <RiLockPasswordFill />
          </span>
          <label className='label'>Confirm Password</label>
        </div>


        <div className='field'>
        <label className='text-lg'>
                gender :
              </label>
              <select
                value={data.gender}
                onChange={handleOnChange}
                className='py-2 px-4'
                name='gender'
              >
                <option value="" >select</option>
                <option value='Men'>men</option>
                <option value='Women'>women</option>
              </select>
        </div>



        <div className='forgot-pass'>
          <Link href='#'>Forgot Password?</Link>
        </div>
        <button className='button'>Sign Up</button>
        <div className='sign-up'>
          Alredy have Account?
          <Link href='/login'>Login now</Link>
        </div>
      </form>
    </div>
  )
}

export default page
