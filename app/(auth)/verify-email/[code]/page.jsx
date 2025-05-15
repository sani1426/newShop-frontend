
const page = ({searchParams}) => {
  const {code} = searchParams
  console.log(code , searchParams);
  return (
    <section className='w-full h-screen grid md:grid-cols-2 overflow-hidden'>
    <div className='hidden md:block w-full h-full bg-login'></div>
    <div className='w-full h-full flex items-center justify-center'>
      <div className='bg-slate-100 dark:bg-slate-900 shadow-md w-full h-full py-10 px-10'>
        <div className='w-full text-center border-b-2 pb-8 '>
          <h1 className='text-3xl'>Verify Email</h1>
        </div>
   
      </div>
    </div>
  </section>
  )
}

export default page