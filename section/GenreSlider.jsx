import SummaryApi from '@/common'
import Card from '@/components/shared/Card'
import axios from 'axios'
import { Swiper, SwiperSlide } from 'swiper/react';


import 'swiper/css';


import { Autoplay } from 'swiper/modules';




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
      {/* <Swiper

        breakpoints={{
          640: {
            slidesPerView: 3,
            spaceBetween: 5,
          },

          1024: {
            slidesPerView: 5,
            spaceBetween: 20,
          },
        }}
        modules={[Autoplay]}

  
        centeredSlides={true}
        autoplay={{ delay: 3000 }}
        loop
      >
        {Movies.map((movie) => (
          <SwiperSlide key={movie._id}>
            <div>
              <Card data={movie} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper> */}
    </section>
    </div>
  )
}

export default GenresSlider

