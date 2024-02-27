import React, { useState } from 'react';
import Texto from "src/components/Texto";

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
                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(2, 1fr)",
                        marginTop:"50px",
                        marginLeft:"150px"
                }}>
                    <div style={{position:"relative"}}>
                        <div class="rectangle_clients"
                            style={{
                                color:"white",
                                textAlign: "center",
                                justifyContent: "center",
                                alignContent: "center",
                                zIndex: "2",
                                overflow:"hidden"}}>
                            <Texto>
                                <p1>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." - Lorem</p1>
                            </Texto>
                        </div>
                        <div style={{ borderRadius: '20px', display: "block", zIndex: "3", }}>
                            <img    
                                src="/images/clientes/perfil.jpg"
                                className="img-room"
                                width="25%"
                                style={{ borderRadius: '20px', display: "block", zIndex: "3", }}
                            />
                        </div>
                    </div>

                    <div style={{position:"relative"}}>
                        <div class="rectangle_clients"
                            style={{
                                color:"white",
                                textAlign: "center",
                                justifyContent: "center",
                                alignContent: "center",
                                zIndex: "2",
                                overflow:"hidden"}}>
                            <Texto>
                                <p1>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." - Lorem</p1>
                            </Texto>
                        </div>
                        <div style={{ borderRadius: '20px', display: "block", zIndex: "3", }}>
                            <img    
                                src="/images/clientes/perfil.jpg"
                                className="img-room"
                                width="25%"
                                style={{ borderRadius: '20px', display: "block", zIndex: "3", }}
                            />
                        </div>
                    </div>
                </div>
                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(2, 1fr)",
                        marginTop:"50px",
                        marginLeft:"150px"
                }}>
                    <div style={{position:"relative"}}>
                        <div class="rectangle_clients"
                            style={{
                                color:"white",
                                textAlign: "center",
                                justifyContent: "center",
                                alignContent: "center",
                                zIndex: "2",
                                overflow:"hidden"}}>
                            <Texto>
                                <p1>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." - Lorem</p1>
                            </Texto>
                        </div>
                        <div style={{ borderRadius: '20px', display: "block", zIndex: "3", }}>
                            <img    
                                src="/images/clientes/perfil.jpg"
                                className="img-room"
                                width="25%"
                                style={{ borderRadius: '20px', display: "block", zIndex: "3", }}
                            />
                        </div>
                    </div>

                    <div style={{position:"relative"}}>
                        <div class="rectangle_clients"
                            style={{
                                color:"white",
                                textAlign: "center",
                                justifyContent: "center",
                                alignContent: "center",
                                zIndex: "2",
                                overflow:"hidden"}}>
                            <Texto>
                                <p1>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." - Lorem</p1>
                            </Texto>
                        </div>
                        <div style={{ borderRadius: '20px', display: "block", zIndex: "3", }}>
                            <img    
                                src="/images/clientes/perfil.jpg"
                                className="img-room"
                                width="25%"
                                style={{ borderRadius: '20px', display: "block", zIndex: "3", }}
                            />
                        </div>
                    </div>
                </div>
            </div>
        )
    }

  return (
    <div style={{display:"flex"}}>
        <button className='prev-button-depo' onClick={goToPrevSlide}>
            <img src="images/right-arrow.png"/>
        </button>

        {renderSlide()}

        <button className='next-button-depo' onClick={goToNextSlide}>
            <img src="images/right-arrow.png"/>
        </button>
    </div>
  )
}

export default Carousel;