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
    }
  
}



export default SummaryApi