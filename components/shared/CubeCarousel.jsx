"use client"


import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import 'react-awesome-slider/dist/styles.css';

const AutoplaySlider = withAutoplay(AwesomeSlider);
const CubeCarousel = () => {
    return(

        <AutoplaySlider
        play={true}
        cancelOnInteraction={false} // should stop playing on user interaction
        interval={6000}
      >
    <div data-src="/path/to/images/movies/Black Panther Wakanda Forever 2022-backdrop.webp" />
    <div data-src="/path/to/images/movies/code8-backdrop.webp" />
    <div data-src="/path/to/images/movies/Doctor Strange in the Multiverse of Madness 2022-backdrop.webp" />
    </AutoplaySlider>
    )
}


export default CubeCarousel
