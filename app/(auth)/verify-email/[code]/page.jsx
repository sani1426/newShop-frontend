'use client'

import SummaryApi from '@/common'
import useFetchData from '@/hooks/useFetchData'
import { useRouter } from 'next/navigation'
import { toast } from 'sonner'

const page = ({ params }) => {
  const router = useRouter()
  const { id } = params
  console.log(id, params)

  const handleVerifyEmail = async () => {
    const { responseData } = await useFetchData(
      SummaryApi.verifyEmail.url,
      'post',
      id
    )

    if (responseData.error) {
      toast.error(responseData?.message)
    }
    if (responseData.success) {
      toast.success(responseData?.message)
      router.push('/login')
    }
  }
  return (
    <section className='w-full h-screen grid md:grid-cols-2 overflow-hidden'>
      <div className='hidden md:block w-full h-full bg-login'></div>
      <div className='w-full h-full flex items-center justify-center'>
        <div className='bg-slate-100 dark:bg-slate-900 shadow-md w-full h-full py-10 px-10'>
          <div className='w-full text-center border-b-2 pb-8 '>
            <h1 className='text-3xl'>Verify Email</h1>
          </div>
          <div>
            <button
              className='px-4 py-2 bg-grown-50 rounded-md hover:opacity-80'
              onClick={handleVerifyEmail}
            >
              verify Email
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default page
