import Link from "next/link"
import './homeCarousel.css'


const NewCard = ({data}) => {
  return (


    <Link href={`/${data?.category}/${data?._id}`} className="new-card-container  aspect-[2/3]">
      <div className="new-card">
      <div className="img-content">
       <img src={data?.movieImages[1]} className='object-cover w-full h-full rounded-md' alt='' />
      </div>
      <div className="content">
        <p className="heading text-nowrap text-ellipsis line-clamp-1">{data?.name}</p>
        <p className="text-ellipsis line-clamp-6">
         {data?.description}
        </p>
      </div>
    </div>
    </Link>

  )
}

export default NewCard