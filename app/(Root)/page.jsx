import SummaryApi from '@/common'
import HeroBanner from '@/components/shared/HeroBanner'
import axios from 'axios';



export default async function Home() {
  let Movies;

  const response = await axios.get(SummaryApi.getHeroMovies.url)

  const result = await response.json()
  
  if (result.success) {
    Movies = await result?.data
  }

  return (
    <>
      <HeroBanner bannerMovies={Movies} />
    </>
  )
}
