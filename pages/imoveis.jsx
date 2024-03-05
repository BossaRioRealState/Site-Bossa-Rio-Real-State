import Header from "src/components/Header"
import Footer from "src/components/Footer"
import Center from "src/components/Center"
import Texto from "src/components/Texto";

import Carousel from 'src/components/carousel';

const slides = [
    [ 
        [],
        ["Apartamento com varanda no Leblon",
        "Quadra da praia, 165m2, apartamento reformado, varanda, lavabo, banheiro social. Cozinha, área e dependência completa. Portaria 24hrs, play com piscina. Um apartamento por andar.",
        "Quartos", "3, sendo 1 suíte;",
        "Valor", "4M;",
        "Condomínio", "média 4.000;",
        "Endereço","Cupertino Durão, Leblon, Rio de Janeiro-RJ."]
    ],
    [ 
        [],
        ["Apartamento charmoso no quadrilátero, em Ipanema",
        "Armários Florense, 2 vagas, closet",
        "Condomínio", "Porteiro 24h",
        "Área", "130m2",
        "Quartos", "3 quartos sendo 1 suite",
        "Venda", "3.8M",]
    ],
    [ 
        [],
        ["Cobertura no quadrilátero, em Ipanema.",
        "Quadra da Praia da Joana Angélica, Ipanema. Linda cobertura em localização nobre na quadrissima da praia. Totalmente reformada com  e bom acabamento, 527m², super clara e arejada, com vista livre.",
        "1º pavimento" ,"hall de entrada, escada linear, 3 quartos sendo 1 suíte com closet e banheiros em ambientes separados. ",
        
        "2º pavimento" ,
        "amplo salão em vários ambientes, sala de jantar, sala de estar, lavabo, cozinha gourmet, terraço com piscina, sauna e churrasqueira.",
        
        "3° pavimento",
        "solarium com bar de apoio e vista incrível. Prédio bem administrado com portaria 24 horas e 2 vagas na escritura.",
        
        "Preço", "13M proprietária baixou para 10.9M, Condominio: 4.100,"]
    ],
  ];

for (let i = 1; i <= 15; i++) {
    slides[0][0].push(
        <img src={`/images/imoveis/cupertino/${i}.jpg`} alt={`Slide ${i}`} />);
}

for (let i = 1; i <= 10; i++) {
    slides[1][0].push(
        <img src={`/images/imoveis/jaguaribe/barao-jaguaribe (${i}).jpg`} alt={`Slide ${i}`} />);
}

for (let i = 1; i <= 30; i++) {
    slides[2][0].push(
        <img src={`/images/imoveis/cobertura/cobertura (${i}).jpg`} alt={`Slide ${i}`} />);
}



export default function imoveis() {

    return (
        <div className="imoveis">
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
                        <a href="/imóveis" class="botao_contato">
                            Entre em Contato!
                        </a>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}