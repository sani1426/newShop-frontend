import Image from "next/image"



const Card = ({data}) => {
  return (
    <div className="w-full max-w-[230px] h-80 shadow-lg rounded-md relative">
        <Image width={230} height={300} className="object-cover rounded-md" src={data?.movieImages[1]} alt={data?.name} />
<div className="absolute bg-black/10 px-3 py-2 bottom-6 backdrop-blur-sm w-full flex-between">
  <p className="tex-sm text-white">{data?.rating}+</p>
  <p className="text-sm text-white">{data?.duration}min</p>
</div>
        <div className="w-full px-2 py-3 text-ellipsis line-clamp-1 text-center ">
          <h2 className="text-xl font-bold">{data?.name}</h2>
        </div>
    </div>
  )
}

export default Card