


const Card = ({data}) => {
  return (
    <div className="w-full max-w-[230px] h-80 overflow-hidden rounded ">
        <img src={data?.movieImages[0]} alt={data?.name} />
    </div>
  )
}

export default Card