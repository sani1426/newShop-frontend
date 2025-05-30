import Link from "next/link"
import Carousel from "./carousel"






const SimilarCarousel = ({movies , head}) => {
  return (
 
        <div className='w-full  mx-auto'>
          <div className='w-full flex-between'>
            <h1 className='text-2xl font-bold lg:text-3xl '>{head}</h1>
            <Link
              href={`/`}
              className=' primary  text-white dark:text-black px-4 py-3 rounded-sm '
            >
              مشاهده بیشتر
            </Link>
          </div>

          <section className='mt-8 w-full mx-auto'>
            <Carousel data={movies} />
          </section>
        </div>
  )
}

export default SimilarCarousel