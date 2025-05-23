


const Card = ({data}) => {
  return (
    <div className="w-full max-w-[230px] h-80 overflow-hidden rounded-md relative">
        <img className="w-full h-full object-cover rounded-md" src={data?.movieImages[1]} alt={data?.name} />

        <div className="absolute bottom-0 h-14 backdrop-blur-3xl w-full bg-black">
          <h2>{data?.name}</h2>
        </div>
    </div>
  )
}

export default Card