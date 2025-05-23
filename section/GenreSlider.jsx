import SummaryApi from '@/common'
import Card from '@/components/shared/Card'
import axios from 'axios'

const GenresSlider = async ({ genre, header }) => {
  let Movies = []

  const { data } = await axios.get(
    `${SummaryApi.getMoviesByGenre.url}?genre=${genre}`
  )

  if (data.success) {
    Movies = await data?.data
  }

  return (
    <div className='container  mx-auto'>
      <h1 className='text-xl font-bold lg:text-2xl mb-3'>{header}</h1>
      <div className='w-full grid  grid-cols-3 lg:grid-cols-5 gap-6'>
        {Movies.map((item, index) => {
          return <Card key={index} data={item} />
        })}
      </div>
    </div>
  )
}

export default GenresSlider
