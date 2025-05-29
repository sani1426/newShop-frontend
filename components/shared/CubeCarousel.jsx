"use client"

import react from 'react '
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import withAutoplay from 'react-awesome-slider/dist/autoplay'

const AutoplaySlider = withAutoplay(AwesomeSlider);
const CubeCarousel = () => {
    return(

        <AutoplaySlider
        play={true}
        cancelOnInteraction={false} // should stop playing on user interaction
        interval={6000}
      >
    <div data-src="/images/movies/Black Panther Wakanda Forever 2022-backdrop.webp" />
    <div data-src="/images/movies/code8-backdrop.webp" />
    <div data-src="/images/movies/Doctor Strange in the Multiverse of Madness 2022-backdrop.webp" />
    </AutoplaySlider>
    )
}


export default CubeCarousel
