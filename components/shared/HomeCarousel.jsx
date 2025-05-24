'use client'

import { useEffect } from "react"
import './homeCarousel.css'

const HomeCarousel = ({ Movies }) => {


    useEffect(() => {
        const nextBtn = document.querySelector('.next');
        const prevBtn = document.querySelector('.prev');
        const carousel = document.querySelector('.carousel');
        const list = document.querySelector('.list');
        const items = document.querySelectorAll('.item');
        const runningTime = document.querySelector('.carousel .timeRunning');
    
        const timeRunning = 3000;
const timeAutoNext = 5000;

let runTimeout;
let autoNext = setTimeout(() => {
  nextBtn.click();
}, timeAutoNext);

// Next/prev button click events
nextBtn.onclick = () => showSlider('next');
prevBtn.onclick = () => showSlider('prev');

// Reset progress bar animation
function resetTimeAnimation() {
  runningTime.style.animation = 'none';
  runningTime.offsetHeight; // trigger reflow
  runningTime.style.animation = 'runningTime 7s linear 1 forwards';
}

// Handle carousel slide logic
function showSlider(direction) {
  const sliderItems = list.querySelectorAll('.carousel .list .item');

  if (direction === 'next') {
    list.appendChild(sliderItems[0]); // move first to last
    carousel.classList.add('next');
  } else {
    list.prepend(sliderItems[sliderItems.length - 1]); // move last to first
    carousel.classList.add('prev');
  }

  // Remove animation class after slide transition
  clearTimeout(runTimeout);
  runTimeout = setTimeout(() => {
    carousel.classList.remove('next');
    carousel.classList.remove('prev');
  }, timeRunning);

  // Reset auto next timer
  clearTimeout(autoNext);
  autoNext = setTimeout(() => {
    nextBtn.click();
  }, timeAutoNext);

  resetTimeAnimation();
}

// Start animation on load
resetTimeAnimation();

  
    }, [])
    



  return (
    <div class='carousel'>
      <div class='list'>
        {Movies.map((item) => (
          <div
            class='item'
            style='background-image: url(https://www.jqueryscript.net/dummy/1.jpg)'
          >
            <div class='content'>
              <div class='title'>SLIDER</div>
              <div class='name'>One</div>
              <div class='des'>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Officiis culpa similique consequuntur, reprehenderit dicta
                repudiandae.
              </div>
              <div class='btn'>
                <button>See More</button>
                <button>Subscribe</button>
              </div>
            </div>
          </div>
        ))}

        <div class='arrows'>
          <button class='prev'>prev</button>
          <button class='next'>next</button>
        </div>

        <div class='timeRunning'></div>
      </div>
    </div>
  )
}

export default HomeCarousel
