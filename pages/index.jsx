import Header from "src/components/Header"
// import {currentLanguage} from "src/components/Header"
import Footer from "src/components/Footer"
import Texto from "src/components/Texto";

import {UseLanguage} from 'src/components/language';


const textos_home = [
    //portugues
    [
        "Fale com uma de nossas especialistas",

        "Porque trabalhar conosco",
        "Queremos tornar o processo de compra e venda de imóveis uma experiência diferenciada por meio de curadoria personalizada e atendimento único.",

        "Ética",
        "Respeito",
        "Transparência",
        "Comprometimento",
        "Inovação",

        "Discrição",
        "Excelência",
        "Determinação",
        "Cooperação",
        "Agilidade",

        "Nossa História",

        "Visão",
        "Visando atender as solicitações de referências no nicho imobiliário, de compra e venda de propriedades exclusivas, nasce a Bossa Rio Real Estate.",

        "Excelência",
        "Chegamos para quebrar paradigmas no mercado imobiliário atendendo de forma personalizada, exclusiva e cuidando com excelência dos bens e sonhos de cada um.",

        "Dedicação",
        "Tendo como espelho a mesma dedicação, personalização e curadoria cuidadosa e especializada da agência de turismo que nos abraça e tem mais de 4 décadas no mercado.",

        "Concierge 360",
        "Caso o cliente tenha interesse, oferecemos assessoria completa e personalizada no processo de compra e reforma de imóveis, incluindo serviços como: ",
        "Arquitetura, Design e Decoração",
        "Personal Shopper Home",
        "Personal Organizer",
        "Jurídico e burocrático",
        "Auxílio na comunicação, contratação e acompanhamento de todos os processos citados",

        "“Você pode sonhar, criar, desenhar e construir o lugar mais maravilhoso do mundo. Mas é necessário ter pessoas para transformar seu sonho em realidade.’’ - Walt Disney"
    ],
    //ingles
    [
        "Talk to one of our specialists",

        "Why work with us", "We want to make the process of buying and selling real estate a differentiated experience through personalized curation and unique service.",

        "Ethics", "Respect", "Transparency", "Commitment", "Innovation",

        "Discretion", "Excellence", "Determination", "Cooperation", "Agility",

        "Our History",

        "Vision", "Aiming to meet the requests for references in the real estate niche, for the purchase and sale of exclusive properties, Bossa Rio Real Estate is born.",

        "Excellence", "We arrived to break paradigms in the real estate market serving in a personalized, exclusive way and taking care of the goods and dreams of each one with excellence.",

        "Dedication", "Having as a mirror the same dedication, personalization and careful and specialized curation of the travel agency that embraces us and has more than 4 decades in the market.",

        "Concierge 360",
        "If the client is interested, we offer complete and personalized assistance in the process of buying and renovating properties, including services such as: ",
        "Architecture, Design and Decoration", "Personal Shopper Home", "Personal Organizer", "Legal and bureaucratic", "Assistance in communication, hiring and monitoring of all the mentioned processes",

        "“You can dream, create, design, and build the most wonderful place in the world. But it requires people to make your dream a reality.’’ - Walt Disney"

    ]
]

export default function Home() {
    const { currentLanguage } = UseLanguage();

    return (
        <div className="Home">
            <Header />
            <div className="secao1">
                <div className="Background_inicio"></div>
                <div className="container_logo" >
                    <img
                        src="/images/logo.png"
                        alt="Logo Bossa rio"
                        className="img_logo"
                    />
                    <div className="container_botao_home">
                        <a href="https://wa.me/5521971878889" className="botao_home">
                            {textos_home[currentLanguage][0]}
                        </a>
                    </div>
                    
                </div>
            </div>
            <div className="secao2">
                <div className="Background_porque_trab"></div>
                <div className="grid_porque_trab">
                    <div className="container_img_porque">
                        <img
                            src="/images/Home/interior.jpg"
                            alt="Logo Bossa rio"
                            className="img_porque"
                        />
                    </div>
                    <div className="container_texto_porque">
                        <Texto>
                            <div>
                                <Texto>
                                    <h2>{textos_home[currentLanguage][1]}</h2>
                                    <p>{textos_home[currentLanguage][2]}</p>
                                </Texto>
                            </div>
                            <div className="grid_valores">
                                <Texto>
                                    <ul>
                                        <li>{textos_home[currentLanguage][3]}</li>
                                        <li>{textos_home[currentLanguage][4]}</li>
                                        <li>{textos_home[currentLanguage][5]}</li>
                                        <li>{textos_home[currentLanguage][6]}</li>
                                        <li>{textos_home[currentLanguage][7]}</li>
                                    </ul>
                                </Texto>
                                <Texto>
                                    <ul>
                                        <li>{textos_home[currentLanguage][8]}</li>
                                        <li>{textos_home[currentLanguage][9]}</li>
                                        <li>{textos_home[currentLanguage][10]}</li>
                                        <li>{textos_home[currentLanguage][11]}</li>
                                        <li>{textos_home[currentLanguage][12]}</li>
                                    </ul>
                                </Texto>
                            </div>
                        </Texto>
                    </div>


                </div>
            </div>
            <div className="secao3">
                <div className="background_nossa_historia"></div>
                <div className="titulo_nossa_historia">
                    <Texto>
                        <h2>{textos_home[currentLanguage][13]}</h2>
                    </Texto>
                </div>

                <div className="container_rect_sobre">
                    <div class="rectangle">
                        <img
                            src="/images/Home/logo1.png"
                            alt="Logo1"
                            className="img-icon"
                        />
                        <Texto>
                            <h1>{textos_home[currentLanguage][14]}</h1>
                            <p1>{textos_home[currentLanguage][15]}</p1>
                        </Texto>
                    </div>
                    <div class="rectangle">
                        <img
                            src="/images/Home/logo2.png"
                            alt="Logo1"
                            className="img-icon"
                        />
                        <Texto>
                            <h1>{textos_home[currentLanguage][16]}</h1>
                            <p1>{textos_home[currentLanguage][17]}</p1>
                        </Texto>
                    </div>
                    <div class="rectangle">
                        <img
                            src="/images/Home/logo3.png"
                            alt="Logo1"
                            className="img-icon"
                        />
                        <Texto>
                            <h1>{textos_home[currentLanguage][18]}</h1>
                            <p1>{textos_home[currentLanguage][19]}</p1>
                        </Texto>
                    </div>
                </div>

            </div>
            <div className="secao4">
                <div className="Background_concierge"></div>
                <div className="grid_concierge">
                    <div className="texto_concierge">
                        <div className="titulo_concierge">
                            <Texto>
                                <hr />
                                <h2>{textos_home[currentLanguage][20]}</h2>
                                <hr2 />
                            </Texto>
                        </div>
                        <div className="topicos_concierge">
                            <Texto>
                                <p3>{textos_home[currentLanguage][21]}</p3>
                                <ul>
                                    <li><p3>{textos_home[currentLanguage][22]}</p3></li>
                                    <li><p3>{textos_home[currentLanguage][23]}</p3></li>
                                    <li><p3>{textos_home[currentLanguage][24]}</p3></li>
                                    <li><p3>{textos_home[currentLanguage][25]}</p3></li>
                                    <li><p3>{textos_home[currentLanguage][26]}</p3></li>
                                </ul>
                            </Texto>
                        </div>

                    </div>
                    <div className="container_img_concierge">
                        <img
                            src="/images/Home/concierge-360.jpg"
                            className="img_concierge"
                        />
                    </div>
                </div>
                <div class="container_frase_disney">
                    <div class="frase_disney">
                        <Texto>
                            <h3>{textos_home[currentLanguage][27]}</h3>
                        </Texto>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}