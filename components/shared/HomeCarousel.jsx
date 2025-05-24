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


nextBtn.onclick = () => showSlider('next');
prevBtn.onclick = () => showSlider('prev');


function resetTimeAnimation() {
  runningTime.style.animation = 'none';
  runningTime.offsetHeight; // trigger reflow
  runningTime.style.animation = 'runningTime 7s linear 1 forwards';
}


function showSlider(direction) {
  const sliderItems = list.querySelectorAll('.carousel .list .item');

  if (direction === 'next') {
    list.appendChild(sliderItems[0]); 
    carousel.classList.add('next');
  } else {
    list.prepend(sliderItems[sliderItems.length - 1]); 
    carousel.classList.add('prev');
  }


  clearTimeout(runTimeout);
  runTimeout = setTimeout(() => {
    carousel.classList.remove('next');
    carousel.classList.remove('prev');
  }, timeRunning);


  clearTimeout(autoNext);
  autoNext = setTimeout(() => {
    nextBtn.click();
  }, timeAutoNext);

  resetTimeAnimation();
}


resetTimeAnimation();

  
    }, [])
    



  return (
    <div className='carousel'>
      <div className='list'>
        {Movies.map((item) => (
          <div
            className='item'
            style={{background : `url(${item?.backdrop})`}}
          >
            <div className='content'>
              <div className='title'>SLIDER</div>
              <div className='name'>One</div>
              <div className='des'>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Officiis culpa similique consequuntur, reprehenderit dicta
                repudiandae.
              </div>
              <div className='btn'>
                <button>See More</button>
                <button>Subscribe</button>
              </div>
            </div>
          </div>
        ))}

        <div className='arrows'>
          <button class='prev'>prev</button>
          <button class='next'>next</button>
        </div>

        <div className='timeRunning'></div>
      </div>
    </div>
  )
}

export default HomeCarousel
