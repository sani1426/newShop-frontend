import SummaryApi from '@/common'
import HeroBanner from '@/components/shared/HeroBanner'
import GenresSlider from '@/section/GenreSlider';
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
      <section className='w-full bg_main py-8 px-4'>
      <GenresSlider genre="اکشن"  header="بهترین های اکشن" />
      </section>
     
    </>
  )
}
