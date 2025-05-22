import SummaryApi from "@/common"
import axios from "axios"



const page = async ({params}) => {
  let details ;
  let similarMovies  ;
    const {id} = await params

    const {data} = await axios.get(`${SummaryApi.getMovieDetails.url}/${id}`)
    if(data.success){
      details = data?.data
    }

    const response = await axios.post(`${SummaryApi.getSimilarMovies.url}` , {
      movieId : id
    })
    const result = await response?.data
    if(result.success){
      similarMovies = result?.data
    }

  return (
    <div className="pt-20 px-5">
        <h1 className="text-3xl text-red-600 mb-5 ">{details?.name}</h1>
        <p>{details?.description}</p>

        <div>
          <ul>
            {
              similarMovies.map(item => (
                <li key={item?._id}>{item?.name}</li>
              ))
            }
          </ul>
        </div>
    </div>
  )
}

export default page