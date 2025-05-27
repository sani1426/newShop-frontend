import Link from 'next/link';
import { FaStar } from 'react-icons/fa';
import './homeCarousel.css'
import Image from 'next/image';


const Card = ({data}) => {
  return (
    <Link href={`/${data?.category}/${data?._id}`}  class="flip-card">
    <div class="flip-card-inner">
      <div class="flip-card-front">
      <img alt="" className="w-full h-full object-cover" src={data?.movieImages[1]}  />
         <div dir='ltr' className='Card_movie_Info'>
      <h2 className='text-white text-nowrap text-ellipsis line-clamp-1'>{data?.name}</h2>
    <div  className='flex gap-3 mt-2'>
      <span className='text-yellow-400 text-lg'>
        <FaStar />
      </span>
      <span className='text-white'>{`${data?.rating} / 10`}</span>
    </div>
    </div>
      </div>
      <div class="flip-card-back">
        <p class="title">BACK</p>
        <p>Leave Me</p>
      </div>
    </div>
  </Link>
);

}

export default Card






// <Link href={`/${data?.category}/${data?._id}`} className='aspect-[2/3] bg-gray-300  relative rounded-md overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500'>
// <img src={data?.movieImages[1]} className='object-cover w-full h-full rounded-md' alt='' />
// <div dir='ltr' className='Card_movie_Info'>
// <h2 className='text-white text-nowrap text-ellipsis line-clamp-1'>{data?.name}</h2>
// <div  className='flex gap-3 mt-2'>
// <span className='text-yellow-400 text-lg'>
//   <FaStar />
// </span>
// <span className='text-white'>{`${data?.rating} / 10`}</span>
// </div>
// </div>

// </Link>