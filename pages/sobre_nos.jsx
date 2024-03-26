import Header from "src/components/Header"
import Footer from "src/components/Footer"
import Texto from "src/components/Texto";

import { UseLanguage } from 'src/components/language';

const textos_sobre_nos = [
    ["SOBRE", "NÓS",
        "QUEM SOMOS?",
        "Bossa Rio Real Estate chega ao mercado com o propósito de auxiliar você que deseja comprar ou vender um imóvel de luxo ou de alto padrão. Conte com a consultoria especializada de uma empresa que agrega o que há de melhor disponível no mercado imobiliário para sua segurança e conforto.",
        "Com o apoio da Plantel Turismo, uma empresa consolidada e reconhecida há mais de 40 anos no mercado de turismo de luxo, chegamos para ocupar uma lacuna muito requisitada neste nicho",
        "Através dos nossos contatos, curadoria de portfólio e know how em atendimento personalizado, agregamos um novo conceito para um público exigente e sofisticado.",
        "Formada em comunicação, com mba em gestão empresarial pela FGV.",
        "Experiência ampla na área comercial e em bancos. Atuando desde financiamento habitacional, aporte, até compra e venda de imóveis para fundo imobiliário, inclusive negociações pela oportunitty. Sócia da imobiliária Bossa Rio Real Estate.", "Formada em Direito com especialização em Gestão e Direito Empresarial pela FGV.",
        "Possui ampla experiência em Direito Imobiliário, atuando também como sócia em consultoria imobiliária da Bossa Rio Real Estate.",
        "Atriz, empreendedora e concierge lifestyle a frente da agência boutique Rio de Janeiro Feelings, realizando gerenciamento de eventos de negócios no mercado de luxo e facilidades em viagens de luxo privadas.",
        "A compra e venda de imóveis, comum entre os clientes de turismo, a posicionaram no mercado imobiliário, buscando soluções criativas e fora da curva para o público que se apaixona pelo Brasil e decide ficar. Sócia de Bossa Rio Real Estate."
    ],
    ["ABOUT", "US", "WHO ARE WE?", "Bossa Rio Real Estate enters the market with the purpose of assisting you who wish to buy or sell a luxury or high standard property. Count on the specialized consultancy of a company that brings together the best available in the real estate market for your safety and comfort.",
        "With the support of Plantel Turismo, a consolidated and recognized company for over 40 years in the luxury tourism market, we arrive to fill a much requested gap in this niche",
        "Through our contacts, portfolio curation and know-how in personalized service, we add a new concept for a demanding and sophisticated audience.",
        "Graduated in communication, with an MBA in business management from FGV.",
        "Broad experience in the commercial area and in banks. Working from housing financing, contribution, to buying and selling real estate for a real estate fund, including negotiations by the opportunity. Partner of the real estate agency Bossa Rio Real Estate.",
        "Graduated in Law with a specialization in Management and Business Law from FGV.",
        "She has extensive experience in Real Estate Law, also acting as a partner in real estate consultancy at Bossa Rio Real Estate.",
        "Actress, entrepreneur and lifestyle concierge at the forefront of the boutique agency Rio de Janeiro Feelings, managing business events in the luxury market and facilities in private luxury trips.",
        "The buying and selling of real estate, common among tourism clients, positioned her in the real estate market, seeking creative and out-of-the-box solutions for the public who fall in love with Brazil and decide to stay. Partner of Bossa Rio Real Estate."
    ]
]

export default function sobre_nos() {

    const { currentLanguage } = UseLanguage();

    return (
        <div>
            <Header />
            <div className="sobre_nos">
                <div className="background_sobre_nos"></div>
                <div className="titulo">
                    <Texto>
                        <h2>{textos_sobre_nos[currentLanguage][0]}</h2>
                        <h2 style={{ marginLeft: "50%" }}>{textos_sobre_nos[currentLanguage][1]}</h2>
                    </Texto>
                </div>
                <div className="texto_quem_somos">

                    <h2>{textos_sobre_nos[currentLanguage][2]}</h2>

                    <p4>{textos_sobre_nos[currentLanguage][3]}</p4>
                    <p4>{textos_sobre_nos[currentLanguage][4]}</p4>
                    <p4>{textos_sobre_nos[currentLanguage][5]}</p4>

                </div>


                <div className="container_perfils">
                    <div class="perfil_socias">
                        <img
                            src="/images/sobre_nos/Aliny.jpg"
                            className="img_perfil"
                        />
                        <div class="rectangle_sobre_nos">
                            <h1>Aliny Manzieri</h1>
                            <p>{textos_sobre_nos[currentLanguage][6]}</p>
                            <p>{textos_sobre_nos[currentLanguage][7]}</p>
                        </div>
                    </div>
                    <div class="perfil_socias">
                        <img
                            src="/images/sobre_nos/Flavia.jpg"
                            className="img_perfil"
                        />
                        <div class="rectangle_sobre_nos">

                            <h1>Flávia Baldoíno Costa</h1>

                            <p>{textos_sobre_nos[currentLanguage][8]}</p>
                            <p>{textos_sobre_nos[currentLanguage][9]}</p>
                        </div>
                    </div>
                    <div class="perfil_socias">
                        <img
                            src="/images/sobre_nos/Isis.jpg"
                            className="img_perfil"
                        />
                        <div class="rectangle_sobre_nos">

                            <h1>Isis Grossi</h1>

                            <p>{textos_sobre_nos[currentLanguage][10]}</p>
                            <p>{textos_sobre_nos[currentLanguage][11]}</p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}