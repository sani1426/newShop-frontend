import Link from 'next/link'
import './homeCarousel.css'

const AnimationCard = ({data}) => {
  return (
    <Link href={`/${data?.category}/${data?._id}`}  className="flip-card">
    <div className="flip-card-inner">
      <div className="flip-card-front">
      <img alt="" className="w-full h-full object-cover" src={data?.movieImages[1]}  />
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
      </div>
    </div>
  </Link>
  )
}

export default AnimationCard