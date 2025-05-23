


const Card = ({data}) => {
  return (
    <div className="w-full max-w-[230px] h-80 overflow-hidden shadow-lg rounded-md relative">
        <img className="w-full h-full object-cover rounded-md" src={data?.movieImages[1]} alt={data?.name} />
<div className="absolute bottom-5 w-full flex-between">
  <p>{data?.reating}+</p>
  <p>{data?.duration}min</p>
</div>
        <div className="w-full px-2 py-3 text-ellipsis line-clamp-1 text-center ">
          <h2>{data?.name}</h2>
        </div>
    </div>
  )
}

export default Card