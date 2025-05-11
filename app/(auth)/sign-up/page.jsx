import Link from 'next/link'
import '../auth.css'
import { FaUser } from 'react-icons/fa'
import { RiLockPasswordFill } from 'react-icons/ri'

const page = () => {
  return (
    <div className='content'>
      <div className='text'>Sign Up</div>
      <form >
        <div className='field'>
          <input required type='text' name='userName' className='input' />
          <span className='span'>
            <FaUser />
          </span>
          <label className='label'>UserName</label>
        </div>
        <div className='field'>
          <input required type='text' name='email' className='input' />
          <span className='span'>
            <FaUser />
          </span>
          <label className='label'>Email</label>
        </div>
        <div className='field'>
          <input required type='password' name='password' className='input' />
          <span className='span'>
            <RiLockPasswordFill />
          </span>
          <label className='label'>Password</label>
        </div>
        <div className='field'>
          <input required type='password' name='confirmPassword' className='input' />
          <span className='span'>
            <RiLockPasswordFill />
          </span>
          <label className='label'>Confirm  Password</label>
        </div>
        <div className='forgot-pass'>
          <Link href='#'>Forgot Password?</Link>
        </div>
        <button className='button'>Sign in</button>
        <div className='sign-up'>
          Alredy have Account?
          <Link href='/login'>Login now</Link>
        </div>
      </form>
    </div>
  )
}

export default page
