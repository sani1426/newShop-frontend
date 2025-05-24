import SummaryApi from '@/common'
import HeroBanner from '@/components/shared/HeroBanner'
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
      <HeroBanner bannerMovies={Movies} />
      <FillterBar />
      <section className='w-full bg_main py-8 px-4'>
      <QuerySlider  query="year" value="2025"  header="جدیدترین های 2025" />
      </section>
      <section className='w-full bg_soft py-8 px-4'>
      <QuerySlider value="اکشن" query="genres"  header="بهترین های اکشن" />
      </section>
      <section className='w-full bg_main py-8 px-4'>
      <QuerySlider queyr="sortBy" value="محبوب ترین"  header="محبوب ترین ها" />
      </section>
      <section className='w-full bg_soft py-8 px-4'>
      <QuerySlider  queyr="sortBy" value="بالاترین امتیاز"  header="بالا ترین امتیاز" />
      </section>
     
    </>
  )
}
