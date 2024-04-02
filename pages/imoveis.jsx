import Header from "src/components/Header"
import Footer from "src/components/Footer"

import CarouselImoveis from 'src/components/carousel_imoveis';

import {UseLanguage} from 'src/components/language';


const info_imoveis = [
    [
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
    ],
    [
        [
            [],
            ["Apartment with balcony in Leblon",
                "Beach block, 165m2, renovated apartment, balcony, toilet, social bathroom. Kitchen, area and complete dependency. 24hrs concierge, play with pool. One apartment per floor.",
                "Rooms", "3, including 1 suite;",
                "Value", "4M;",
                "Condominium", "average 4,000;",
                "Address", "Cupertino Durão, Leblon, Rio de Janeiro-RJ."]
        ],
        [
            [],
            ["Charming apartment in the quadrilateral, in Ipanema",
                "Florense cabinets, 2 parking spaces, closet",
                "Condominium", "24h doorman",
                "Area", "130m2",
                "Rooms", "3 bedrooms including 1 suite",
                "Sale", "3.8M",]
        ],
        [
            [],
            ["Penthouse in the quadrilateral, in Ipanema.",
                "Block from Joana Angélica Beach, Ipanema. Beautiful penthouse in a prime location on the beach block. Fully renovated with good finish, 527m², super light and airy, with open view.",
                "1st floor", "entrance hall, linear staircase, 3 bedrooms including 1 suite with closet and bathrooms in separate environments.",

                "2nd floor",
                "large living room in various environments, dining room, living room, toilet, gourmet kitchen, terrace with pool, sauna and barbecue.",

                "3rd floor",
                "solarium with support bar and incredible view. Well-managed building with 24-hour concierge and 2 parking spaces in the deed.",

                "Price", "13M owner dropped to 10.9M, Condominium: 4,100,"]
        ]
    ]
];

for (let i = 1; i <= 15; i++) {

    info_imoveis[0][0][0].push(
        <img src={`/images/imoveis/cupertino/${i}.jpg`} alt={`Slide ${i}`} />);
    info_imoveis[1][0][0].push(
        <img src={`/images/imoveis/cupertino/${i}.jpg`} alt={`Slide ${i}`} />);

}

for (let i = 1; i <= 10; i++) {

    info_imoveis[0][1][0].push(
        <img src={`/images/imoveis/jaguaribe/barao-jaguaribe (${i}).jpg`} alt={`Slide ${i}`} />);
    info_imoveis[1][1][0].push(
        <img src={`/images/imoveis/jaguaribe/barao-jaguaribe (${i}).jpg`} alt={`Slide ${i}`} />);

}

for (let i = 1; i <= 30; i++) {

    info_imoveis[0][2][0].push(
        <img src={`/images/imoveis/cobertura/cobertura (${i}).jpg`} alt={`Slide ${i}`} />);
    info_imoveis[1][2][0].push(
        <img src={`/images/imoveis/cobertura/cobertura (${i}).jpg`} alt={`Slide ${i}`} />);

}

const textos_imoveis = [
    ["Entre em contato!"],
    ["Get in Touch!"]
]

//teste
export default function imoveis() {
    const { currentLanguage } = UseLanguage();

    return (
        <div>
            <Header />

            <div className="imoveis">
                <div className="background_imoveis"></div>

                <div class="carousel_background">
                    <CarouselImoveis slides={info_imoveis} />

                    <div class="container_botao_contato">
                        <a href="https://wa.me/5521971878889" class="botao_contato">
                            {textos_imoveis[currentLanguage][0]}
                        </a>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    )
}