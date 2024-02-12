import Header from "src/components/Header"
import Footer from "src/components/Footer"
import Center from "src/components/Center"
import Texto from "src/components/Texto";

import Carousel from 'src/components/carousel';

const slides = [
    <img src='/images/Home/background1.jpg' alt='Slide 1' />,
    <img src='/images/Home/background2.jpg' alt='Slide 2' />,
  ];

export default function vendas() {

    return (
        <div className="vendas">
            <Header />
            <div style={{
                position: "relative",
                overflow: "hidden",
                height: "100vh", // Initial height
                textAlign: "center",
                display: "flex",
                justifyContent: "center",
                alignContent: "center",
                paddingTop: "10%",
                paddingBottom: "5%"
                }}>
                <div
                    style={{
                    position: "absolute",
                    top: "-15%",
                    left:"0",
                    backgroundImage: "url(/images/Home/background1.jpg)",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    opacity:0.6,
                    
                    height: "115%", // 100% height to cover the entire div
                    width: "100%",
                    zIndex: "1",
                    }}
                ></div>
                <div class="carousel_background" style={{display:"grid", gridTemplateColumns: "repeat(2, 1fr)",}}>
                    <Carousel slides={slides} />
                </div>
            </div>
            <Footer />
        </div>
    )
}