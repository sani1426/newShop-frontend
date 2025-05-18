import Image from 'next/image'

const ThemeToggle = () => {
  return (
    <div className='w-[40px] h-[20px] relative flex-between rounded-[50px] cursor-pointer bg-black px-1'>
      <Image src='/icons/moon.png' alt='moon' width={14} height={14} />
      <div className='w-[15px] h-[15px] rounded-full absolute left-[1px] bg-white'></div>
      <Image src='/icons/sun.png' alt='moon' width={14} height={14} />
    </div>
  )
}

export default ThemeToggle
