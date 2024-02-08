import Header from "src/components/Header"
import Footer from "src/components/Footer"
import Center from "src/components/Center"
import Texto from "src/components/Texto";
import Backgroundimage from "src/components/Backgroundimage"

export default function sobre_nos() {

    return (
        <div className="sobre_nos">
            <Header />
            <div style={{
                position: "relative",
                backgroundColor: "rgba(255, 220, 100, 0.1)",
                overflow: "hidden",
                height: "250vh", // Initial height
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
                    opacity:0.4,
                    backgroundPosition: "center",
                    height: "100%", // 100% height to cover the entire div
                    width: "100%",
                    zIndex: "1",
                    }}
                ></div>
                <div style={{marginTop:"10%", marginLeft:"10%",}}>
                        <Texto>
                            <h2>SOBRE</h2>
                            <h2_t>NÓS</h2_t>                            
                        </Texto>
                </div>
                <div
                    style={{
                        textAlign: "center",
                        display: "grid",
                        gridTemplateColumns: "repeat(2, 1fr)",
                        justifyContent: "center",
                        zIndex: "2",
                        marginTop:"130px",
                        marginLeft:"6%"
                }}>
                    <div style={{
                        textAlign: "center",
                        alignContent: "center",
                        zIndex: "2", width:"80%"}}>
                        <Texto>
                            <h2>QUEM SOMOS?</h2>
                            <p>Bossa Rio Real Estate chega ao mercado com o propósito de auxiliar você que deseja comprar ou vender um imóvel de luxo ou de alto padrão. Conte com a consultoria especializada de uma empresa que agrega o que há de melhor disponível no mercado imobiliário para sua segurança e conforto.</p>
                            <p>Com o apoio da Plantel Turismo, uma empresa consolidada e reconhecida há mais de 40 anos no mercado de turismo de luxo, chegamos para ocupar uma lacuna muito requisitada neste nicho</p>
                            <p>Através dos nossos contatos, curadoria de portfólio e know how em atendimento personalizado, agregamos um novo conceito para um público exigente e sofisticado.</p>
                        </Texto>
                    </div>
                    <div style={{
                        textAlign: "center",
                        alignContent: "center",
                        zIndex: "2", width:"80%"}}>
                        <Texto>
                            <h2>NOSSA HISTÓRIA</h2>
                            <p>Visando atender as solicitações de referências no nicho imobiliário, de compra e venda de propriedades exclusivas, nasce a Bossa Rio Real Estate.</p>
                            <p>Chegamos para quebrar paradigmas no mercado imobiliário atendendo de forma personalizada, exclusiva e cuidando com excelência dos bens sonhos de cada um, tendo como espelho a mesma dedicação, personalização e curadoria cuidadosa e especializada da agência de turismo que nos abraça e tem mais de 4 décadas no mercado.</p>
                        </Texto>
                    </div>

                    
                </div>
                <div
                    style={{
                        textAlign: "center",
                        display: "grid",
                        gridTemplateColumns: "repeat(3, 350px)",
                        justifyContent: "center",
                        alignItems:"center",
                        zIndex: "2",
                        marginTop:"130px",
                }}>
                    <div style={{width:"300px"}}>
                        <img
                                        src="/images/Home/quarto.png"
                                        className="img-room"
                                        width="100%"
                                        style={{}}
                                    />
                        <Texto>
                            <h1>Lorem ipsum.</h1>
                        </Texto>
                        <Texto>
                            <p1>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p1>
                        </Texto>
                    </div>
                    <div style={{width:"300px"}}>
                        <img
                                        src="/images/Home/quarto.png"
                                        className="img-room"
                                        width="100%"
                                        style={{}}
                                    />
                        <Texto>
                            <h1>Lorem ipsum.</h1>
                        </Texto>
                        <Texto>
                            <p1>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p1>
                        </Texto>
                    </div>
                    <div style={{width:"300px"}}>
                        <img
                                        src="/images/Home/quarto.png"
                                        className="img-room"
                                        width="100%"
                                        style={{}}
                                    />
                        
                        <Texto>
                            <h1>Lorem ipsum.</h1>
                        </Texto>
                        <Texto>
                            <p1>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p1>
                        </Texto>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}