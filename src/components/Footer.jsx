import Center from "src/components/Center"
import Texto from "src/components/Texto"


export default function Footer() {
    return (
        <div className="Footer" style={{display:"grid"}} id="footer">
            <Center>
                <footer>
                    <div style={{display:"grid",gridTemplateColumns: "repeat(2, 1fr)"}}>
                        <div className="footer_esquerda" style={{marginTop:"-8%"}}>
                            <div>
                                <div>
                                    <img
                                        src="/images/logo.png"
                                        alt="Logo Bossa rio"
                                        className="img-center"
                                        height="100px"
                                        style={{ marginTop: '-5%'}}
                                    />
                                </div>
                                <div style={{marginTop:"-15%",marginLeft:"30%"}}>
                                    <Texto>
                                        <p>Your Modern Office Space<br></br> for more productibility</p>
                                    </Texto>
                                </div>
                            </div>
                        </div>

                        <div className="footer_direita" style={{display:"grid",gridTemplateColumns: "repeat(3, 1fr)", marginTop:"-13%", marginLeft:"15%"}}>
                            <Texto>
                                <h4>Services</h4>
                                <p4><a href="/">Booking</a></p4>
                                <p4><a href="/">Selling</a></p4>
                            </Texto>
                            <Texto>
                                <h4>About</h4>
                                <p4><a href="/sobre_nos">Our Story</a></p4>
                                <p4><a href="/">Blog</a></p4>
                            </Texto>
                            <Texto>
                                <h4>Follow us</h4>
                                <div style={{display:"grid",gridTemplateColumns: "repeat(3, 1fr)",}}>
                                    <a href="/"><img
                                    src="/images/footer/linkedin.png"
                                    alt="linkedin"
                                    className="img-center"
                                    width="50%"
                                    style={{
                                        }}
                                    /></a>
                                    <a href="/"><img
                                    src="/images/footer/facebook.png"
                                    alt="facebook"
                                    className="img-center"
                                    width="50%"
                                    style={{
                                        }}
                                    /></a>
                                    <a href="/"><img
                                    src="/images/footer/twitter.png"
                                    alt="twitter"
                                    className="img-center"
                                    width="50%"
                                    style={{
                                        }}
                                    /></a>
                                </div>
                            </Texto>
                        </div>
                    </div>
                </footer>
            </Center>
        </div>
    )
}