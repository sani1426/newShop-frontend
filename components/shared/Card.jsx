


const Card = ({data}) => {
  return (
    <div className="w-full max-w-[230px] h-80 overflow-hidden rounded ">
        <img className="w-full h-full object-cover" src={data?.movieImages[1]} alt={data?.name} />
    </div>
  )
}

export default Card