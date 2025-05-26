import SummaryApi from '@/common'

import HomeCarousel from '@/components/shared/HomeCarousel';
import FillterBar from '@/components/shared/fillterBar';
import QuerySlider from '@/section/querySlider';
import axios from 'axios';



export default async function Home() {
  let Movies;

  const {data} = await axios.get(SummaryApi.getHeroMovies.url)


  
  if (data.success) {
    Movies = await data?.data
  }

  return (
    <>
       <HomeCarousel Movies={Movies} />
      <FillterBar />
      <section className='w-full bg_main py-8 px-4'>
      <QuerySlider category='movie' query="year" value="2025"  header="فیلم های 2025" />
      </section>
      <section className='w-full bg_soft py-8 px-4'>
      <QuerySlider category="tv" value="newest" query="sortBy"  header="سریالهای به روز شده" />
      </section>
      <section className='w-full bg_main py-8 px-4'>
      <QuerySlider category=""  query="sortBy" value="popular"  header="محبوب ترین ها" />
      </section>
      <section className='w-full bg_soft py-8 px-4'>
      <QuerySlider category="" query="sortBy" value="topRated"  header="بالا ترین امتیاز" />
      </section>
     
    </>
  )
}
