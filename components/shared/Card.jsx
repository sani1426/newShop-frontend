


const Card = ({data}) => {
  return (
    <div>
        <img src={data?.movieImages[0]} alt={data?.name} />
    </div>
  )
}

export default Card