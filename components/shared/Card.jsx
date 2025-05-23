import Link from 'next/link';
import { FaStar } from 'react-icons/fa';



const Card = ({data}) => {
  return (
    <Link href={`/movie/${data?._id}`} className='aspect-[2/3] bg-gray-300  relative rounded-md overflow-hidden'>
    <img src={data?.movieImages[1]} className='object-cover w-full h-full' alt='' />
    <div dir='ltr' className='Card_movie_Info'>
    <h2 className='text-white text-nowrap text-ellipsis line-clamp-1'>{data?.name}</h2>
  <div  className='flex gap-3 mt-2'>
    <span className='text-yellow-400 text-lg'>
      <FaStar />
    </span>
    <span className='text-white'>{`${data?.rating} / 10`}</span>
  </div>
    </div>

</Link>
);

}

export default Card