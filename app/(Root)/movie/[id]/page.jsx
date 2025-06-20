import SummaryApi from '@/common'
import Card from '@/components/shared/Card'
import axios from 'axios'
import { FaStar } from 'react-icons/fa'
import { RiPokerHeartsFill } from 'react-icons/ri'
import { FaRegHeart } from 'react-icons/fa'
import { GiShare } from 'react-icons/gi'
import Image from 'next/image'
import SimilarCarousel from '@/components/shared/SimilarCarousel'
import Link from 'next/link'
import AnimationCard from '@/components/shared/AnimationCard'

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
          <div className='w-full h-full absolute inset-0 bg-gradient-to-t from-black/55 to-black/50 z-10'></div>

          <div className='z-20 absolute bottom-0 lg:right-4 lg:top-[6rem] lg:w-[50%] px-4'>
            <h1 className='text-3xl font-bold text-white'>{details?.name}</h1>

            <div className='flex items-center w-full justify-end  gap-2 border-slate-400 border-opacity-50  border-r-2 pr-4 pb-2'>
              <div className='flex flex-col text-xl  text-white'>
                <span>
                  {details?.rating} <span className=''>/ 10</span>
                </span>
              </div>
              <span className='text-yellow-400 text-4xl '>
                <FaStar />
              </span>
            </div>

            <p dir='rtl' className='text-slate-100 my-2'>
              {details?.description}
            </p>
            <div
              dir='rtl'
              className='flex items-center mt-4  gap-2 w-full justify-start'
            >
              <h2 className='text-white'>ژانرها :</h2>
              <div className='flex-center gap-4'>
                {details?.genres.map((genre, index) => (
                  <Link
                    className='px-3 py-1 border-[1px] rounded-md border-white text-white text-sm'
                    key={index}
                    href={`/search/${genre}`}
                  >
                    {genre}
                  </Link>
                ))}
              </div>
            </div>

            <div
              dir='rtl'
              className='flex items-center justify-start gap-5 text-white mt-4'
            >
              <h2>
                زمان : <span> {details?.duration} دقیقه</span>
              </h2>
              <h2>اکران : {details?.Release}</h2>
              <h2>زبان : {details?.language}</h2>
            </div>
            <div
              dir='rtl'
              className='flex items-center justify-start gap-5 text-white mt-4'
            >
              <h2>کارگردان : {details?.director}</h2>
              <div className='flex items-center gap-2'>
                <h1>بازیگران :</h1>
                {details.Stars.map((star, index) => (
                  <h2 key={index}>{star}</h2>
                ))}
              </div>
            </div>
          </div>
          <div className='hidden lg:block w-[400px] h-[500px] absolute left-[3%] top-[4rem] z-20'>
            <AnimationCard data={details} />
          </div>
        </div>
      </header>

      <div className='w-full bg_soft py-12 px-2'>
        <SimilarCarousel movies={similarMovies} head='فیلم های مشابه' />
      </div>
    </>
  )
}

export default page
