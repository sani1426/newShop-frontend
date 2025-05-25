import SummaryApi from '@/common'
import Card from '@/components/shared/Card'
import axios from 'axios'
import { FaStar } from 'react-icons/fa'
import { RiPokerHeartsFill } from 'react-icons/ri'
import { FaRegHeart } from 'react-icons/fa'
import { GiShare } from 'react-icons/gi'
import Image from 'next/image'

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
      {details ? (
        <>
          <header dir='ltr' className='h-[100vh] '>
            <div
              className='absolute h-[90%] w-full flex justify-end pb-2 flex-col gap-8 pl-8 pt-24'
              // style={{
              //   background: `linear-gradient(to bottom,rgba(0,0,0,.6) , rgba(0,0,0,.8)) ,url('${details?.backdrop}')`,
              //   backgroundPosition: 'center',
              //   backgroundSize: 'cover',
              //   backgroundRepeat: 'no-repeat',
              // }}
              alt={details?.name}
            >
              <Image src={details?.backdrop} alt='--' width={1000} height={1000} className='w-full h-full object-cover -z-1' priority fill />
              <h1 className='text-white  text-3xl'>{details?.name}</h1>

              <div className='flexCenter mt-4 gap-12 w-[45%] border-t-2 border-b-2 py-2 border-slate-400 border-opacity-50 bg-gradient-to-r from-[rgba(0,0,0,.5)] to-[rgba(0,0,0,.5)] rounded-md '>
                <div className=' flex'>
           <div>
            <button></button>
           </div>
                  <button className='px-6 py-2 text-red-800 rounded-md text-xl flex-center gap-2'>
                    <span className='px-2 py-2 border-2 border-red-800 rounded-full'>
                      <GiShare />
                    </span>
                    اشتراک گذاری
                  </button>
                </div>
              </div>
              <div className='flex items-center gap-8 text-3xl  w-[55%] border-b-2 border-opacity-50  border-slate-400 '>
                <div className='flex-center gap-2 border-slate-400 border-opacity-50  border-r-2 pr-4 pb-2'>
                  <span className='text-yellow-400 text-4xl '>
                    <FaStar />
                  </span>
                  <div className='flex flex-col text-[.9rem] text-center text-slate-100'>
                    <span>
                      {details?.rating}{' '}
                      <span className='text-slate-400'>/ 10</span>
                    </span>
                    {/* <span className="text-slate-500 text-sm"> {movie.vote_count} Reviews</span> */}
                  </div>
                </div>

                {/* <span className="flex  gap-2">
               <span className="text-[1rem] text-slate-400">Rate This Movie :</span>
                <CustomizedRating movieId={movie?.id}  />
                </span> */}
              </div>
              <div className='w-[50%] bg-gradient-to-r from-[rgba(0,0,0,.5)] to-[rgba(0,0,0,.5)] rounded-md py-1'>
                <p className='text-slate-100'>{details?.description}</p>
              </div>
            </div>

            <div className='w-[300px] h-[400px] absolute left-[70%] top-[13rem]'>
              <Card data={details} />
            </div>
          </header>
        </>
      ) : (
        <div className='h-[100vh] w-full'>
          <div className='absolute bg-slate-400 animate-pulse h-[90%] w-full flex justify-end pb-2 flex-col gap-8 pl-8'></div>
          <div className='w-[300px] h-[400px] absolute left-[70%] top-[13rem] bg-slate-500 animate-pulse rounded-lg'></div>
        </div>
      )}
    </>
  )
}

export default page
