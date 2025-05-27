import Link from 'next/link'
import './homeCarousel.css'
import { FaStar } from 'react-icons/fa'
import Image from 'next/image'

const AnimationCard = ({data}) => {
  return (
    <Link href={`/${data?.category}/${data?._id}`}  className="flip-card rounded-lg aspect-[2/3]">
    <div className="flip-card-inner rounded-lg">
      <div className="flip-card-front rounded-lg">
      <Image alt="" className="w-full h-full object-cover" src={data?.movieImages[1]} fill  />
         <div dir='ltr' className='Card_movie_Info z-10'>
      <h2 className='text-white text-nowrap text-ellipsis line-clamp-1'>{data?.name}</h2>
    <div  className='flex gap-3 mt-2'>
      <span className='text-yellow-400 text-lg'>
        <FaStar />
      </span>
      <span className='text-white'>{`${data?.rating} / 10`}</span>
    </div>
    </div>
      </div>
      <div className="flip-card-back">
      <img alt="" className="w-full h-full object-cover" src={data?.movieImages[0]}  />
      <div dir='ltr' className='Card_movie_Info z-10'>
      <div
              dir='rtl'
              className='flex items-center mt-4  gap-2 w-full justify-start'
            >
              <h2 className='text-white'>ژانرها :</h2>
              <div className='flex-center gap-4'>
                {data?.genres.map((genre, index) => (
                  <Link
                    className='px-3 py-1 border-[1px] rounded-md border-white text-white text-sm'
                    key={index}
                    href='/'
                  >
                    {genre}
                  </Link>
                ))}
              </div>
            </div>
    </div>
      </div>
    </div>
  </Link>
  )
}

export default AnimationCard