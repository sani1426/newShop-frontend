const backendDomain = "https://new-shop-backend.onrender.com"

const SummaryApi = {
    SignUp : {
        url : `${backendDomain}/api/users/sign-up`,
        method : "post"
    },
    SignIn : {
        url : `${backendDomain}/api/users/sign-in`,
        method : "post"
    },
    UserDetail : {
        url : `${backendDomain}/api/users/user-details`,
        method : "get"
    },
    getMoviesByGenre : {
        url :`${backendDomain}/api/movies/genres`,
        method : 'get'
    },
    getHeroMovies : {
        url :`${backendDomain}/api/movies/hero-movies`,
        method : 'get'
    },
    getMoviesByCategory : {
        url :`${backendDomain}/api/movies/category`,
        method : 'get'
    },
    getMovieDetails : {
        url :`${backendDomain}/api/movies/details`,
        method : 'get'
    },
    getSimilarMovies : {
        url :`${backendDomain}/api/movies/similar-movies`,
        method : 'post',
    },
  
}



export default SummaryApi