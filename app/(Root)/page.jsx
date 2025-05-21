
import HeroBanner from "@/components/shared/HeroBanner";
import Movies from "@/data/movies";



export default function Home() {


  return (
<>
<HeroBanner bannerMovies={Movies} />
</>
  );
}
