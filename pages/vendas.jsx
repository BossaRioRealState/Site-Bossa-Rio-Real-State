import Header from "src/components/Header"
import Footer from "src/components/Footer"
import Center from "src/components/Center"
import Texto from "src/components/Texto";

import Carousel from 'src/components/carousel';

const slides = [
    [
        [<img src='/images/Home/background1.jpg' alt='Slide 1' />,
        <img src='/images/Home/background2.jpg' alt='Slide 2' />,],
        ["Casa ampla no leblom","Casa charmosa localizada no bairro do Leblon, com ampla cozinha integrada à sala de estar, perfeita para um ambiente de integração com a família e amigos."]
    ],
    [
        [<img src='/images/Home/background2.jpg' alt='Slide 1' />,
        <img src='/images/Home/background1.jpg' alt='Slide 2' />,],
        ["Casa Barra da Tijuca","Casa charmosa localizada no bairro do Leblon, com ampla cozinha integrada à sala de estar, perfeita para um ambiente de integração com a família e amigos."]
    ]
  ];

export default function vendas() {

    return (
        <div className="vendas">
            <Header />
            <div style={{
                position: "relative",
                overflow: "hidden",
                height: "120vh", // Initial height
                display: "flex",
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
                <div class="carousel_background">
                    <Carousel slides={slides} />
                </div>
            </div>
            <Footer />
        </div>
    )
}