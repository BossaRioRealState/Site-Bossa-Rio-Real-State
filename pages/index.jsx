import Header from "src/components/Header"
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
                height: "1254px", // Initial height
                width: "100%",
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
                    backgroundImage: "url(/images/Home/background1.jpg)",
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
                        height="250px"
                        style={{ marginTop: '200px'}}
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
                height: "800px", // Initial height
                width: "100%",
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
                        display: "flex",
                        justifyContent: "center",
                        alignContent: "center",
                        zIndex: "2"
                }}>
                    <Center>
                    <div className="texto_porque_trabalhar">
                    <img
                        src="/images/Home/interior.jpg"
                        alt="Logo Bossa rio"
                        className="img-center"
                        height="350px"
                        style={{
                            borderRadius: "15px",
                            marginTop:'225px',
                            marginRight: '600px'}}
                    />
                    <Texto>
                        <h2>Duas décadas de excelência</h2>
                        <hr/>
                        <p>Com um histórico de mais de 20 anos, nossa marcenaria é sinônimo de excelência e qualidade. Trabalhamos com uma ampla variedade de materiais, aplicando nosso onhecimento para transformar madeira em peças funcionais e esteticamente atraentes.</p>

                        <p>Trabalhamos com todos os tipos de sinteco, tanto o tradicional quanto o de bona, além de poliuretano, polimentos de pedras e muito mais, servindo a sua necessidade.</p>

                        <p>Ao longo dos anos, conquistamos a confiança de muitos clientes e fizemos partes de muitos projetos. Independente de sua ideia, sempre teremos uma solução diferenciada para você.</p>
                        
                    </Texto>
                    </div>

                    </Center>
                </div>
            </div>
        </div>

        
    )
}