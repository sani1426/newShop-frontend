import MovieCard from "@/components/shared/MovieCard";



export default function Home() {
  const movie =  {
    name: 'Code 8: Part II 2024',
    genres: ['اکشن' , 'جنایی' , 'علمی تخیلی' , 'هیجان انگیز'],
    year : '2024',
    movieImage: '/images/movies/Code 8.jpg',
    rating: 5.7,
    duration: 100,
    language : 'english',
    ageGroup: 'TV-MA',
    Release : '1402/12/09',
    director: 'Jeff Chan',
    Stars : ['Stephen Amell' , 'Robbie Amell'],
    likes : 23 ,
    disLikes : 13,
    description: 'کد 8 بخش دوم؛ فیلمی علمی تخیلی اکشن در ادامه فیلم کد 8 2019 به کارگردانی چف چان و بازیگری استیون امل و رابی امل است. داستان دختری را دنبال می کند که برای گرفتن انتقام خون برادر کشته شده اش توسط افسران پلیس فاسد تلاش می کند…',
  }

  return (
<>
<MovieCard movie={movie} />
</>
  );
}
