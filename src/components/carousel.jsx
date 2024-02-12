import React, { useState } from 'react';

const Carousel = (props) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const goToNextSlide = () => {
        if (currentIndex === props.slides.length - 1) {
        setCurrentIndex(0);
        } else {
        setCurrentIndex(currentIndex + 1);
        }
    }

    const goToPrevSlide = () => {
        if (currentIndex === 0) {
        setCurrentIndex(props.slides.length - 1);
        } else {
        setCurrentIndex(currentIndex - 1);
        }
    }

    const renderSlide = () => {
        return (
          <div>
            {props.slides[currentIndex]}
          </div>
        )
    }

  return (
    <div>
        <div className='carousel-container'>
            <button className='prev-button' onClick={goToPrevSlide}>
                <img src="images/right-arrow.png"/>
            </button>
            {renderSlide()}
            <button className='next-button' onClick={goToNextSlide}>
                <img src="images/right-arrow.png"/>
            </button>
        </div>
    </div>
  )
}

export default Carousel;