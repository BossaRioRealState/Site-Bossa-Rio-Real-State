import Center from "src/components/Center"
import Texto from "src/components/Texto"


export default function Footer() {
    return (
        <div className="Footer" style={{ display: "grid" }} id="footer">
            <Center>
                <footer>
                    <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)" }}>
                        <div className="footer_esquerda" style={{ marginTop: "-8%" }}>
                            <div>
                                <div>
                                    <img
                                        src="/images/logo.png"
                                        alt="Logo Bossa rio"
                                        className="img-center"
                                        height="100px"
                                        style={{ marginTop: '-5%' }}
                                    />
                                </div>
                                <div style={{ marginTop: "-15%", marginLeft: "30%" }}>
                                    <Texto>
                                        <p>Your Modern Office Space<br></br> for more productibility</p>
                                    </Texto>
                                </div>
                            </div>
                        </div>

                        <div className="footer_direita" style={{ display: "grid", gridGap: "80px", gridTemplateColumns: "repeat(3, 1fr)", marginTop: "-13%", marginLeft: "15%" }}>
                            <div>
                                <Texto>
                                    <h4>Vendas</h4>
                                    <p4><a href="/imoveis">Imóveis</a></p4>
                                    <p4><a href="/clientes">Clientes</a></p4>
                                </Texto>
                            </div>
                            <div>
                                <Texto>
                                    <h4>Veja também</h4>
                                    <p4><a href="/sobre_nos">Sobre Nós</a></p4>
                                    {/* <p4><a href="/"></a></p4> */}
                                </Texto>
                            </div>
                            <div>
                                <Texto>
                                    <h4>Redes Sociais</h4>
                                    <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", }}>
                                        <a href="/"><img
                                            src="/images/footer/linkedin.png"
                                            alt="linkedin"
                                            className="img-center"
                                            width="70%"
                                            style={{
                                            }}
                                        /></a>
                                        <a href="https://www.instagram.com/bossariorealestate"><img
                                            src="/images/footer/instagram.png"
                                            alt="instagram"
                                            className="img-center"
                                            width="70%"
                                            style={{
                                            }}
                                        /></a>
                                        <a href="/"><img
                                            src="/images/footer/twitter.png"
                                            alt="twitter"
                                            className="img-center"
                                            width="70%"
                                            style={{
                                            }}
                                        /></a>
                                    </div>
                                </Texto>
                            </div>
                        </div>
                        <div style={{marginTop: "80px", display: "inline-block"}}>
                            <Texto>
                                <h4>Número:</h4>
                                <p4><a href="https://wa.me/5521971878889">+55 (21) 97187-8889</a></p4>
                            </Texto>
                        </div>
                    </div>
                </footer>
            </Center>
        </div>
    )
}