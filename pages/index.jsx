import Header from "src/components/Header"
import Footer from "src/components/Footer"
import Center from "src/components/Center"
import Texto from "src/components/Texto";
import Backgroundimage from "src/components/Backgroundimage"

export default function Home() {

    return (
        <div className="Home">
            <Header />
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
                        height="30%"
                        style={{ marginTop: '60%'}}
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
                    top: "0",
                    right: "0",
                    bottom: "0",
                    left: "0",
                    backgroundImage: "url(/images/Home/background2.jpg)",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    opacity:0.6,
                    backgroundPosition: "center",
                    height: "100%", // 100% height to cover the entire div
                    width: "100%",
                    zIndex: "1",
                    }}
                ></div>
                <div
                    style={{
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
                        zIndex: "2"}}>
                        <img
                            src="/images/Home/interior.jpg"
                            alt="Logo Bossa rio"
                            className="img-center"
                            height="350px"
                            style={{
                                borderRadius: "15px",
                                marginTop:'100px',
                                marginRight: '-150px'}}
                        />
                    </div>
                    <div style={{
                        textAlign: "center",
                        justifyContent: "center",
                        alignContent: "center",
                        zIndex: "2"}}>
                        <Texto>
                            <h2>Porque trabalhar conosco</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>

                            <ul>
                            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</li>
                            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</li>
                            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</li>
                            </ul>
                        </Texto>
                    </div>

                    
                </div>
            </div>
            <div style={{
                position: "relative",
                overflow: "hidden",
                height: "110vh", // Initial height
                textAlign: "center",
                justifyContent: "center",
                alignContent: "center",
                }}>
                <div
                    style={{
                    position: "absolute",
                    top: "0",
                    right: "0",
                    bottom: "0",
                    left: "0",
                    backgroundImage: "url(/images/Home/background2.jpg)",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    opacity:0.6,
                    backgroundPosition: "center",
                    height: "100%", // 100% height to cover the entire div
                    width: "100%",
                    zIndex: "0",
                    }}
                ></div>

                <div style={{zIndex: "2",
                    width:"50%",
                    marginTop:"5%",
                    marginLeft:"5%"}}>
                    <div>
                        <Texto>
                            <p2>SERVIÇOS</p2>
                        </Texto>      
                    </div>
                    <div style={{marginTop:"-4%", marginLeft:"8%",}}>
                        <Texto>
                            <h2>O que temos a oferecer</h2>
                        </Texto>
                    </div>
                    <div style={{marginTop:"-4%", marginLeft:"8%",}}>
                        <Texto>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore etdolore magna aliqua.</p>
                        </Texto>
                    </div>
                </div>

                <div
                    style={{
                        textAlign: "center",
                        display:"flex",
                        gridTemplateColumns: "repeat(4, 1fr)",
                        justifyContent: "center",
                        alignContent: "center",
                        zIndex: "2",
                        gridGap:"25px",
                        marginTop:"-10%",
                }}>
                    <div class="rectangle"
                    style={{
                        color:"white",
                        textAlign: "center",
                        justifyContent: "center",
                        alignContent: "center",
                        zIndex: "2"}}>
                        <div style={{alignContent: "center",}} class="small_logo">
                            <img
                                src="/images/Home/logo1.png"
                                alt="Logo1"
                                className="img-center"
                                width="25%"
                                style={{
                                    marginTop: "12%",}}
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
                        zIndex: "2"}}>
                            <div style={{alignContent: "center",}} class="small_logo">
                            <img
                                src="/images/Home/logo2.png"
                                alt="Logo1"
                                className="img-center"
                                width="25%"
                                style={{
                                    marginTop: "12%",}}
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
                            zIndex: "2"}}>
                            <div style={{alignContent: "center",}} class="small_logo">
                                <img
                                    src="/images/Home/logo3.png"
                                    alt="Logo1"
                                    className="img-center"
                                    width="25%"
                                    style={{
                                        marginTop: "12%",}}
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
                        zIndex: "2"}}>
                            <div style={{alignContent: "center",}} class="small_logo">
                                <img
                                    src="/images/Home/logo4.png"
                                    alt="Logo1"
                                    className="img-center"
                                    width="25%"
                                    style={{
                                        marginTop: "12%",}}
                                />
                            </div>
                            <Texto>
                                <h1>Lorem ipsum.</h1>
                            </Texto>
                            <Texto>
                                <p1>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p1>
                            </Texto>
                    </div>
                </div>
                
            </div>
            <div style={{
                display:"grid",
                position: "relative",
                overflow: "hidden",
                height: "130vh", // Initial height
                }}>
                <div
                    style={{
                    position: "absolute",
                    top: "0",
                    left: "0",
                    backgroundImage: "url(/images/Home/background3.png)",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    opacity:1,
                    backgroundPosition: "center",
                    height: "100%", // 100% height to cover the entire div
                    width: "100%",
                    zIndex: "0",
                    }}
                ></div>
                <div style={{marginTop:"15%",
                            marginLeft:"8%",
                            width:"50%"}}>
                    <div style={{marginTop:"4%", marginLeft:"8%",}}>
                        <Texto>
                            <hr/>
                            <h2>Concierge 360</h2>
                            <hr2/>
                        </Texto>
                    </div>
                    <div style={{marginTop:"-3%", marginLeft:"8%",}}>
                        <Texto>
                            <p3>Além de buscar imóveis baseados nas suas necessidades, oferecemos uma assessoria completa e personalizada em todo o processo de compra, reforma e venda dos imóveis, auxiliando com:</p3>
                            <ul>
                            <li><p3>Arquitetura;</p3></li>
                            <li><p3>Design e Decoração;</p3></li>
                            <li><p3>Personal Shopper;</p3></li>
                            <li><p3>Personal Organizer;</p3></li>
                            <li><p3>Jurídico e burocrático.</p3></li>
                            </ul>
                        </Texto>
                    </div>
                    
                </div>
                <div style={{textAlign: "right",
                        justifyContent: "right",
                        alignContent: "right",
                        zIndex:3,
                        marginTop:"-31%",
                        marginRight:"5%"}}>
                        <img
                                        src="/images/Home/quarto.png"
                                        className="img-room"
                                        width="25%"
                                        style={{}}
                                    />
                </div>
                <div className="frase_disney">
                            
                </div>
                <div style={{marginTop:"-11%"}}>
                <Texto>
                    <h3>“Você pode sonhar, criar, desenhar e construir o lugar mais maravilhoso do mundo. Mas é necessário ter pessoas para transformar seu sonho em realidade.’’ - Walt Disney</h3>
                </Texto>
                </div>
            </div>
            <Footer />
        </div>
    )
}