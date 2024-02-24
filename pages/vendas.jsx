import Header from "src/components/Header"
import Footer from "src/components/Footer"
import Center from "src/components/Center"
import Texto from "src/components/Texto";

import Carousel from 'src/components/carousel';

const slides = [
    [
        [<img src='/images/imoveis/leblom1.jpg' alt='Slide 1' />,
        <img src='/images/imoveis/leblom2.jpg' alt='Slide 2' />,],
        ["Casa ampla no leblon",
        "Casa charmosa localizada no bairro do Leblon, com ampla cozinha integrada à sala de estar, perfeita para um ambiente de integração com a família e amigos.",
        "2","2"," Rua tal, 1234 - Leblon, Rio de Janeiro","/vendas"]
    ],
    [
        [<img src='/images/imoveis/barra2.jpg' alt='Slide 1' />,
        <img src='/images/imoveis/barra1.jpg' alt='Slide 2' />,],
        ["Casa Barra da Tijuca",
        "Casa charmosa localizada no bairro do Leblon, com ampla cozinha integrada à sala de estar, perfeita para um ambiente de integração com a família e amigos.",
        "3","3"," Rua X, 1114 - Barra da Tijuca, Rio de Janeiro","/vendas"]
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
                    <div class="container_botao_contato">
                        <a href="/vendas" class="botao_contato">
                            Entre em Contato!
                        </a>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}