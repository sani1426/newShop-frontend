import SummaryApi from '@/common'
import Carousel from '@/components/shared/carousel'

import axios from 'axios'





const GenresSlider = async ({ genre, header }) => {
  let Movies = []

  const { data } = await axios.get(
    `${SummaryApi.getMoviesByGenre.url}?genre=${genre}`
  )

  if (data.success) {
    Movies = await data?.data
  }

  return (
    <div className='container  mx-auto'>
      <h1 className='text-2xl font-bold lg:text-3xl '>{header}</h1>
      <section className='mt-8'>
    <Carousel data={Movies} />
    </section>
    </div>
  )
}

export default GenresSlider

