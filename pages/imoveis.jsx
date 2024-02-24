import Header from "src/components/Header"
import Footer from "src/components/Footer"
import Center from "src/components/Center"
import Texto from "src/components/Texto";

import Carousel from 'src/components/carousel';

const slides = [
    [ 
        [],
        ["Apartamento reformado no Leblon",
        "Quadra da praia, 165m2, apartamento reformado, varanda, lavabo, banheiro social. Cozinha, área e dependência completa. Portaria 24hrs, play com piscina. Um apartamento por andar.",
        "Quartos", "3, sendo 1 suíte;",
        "Valor", "4M;",
        "Condomínio", "média 4.000;",
        "Endereço","Cupertino Durão, Leblon, Rio de Janeiro-RJ."]
    ],
    [
        [],
        ["ALINY VENDA LEBLON",
        "Hall, sala de estar sala jantar, varanda aberta, sala de TV, lavabo. Na parte íntima do imóvel, 1 closet, 1 banheiro, armários embutidos. Parte de serviço com cozinha, planejada, copa, despensa, louceiro, área de serviço, rouparia, dependência de empregada, banheiro de empregada. Imóvel reformado, impecável 2 vagas de garagem. Com ótimo padrão de acabamento.",
        "Quartos", "4 quartos, sendo 2 suítes",
        "Espaco","194m²",
        "Valor", "4.300.000",
        "Condomínio", "Bicicletário, playground, portaria 24 horas.",]
    ],
    [ 
        [],
        ["Quadrilátero Rua Barão de jaguaripe",
        "Armários Florense, 2 vagas, closet",
        "Condomínio", "Porteiro 24h",
        "Área", "130m2",
        "Quartos", "3 quartos sendo 1 suite",
        "Venda", "3.8M",]
    ],
  ];

for (let i = 1; i <= 15; i++) {
    slides[0][0].push(
        <img src={`/images/imoveis/cupertino/${i}.jpg`} alt={`Slide ${i}`} />);
}

for (let i = 1; i <= 21; i++) {
    slides[1][0].push(
        <img src={`/images/imoveis/aliny-leblon/aliny-leblon (${i}).jpg`} alt={`Slide ${i}`} />);
}

for (let i = 1; i <= 10; i++) {
    slides[2][0].push(
        <img src={`/images/imoveis/jaguaribe/barao-jaguaribe (${i}).jpg`} alt={`Slide ${i}`} />);
}



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