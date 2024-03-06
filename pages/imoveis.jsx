import Header from "src/components/Header"
import Footer from "src/components/Footer"
import Center from "src/components/Center"
import Texto from "src/components/Texto";

import CarouselImoveis from 'src/components/carousel_imoveis';

const info_imoveis = [
    [
        [],
        ["Apartamento com varanda no Leblon",
            "Quadra da praia, 165m2, apartamento reformado, varanda, lavabo, banheiro social. Cozinha, área e dependência completa. Portaria 24hrs, play com piscina. Um apartamento por andar.",
            "Quartos", "3, sendo 1 suíte;",
            "Valor", "4M;",
            "Condomínio", "média 4.000;",
            "Endereço", "Cupertino Durão, Leblon, Rio de Janeiro-RJ."]
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
            "1º pavimento", "hall de entrada, escada linear, 3 quartos sendo 1 suíte com closet e banheiros em ambientes separados. ",

            "2º pavimento",
            "amplo salão em vários ambientes, sala de jantar, sala de estar, lavabo, cozinha gourmet, terraço com piscina, sauna e churrasqueira.",

            "3° pavimento",
            "solarium com bar de apoio e vista incrível. Prédio bem administrado com portaria 24 horas e 2 vagas na escritura.",

            "Preço", "13M proprietária baixou para 10.9M, Condominio: 4.100,"]
    ],
];

for (let i = 1; i <= 15; i++) {
    info_imoveis[0][0].push(
        <img src={`/images/imoveis/cupertino/${i}.jpg`} alt={`Slide ${i}`} />);
}

for (let i = 1; i <= 10; i++) {
    info_imoveis[1][0].push(
        <img src={`/images/imoveis/jaguaribe/barao-jaguaribe (${i}).jpg`} alt={`Slide ${i}`} />);
}

for (let i = 1; i <= 30; i++) {
    info_imoveis[2][0].push(
        <img src={`/images/imoveis/cobertura/cobertura (${i}).jpg`} alt={`Slide ${i}`} />);
}



export default function imoveis() {

    return (
        <div>
            <Header />
            <div className="imoveis">
                <div className="background_imoveis"></div>
                <div class="carousel_background">
                    <CarouselImoveis slides={info_imoveis} />
                    <div class="container_botao_contato">
                        <a href="https://wa.me/5521971878889" class="botao_contato">
                            Entre em Contato!
                        </a>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}