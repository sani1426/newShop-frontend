import Image from "next/image"
import './homeCarousel.css'



const AnimatedCart = () => {
  return (
  
    <div className="anime-card w-[190px] h-[254px] transition-all duration-500 rounded-[10px] ">
      <div className="first-content">
       <Image alt="" width={1000} height={1000} className="w-full h-full object-cover" src='/images/movies/Black Panther Wakanda Forever 2022-1.jpg' />
      </div>
      <div className="second-content">
      <Image alt="" width={1000} height={1000} className="w-full h-full object-cover" src='/images/movies/Black Panther Wakanda Forever 2022-1.jpg z-[-1]' />
    <span className="bg-white z-10">saman</span>
      </div>
    
    
    </div>
  )
}

export default AnimatedCart