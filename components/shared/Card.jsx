import Link from 'next/link';
import { FaStar } from 'react-icons/fa';



const Card = ({data}) => {
  return (
    <Link href={`/${data?.category}/${data?._id}`} className='aspect-[2/3] bg-gray-300  relative rounded-md overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500'>
    <img src={data?.movieImages[1]} className='object-cover w-full h-full rounded-md' alt='' />
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