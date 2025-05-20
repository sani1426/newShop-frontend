import MovieCard from "@/components/shared/MovieCard";



export default function Home() {
  const movie =  {
    name: 'Legends of the Condor Heroes: The Gallants 2025',
    genres: ['اکشن' , 'درام' , 'ماجراجویی'],
    year : '2025',
    backdrop: '/images/movies/Legends of the Condor Heroes-backdrop.webp',
    movieImages: ['/images/movies/Legends of the Condor Heroes.webp' , '/images/movies/Legends of the Condor Heroes-1.webp'],
    rating: 6.0,
    duration: 146,
    language : 'Mandarin',
    ageGroup: 'R',
    Release : '1403/11/10',
    director: 'Hark Tsui',
    Stars : ['Zhan Xiao' , 'Tony Ka Fai Leung'],
    likes : 34 ,
    disLikes : 57,
    description: 'افسانه‌ ی قهرمانان کوندور: دلیران، فیلمی اکشن ماجراجویی درام تاریخی عاشقانه جنگی به کارگردانی تسوی هارک (Tsui Hark) است. در قرن دوازدهم، در میانهٔ جنگ‌های خونین میان مغول‌ها به رهبری چنگیز خان و سلسله جین، «گو جینگ» (با بازی شیاو ژان) که در کودکی توسط مغول‌ها بزرگ شده، به دنبال معشوقه‌اش «هوانگ رونگ» (با بازی ژوانگ دافِی) میگردد. تا اینکه او …',
  }

  return (
<>
<MovieCard movie={movie} />
</>
  );
}
