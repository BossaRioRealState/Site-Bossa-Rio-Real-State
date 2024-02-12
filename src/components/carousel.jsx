import React, { useState } from 'react';

const Carousel = (props) => {
    const [currentIndex_img, setCurrentIndex_img] = useState(0);

    const goToNextSlide_img = () => {
        if (currentIndex_img === props.slides[currentIndex].length - 1) {
        setCurrentIndex_img(0);
        } else {
        setCurrentIndex_img(currentIndex_img + 1);
        }
    }

    const goToPrevSlide_img = () => {
        if (currentIndex_img === 0) {
        setCurrentIndex_img(props.slides[currentIndex].length - 1);
        } else {
        setCurrentIndex_img(currentIndex_img - 1);
        }
    }

    const renderSlide_img = () => {
        return (
            <div style={{width:"100%"}}>
                <div class="title">
                    <h2>{props.slides[currentIndex][1][0]}</h2>
                </div>
                <div class='carousel-container-img' style={{display:"grid", gridTemplateColumns: "repeat(2, 1fr)",marginTop:"50px"}}>
                    <div class="image">
                        <button className='prev-button-img' onClick={goToPrevSlide_img}>
                            <img src="images/right-arrow.png"/>
                        </button>
                        {props.slides[currentIndex][0][currentIndex_img]}
                        <button className='next-button-img' onClick={goToNextSlide_img}>
                            <img src="images/right-arrow.png"/>
                        </button>
                    </div>
                    <div class="text">
                        <p>{props.slides[currentIndex][1][1]}</p>
                        <ul>
                                <li>Quartos: {props.slides[currentIndex][1][2]}</li>
                                <li>Banheiros: {props.slides[currentIndex][1][3]}</li>
                                <li><div class="address">
                                    Localização: <p1>{props.slides[currentIndex][1][4]}</p1>
                                </div></li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }

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
                {renderSlide_img()}
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