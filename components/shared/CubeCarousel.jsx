"use client"

import AwesomeSlider from 'react-awesome-slider';
import withCaption from 'react-awesome-slider/dist/captioned';
import 'react-awesome-slider/dist/styles.css';
import 'react-awesome-slider/dist/captioned.css';


      
const CaptionedSlider = withCaption(AwesomeSlider);
       

const CubeCarousel = () => {
    return(



        
        
        

   
        
   
 
  
        <CaptionedSlider
          startupScreen={StartupScreen}
          cssModule={CaptionedStyles}
          screens={[
            {
              backgroundColor: '#4a9c8c',
              media: '/images/movies/Black Panther Wakanda Forever 2022-backdrop.webp',
              caption: 'I want to see what you got.',
            },
            {
              backgroundColor: '#4a9c8c',
              media: '/images/movies/code8-backdrop.webp',
              caption: "The answer is -- Don't think about it.",
            },
          ]}
        />
      
        
    )
}


export default CubeCarousel
