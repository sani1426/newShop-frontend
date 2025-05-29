"use client"

import AwesomeSlider from 'react-awesome-slider';
import AwesomeSliderStyles from 'react-awesome-slider/src/styled/cube-animation.scss';


const CubeCarousel = () => {
    return(



        
        
        

   
        
     
          <AwesomeSlider cssModule={AwesomeSliderStyles}>
            <div data-src="/path/to/image-0.jpg" />
            <div data-src="/path/to/image-1.jpg" />
            <div data-src="/path/to/image-2.jpg" />
            <div data-src="/path/to/image-3.jpg" />
          </AwesomeSlider>
        
    )
}


export default CubeCarousel
