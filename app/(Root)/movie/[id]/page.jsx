import SummaryApi from '@/common'
import Card from '@/components/shared/Card'
import axios from 'axios'
import { FaStar } from 'react-icons/fa'
import { RiPokerHeartsFill } from 'react-icons/ri'
import { FaRegHeart } from 'react-icons/fa'
import { GiShare } from 'react-icons/gi'
import Image from 'next/image'
import SimilarCarousel from '@/components/shared/SimilarCarousel'

const page = async ({ params }) => {
  let details
  let similarMovies
  const { id } = await params

  const { data } = await axios.get(`${SummaryApi.getMovieDetails.url}/${id}`)
  if (data.success) {
    details = data?.data
  }

  const response = await axios.post(`${SummaryApi.getSimilarMovies.url}`, {
    movieId: id,
  })
  const result = await response?.data
  if (result.success) {
    similarMovies = result?.data
  }

  return (
    <>
      <header dir='ltr' className='h-[100vh] '>
        <div className='relative h-[100%] w-full flex justify-end pb-2 flex-col gap-8 pl-8 pt-24'>
          <Image
            src={details?.backdrop}
            alt='--'
            width={1000}
            height={1000}
            className='w-full h-full object-cover -z-1'
            priority={true}
            fill
            loading='eager'
          />
          <div className='w-full h-full absolute inset-0 bg-gradient-to-t from-black/75 to-transparent z-10'></div>

<div className='z-20 absolute right-4 top-20'>
  <h1 className='text-3xl font-bold text-white'>{details?.name}</h1>
</div>
          <div className='hidden lg:block w-[400px] h-[500px] absolute left-[3%] top-[3rem] z-20'>
            <Card data={details} />
          </div>
        </div>
      </header>

      <div className='w-full bg_soft py-12 px-2'>
        <SimilarCarousel  movies={similarMovies} head='فیلم های مشابه'/>
      </div>


    </>
  )
}

export default page

