import Header from "src/components/Header"
import Footer from "src/components/Footer"
import Center from "src/components/Center"
import Texto from "src/components/Texto";

export default function Home() {

    return (
        <div className="Home">
            <Header />
            <div style={{
                position: "relative",
                overflow: "hidden",
                height: "135vh", // Initial height
                textAlign: "center",
                display: "flex",
                justifyContent: "center",
                alignContent: "center",
            }}>
                <div
                    style={{
                        position: "absolute",
                        top: "-5%",
                        left: "0",
                        backgroundImage: "url(/images/Home/background1.jpg)",
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "cover",
                        opacity: 0.6,

                        height: "115%", // 100% height to cover the entire div
                        width: "100%",
                        zIndex: "1",
                    }}
                ></div>
                <div
                    style={{
                        textAlign: "center",
                        display: "flex",
                        justifyContent: "center",
                        alignContent: "center",
                        zIndex: "2"
                    }}>
                    <Center>
                        <img
                            src="/images/logo.png"
                            alt="Logo Bossa rio"
                            className="img-center"
                            height="35%"
                            style={{ marginTop: '35%' }}
                        />

                        <div className="container_botao_home">
                            <a href="/contatos" className="botao_home">
                                Fale com uma de nossas especialistas
                            </a>
                        </div>

                    </Center>
                </div>
            </div>
            <div style={{
                position: "relative",
                overflow: "hidden",
                height: "100vh", // Initial height
                textAlign: "center",
                display: "flex",
                justifyContent: "center",
                alignContent: "center",
            }}>
                <div
                    style={{
                        position: "absolute",
                        backgroundImage: "url(/images/Home/background2.jpg)",
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "cover",
                        opacity: 0.5,
                        backgroundPosition: "center",
                        height: "140%", // 100% height to cover the entire div
                        width: "100%",
                        zIndex: "1",
                    }}
                ></div>
                <div
                    style={{
                        alignItems: "center",
                        alignContent: "center",
                        textAlign: "center",
                        display: "grid",
                        gridTemplateColumns: "repeat(2, 1fr)",
                        justifyContent: "center",
                        alignContent: "center",
                        zIndex: "2"
                    }}>
                    <div style={{
                        textAlign: "center",
                        justifyContent: "center",
                        alignContent: "center",
                        zIndex: "2"
                    }}>
                        <img
                            src="/images/Home/interior.jpg"
                            alt="Logo Bossa rio"
                            className="img-center"
                            height="350px"
                            style={{
                                borderRadius: "15px",
                                // marginTop: '80px',
                                // marginRight: '-150px'
                            }}
                        />
                    </div>
                    <div style={{
                        textAlign: "center",
                        justifyContent: "center",
                        alignContent: "center",
                        zIndex: "2",
                        paddingRight: "10%",
                        marginTop: "-100px"
                    }}>
                        <Texto>
                            <div style={{}}>
                                <Texto>
                                    <h2>Porque trabalhar conosco</h2>
                                    <p>Queremos tornar o processo de compra e venda de imóveis uma experiência diferenciada por meio de curadoria personalizada e atendimento único.</p>
                                </Texto>
                            </div>
                            <div style={{ display: "flex", gridTemplate: "repeat(2, 1fr)", gridGap: "100px", marginTop: "30px" }}>
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
            <div style={{
                // display:"flex",
                position: "relative",
                overflow: "hidden",
                height: "100vh", // Initial height
                textAlign: "center",
                // justifyContent: "center",
                // alignContent: "center",
            }}>
                <div
                    style={{
                        position: "absolute",
                        backgroundImage: "url(/images/Home/5.jpg)",
                        backgroundColor: "rgba(255, 255, 255, 0.5)",
                        backgroundBlendMode: "lighten",
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "cover",
                        // opacity: 0.4,
                        backgroundPosition: "center",
                        height: "170%", // 100% height to cover the entire div
                        width: "100%",
                        zIndex: "1",
                    }}
                >
                    <div style={{
                        zIndex: "3",
                        width: "60%",
                        marginTop: "0%",
                        marginLeft: "5%",
                        opacity: 1,
                    }}>
                        <div>
                            <Texto>
                                <p2>SERVIÇOS</p2>
                            </Texto>
                        </div>
                        <div style={{ marginTop: "-4%", marginLeft: "8%", }}>
                            <Texto>
                                <h2>Nossa História</h2>
                            </Texto>
                        </div>
                        <div style={{ marginTop: "-4%", marginLeft: "8%", }}>
                            <Texto>
                                <p>Visando atender as solicitações de referências no nicho imobiliário, de compra e venda de propriedades exclusivas, nasce a Bossa Rio Real Estate.</p>
                            </Texto>
                        </div>
                    </div>

                    <div class="nossa_historia_background">
                        <div class="nossa_historia">
                            <p>Chegamos para quebrar paradigmas no mercado imobiliário atendendo de forma personalizada, exclusiva e cuidando com excelência dos bens sonhos de cada um.</p><p> Tendo como espelho a mesma dedicação, personalização e curadoria cuidadosa e especializada da agência de turismo que nos abraça e tem mais de 4 décadas no mercado.</p>
                        </div>
                    </div>
                </div>



                {/* 
                <div
                    style={{
                        textAlign: "center",
                        display: "flex",
                        gridTemplateColumns: "repeat(4, 1fr)",
                        justifyContent: "center",
                        alignContent: "center",
                        zIndex: "2",
                        gridGap: "25px",
                        marginTop: "-10%",
                    }}>
                    <div class="rectangle"
                        style={{
                            color: "white",
                            textAlign: "center",
                            justifyContent: "center",
                            alignContent: "center",
                            zIndex: "2"
                        }}>
                        <div style={{ alignContent: "center", }} class="small_logo">
                            <img
                                src="/images/Home/logo1.png"
                                alt="Logo1"
                                className="img-center"
                                width="25%"
                                style={{
                                    marginTop: "12%",
                                }}
                            />
                        </div>
                        <Texto>
                            <h1>Lorem ipsum.</h1>
                        </Texto>
                        <Texto>
                            <p1>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p1>
                        </Texto>
                    </div>
                    <div class="rectangle"
                        style={{
                            textAlign: "center",
                            justifyContent: "center",
                            alignContent: "center",
                            zIndex: "2"
                        }}>
                        <div style={{ alignContent: "center", }} class="small_logo">
                            <img
                                src="/images/Home/logo2.png"
                                alt="Logo1"
                                className="img-center"
                                width="25%"
                                style={{
                                    marginTop: "12%",
                                }}
                            />
                        </div>
                        <Texto>
                            <h1>Lorem ipsum.</h1>
                        </Texto>
                        <Texto>
                            <p1>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p1>
                        </Texto>
                    </div>
                    <div class="rectangle"
                        style={{
                            textAlign: "center",
                            justifyContent: "center",
                            alignContent: "center",
                            zIndex: "2"
                        }}>
                        <div style={{ alignContent: "center", }} class="small_logo">
                            <img
                                src="/images/Home/logo3.png"
                                alt="Logo1"
                                className="img-center"
                                width="25%"
                                style={{
                                    marginTop: "12%",
                                }}
                            />
                        </div>
                        <Texto>
                            <h1>Lorem ipsum.</h1>
                        </Texto>
                        <Texto>
                            <p1>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p1>
                        </Texto>
                    </div>
                    <div class="rectangle"
                        style={{
                            textAlign: "center",
                            justifyContent: "center",
                            alignContent: "center",
                            zIndex: "2"
                        }}>
                        <div style={{ alignContent: "center", }} class="small_logo">
                            <img
                                src="/images/Home/logo4.png"
                                alt="Logo1"
                                className="img-center"
                                width="25%"
                                style={{
                                    marginTop: "12%",
                                }}
                            />
                        </div>
                        <Texto>
                            <h1>Lorem ipsum.</h1>
                        </Texto>
                        <Texto>
                            <p1>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p1>
                        </Texto>
                    </div>
                </div> */}

            </div>
            <div style={{
                display: "grid",
                position: "relative",
                overflow: "hidden",
                height: "130vh", // Initial height
            }}>
                <div
                    style={{
                        position: "absolute",
                        top: "0",
                        left: "0",
                        backgroundImage: "url(/images/Home/background3.jpg)",
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "cover",
                        opacity: 0.5,
                        backgroundPosition: "center",
                        height: "100%", // 100% height to cover the entire div
                        width: "100%",
                        zIndex: "0",
                    }}
                ></div>
                <div style={{
                    marginTop: "15%",
                    marginLeft: "8%",
                    width: "50%"
                }}>
                    <div style={{ marginTop: "4%", marginLeft: "8%", }}>
                        <Texto>
                            <hr />
                            <h2>Concierge 360</h2>
                            <hr2 />
                        </Texto>
                    </div>
                    <div style={{ marginTop: "-3%", marginLeft: "8%", }}>
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
                <div style={{
                    textAlign: "right",
                    justifyContent: "right",
                    alignContent: "right",
                    zIndex: 3,
                    marginTop: "-31%",
                    marginRight: "5%"
                }}>
                    <img
                        src="/images/Home/quarto.png"
                        className="img-room"
                        width="25%"
                        style={{}}
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