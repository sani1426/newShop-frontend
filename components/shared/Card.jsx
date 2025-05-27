import Link from 'next/link';
import { FaStar } from 'react-icons/fa';
import './homeCarousel.css'
import Image from 'next/image';


const Card = ({data}) => {
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
);

}

export default Card



{/* <div class="card">
<img alt="" className="w-full h-full object-cover" src={data?.movieImages[1]}  />
  <div class="card__content">
    <p class="card__title">Card Title</p>
    <p class="card__description">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco.
    </p>
  </div>
</div> */}




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