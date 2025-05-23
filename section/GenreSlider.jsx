import SummaryApi from '@/common'
import Card from '@/components/shared/Card'
import axios from 'axios'
import { Navigation } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';



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
      <h1 className='text-2xl font-bold lg:text-3xl mb-5'>{header}</h1>
      <Swiper
      modules={[Navigation]}
      spaceBetween={20}
      slidesPerView={5}
      navigation

    >
      {
        Movies.map(item => (
          <SwiperSlide key={item?._id}>
            <Card data={item} />
          </SwiperSlide>
        ))
      }
    </Swiper>
    </div>
  )
}

export default GenresSlider

