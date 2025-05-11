import '../auth.css'
import { FaUser } from 'react-icons/fa'
import { RiLockPasswordFill } from 'react-icons/ri'

const page = () => {
  return (
    <div className='content'>
      <div className='text'>Login</div>
      <form action='#'>
        <div className='field'>
          <input required type='text' name='email' className='input' />
          <span className='span'>
            <FaUser />
          </span>
          <label className='label'>Email</label>
        </div>
        <div className='field'>
          <input required type='password'  name='password' className='input' />
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
