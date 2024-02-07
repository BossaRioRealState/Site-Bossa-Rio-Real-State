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
                <div>
                    <Texto>
                        <p>Teste</p>
                    </Texto>
                </div>
                <div
                    style={{
                        textAlign: "center",
                        display: "grid",
                        gridTemplateColumns: "repeat(4, 1fr)",
                        justifyContent: "center",
                        alignContent: "center",
                        zIndex: "2",
                        gridGap:"25px",
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
        </div>
    )
}