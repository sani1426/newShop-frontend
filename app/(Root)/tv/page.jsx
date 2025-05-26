import SummaryApi from "@/common";
import HomeCarousel from "@/components/shared/HomeCarousel"
import axios from "axios";



const page = async () => {

  let Movies ;
const {data} = await axios.get(SummaryApi.getHeroMovies.url)

if(data.success){
  Movies = data?.data
}


  return (
    <div dir="ltr">
    <HomeCarousel Movies={Movies} />
    </div>
  )
}

export default page