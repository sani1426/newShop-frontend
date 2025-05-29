"use client"



import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/custom-animations/cubeAnimation.css';

const CubeCarousel = () => {
    return(

  <AwesomeSlider animation="cubeAnimation">
    <div data-src="/path/to/images/movies/Black Panther Wakanda Forever 2022-backdrop.webp" />
    <div data-src="/path/to/images/movies/code8-backdrop.webp" />
    <div data-src="/path/to/images/movies/Doctor Strange in the Multiverse of Madness 2022-backdrop.webp" />
  </AwesomeSlider>
    )
}


export default CubeCarousel
