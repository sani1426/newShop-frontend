"use client"

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay } from 'swiper/modules';
import Card from '@/components/shared/Card'
import AnimationCard from './AnimationCard';

const Carousel = ({data}) => {
  return (
  <Swiper

        breakpoints={{
          240: {
            slidesPerView: 3,
            spaceBetween: 5,
          },

          1024: {
            slidesPerView: 6,
            spaceBetween: 20,
          },
        }}
        modules={[Autoplay]}

  
        centeredSlides={true}
        autoplay={{ delay: 4000 }}
        loop
      >
        {data.map((movie) => (
          <SwiperSlide key={movie._id}>
            <div>
              <AnimationCard data={movie} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper> 
  )
}

export default Carousel