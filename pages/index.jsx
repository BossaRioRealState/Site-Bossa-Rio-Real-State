import Header from "src/components/Header"
import Footer from "src/components/Footer"
import Center from "src/components/Center"
import Texto from "src/components/Texto";

export default function Home() {

    return (
        <div className="Home">
            <Header />
            <div className="secao1">
                <div className="Background_inicio"></div>
                <div className="container_logo">
                    <Center>
                        <img
                            src="/images/logo.png"
                            alt="Logo Bossa rio"
                            className="img_logo"
                        />

                        <div className="container_botao_home">
                            <a href="https://wa.me/5521971878889" className="botao_home">
                                Fale com uma de nossas especialistas
                            </a>
                        </div>

                    </Center>
                </div>
            </div>
            <div className="secao2">
                <div className="Background_porque_trab"></div>
                <div className="grid_porque_trab">
                    <div>
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
                                    <h2>Porque trabalhar conosco</h2>
                                    <p>Queremos tornar o processo de compra e venda de imóveis uma experiência diferenciada por meio de curadoria personalizada e atendimento único.</p>
                                </Texto>
                            </div>
                            <div className="grid_valores">
                                <div>
                                    <ul>
                                        <li>Ética</li>
                                        <li>Respeito</li>
                                        <li>Transparência</li>
                                        <li>Comprometimento</li>
                                        <li>Inovação</li>
                                    </ul>
                                </div>
                                <div>
                                    <ul>
                                        <li>Discrição</li>
                                        <li>Excelência</li>
                                        <li>Determinação</li>
                                        <li>Cooperação</li>
                                        <li>Agilidade</li>
                                    </ul>
                                </div>
                            </div>
                        </Texto>
                    </div>


                </div>
            </div>
            <div className="secao3">
                <div className="background_nossa_historia"></div>
                <div className="titulo_nossa_historia">
                    <Texto>
                        <h2>Nossa História</h2>
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
                            <h1>Visão</h1>
                        </Texto>
                        <Texto>
                            <p1>Visando atender as solicitações de referências no nicho imobiliário, de compra e venda de propriedades exclusivas, nasce a Bossa Rio Real Estate.</p1>
                        </Texto>
                    </div>
                    <div class="rectangle">
                        <img
                            src="/images/Home/logo2.png"
                            alt="Logo1"
                            className="img-icon"
                        />
                        <Texto>
                            <h1>Excelência</h1>
                        </Texto>
                        <Texto>
                            <p1>Chegamos para quebrar paradigmas no mercado imobiliário atendendo de forma personalizada, exclusiva e cuidando com excelência dos bens e sonhos de cada um.</p1>
                        </Texto>
                    </div>
                    <div class="rectangle">
                        <img
                            src="/images/Home/logo3.png"
                            alt="Logo1"
                            className="img-icon"
                        />
                        <Texto>
                            <h1>Dedicação</h1>
                        </Texto>
                        <Texto>
                            <p1>Tendo como espelho a mesma dedicação, personalização e curadoria cuidadosa e especializada da agência de turismo que nos abraça e tem mais de 4 décadas no mercado.</p1>
                        </Texto>
                    </div>
                </div>

            </div>
            <div className="secao4">
                <div className="Background_concierge"></div>
                <div className="texto_concierge">
                    <div className="titulo_concierge">
                        <Texto>
                            <hr />
                            <h2>Concierge 360</h2>
                            <hr2 />
                        </Texto>
                    </div>
                    <div className="topicos_concierge">
                        <Texto>
                            <p3>Caso o cliente tenha interesse, oferecemos assessoria completa e personalizada no processo de compra e reforma de imóveis, incluindo serviços como: </p3>
                            <ul>
                                <li><p3>Arquitetura, Design e Decoração;</p3></li>
                                <li><p3>Personal Shopper Home;</p3></li>
                                <li><p3>Personal Organizer</p3></li>
                                <li><p3>Jurídico e burocrático; </p3></li>
                                <li><p3>Auxílio na comunicação, contratação e acompanhamento de todos os processos citados.</p3></li>
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
                <div class="container_frase_disney">
                    <div class="frase_disney">
                        <Texto>
                            <h3>“Você pode sonhar, criar, desenhar e construir o lugar mais maravilhoso do mundo. Mas é necessário ter pessoas para transformar seu sonho em realidade.’’ - Walt Disney</h3>
                        </Texto>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}