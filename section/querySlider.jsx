import SummaryApi from '@/common'
import Carousel from '@/components/shared/carousel'

import axios from 'axios'
import Link from 'next/link'





const QuerySlider = async ({ value, header,query }) => {
  let Movies = []

  const { data } = await axios.get(
    `${SummaryApi.getMoviesByFillter.url}?${query}=${value}`
  )

  if (data.success) {
    Movies = await data?.data
  }

  return (
    <div className='container  mx-auto'>
      <div className='w-full flex-between'>
      <h1 className='text-2xl font-bold lg:text-3xl '>{header}</h1>
      <Link href={`/`} className=' primary  text-white dark:text-black px-4 py-3 rounded-sm '>
      مشاهده بیشتر
      </Link>
      </div>
      
      <section className='mt-8'>
    <Carousel data={Movies}  />
    </section>
    </div>
  )
}

export default QuerySlider

