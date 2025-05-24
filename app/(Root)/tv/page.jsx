import HomeCarousel from "@/components/shared/HomeCarousel"

export const Movies = [
  {
    name: 'Code 8: Part II 2024',
    genres: ['اکشن' , 'جنایی' , 'علمی تخیلی' , 'هیجان انگیز'],
    year : '2024',
    backdrop : '/images/movies/code8-backdrop.webp',
    movieImages: [ '/images/movies/code8-1.jpg' , '/images/movies/code8-2.webp'],
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
  },
  {
    name: 'Lucy 2014',
    genres: ['اکشن' , 'علمی تخیلی' , 'هیجان انگیز'],
    year : '2014',
    backdrop : '/images/movies/lucy-backdrop.webp',
    movieImages: ['/images/movies/lucy-1.jpg'  , '/images/movies/lucy-2.webp'],
    rating: 6.4,
    duration: 89,
    language : 'English',
    ageGroup: 'R',
    Release : '1393/05/03',
    director: 'Luc Besson',
    Stars : ['Scarlett Johansson' , 'Morgan Freeman'],
    likes : 151 ,
    disLikes : 4,
    description: 'کد 8 بخش دوم؛ فیلمی علمی تخیلی اکشن در ادامه فیلم کد لوسی، یک فیلم علمی تخیلی و اکشن به نویسندگی و کارگردانی لوک بسون است. اسکارلت جوهانسون به عنوان شخصیت اصلی فیلم و مورگان فریمن نقش پروفسور نورمن را ایفا میکند. شخصی به نام لوسی بر اثر مصرف ماده‌ای که به دست عموم نرسیده ویژگی‌های خاصی پیدا می‌کند که در هیچ انسانی وجود ندارد اما…',
  },
  {
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
  },
  {
    name: 'Superman 2025',
    genres: ['اکشن' , 'فانتزی' , 'ماجراجویی'],
    year : '2025',
    backdrop : '/images/movies/superman2025-backdrop.webp',
    movieImage: ['/images/movies/superman.webp' , '/images/movies/superman2025-1.webp'],
    rating: 0.0,
    duration: 0,
    language : 'English',
    ageGroup: 'R',
    Release : '1404/04/18',
    director: 'James Gunn',
    Stars : ['Nathan Fillion' , 'Isabela Merced'],
    likes : 54 ,
    disLikes : 47,
    description: 'سوپرمن؛ فیلمی ابرقهرمانی به نویسندگی و کارگردانی جیمز گان است. داستان به بررسی سفر کلارک کنت / سوپرمن برای آشتی دادن میراث کریپتونی خود با خانواده انسانی‌اش در اسمالویل، کانزاس می‌پردازد…',
  }]

const page = async () => {




  return (
    <div>
    <HomeCarousel Movies={Movies} />
    </div>
  )
}

export default page