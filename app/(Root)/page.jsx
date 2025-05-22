import SummaryApi from '@/common'
import HeroBanner from '@/components/shared/HeroBanner'
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
    </>
  )
}
