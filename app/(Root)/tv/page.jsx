import HomeCarousel from "@/components/shared/HomeCarousel"
import Movies from '@/data/movies'

const page = async () => {




  return (
    <div>
    <HomeCarousel Movies={Movies} />
    </div>
  )
}

export default page