import Header from "src/components/Header"
import Footer from "src/components/Footer"
import Center from "src/components/Center"
import Texto from "src/components/Texto";

export default function clientes() {

    return (
        <div className="clientes">
            <Header />
            <div style={{
                position: "relative",
                overflow: "hidden",
                height: "140vh", // Initial height
                alignContent: "center",
                }}>
                <div
                    style={{
                    position: "absolute",
                    backgroundImage: "url(/images/clientes/background.jpg)",
                    
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    opacity:0.7,
                    backgroundPosition: "center",
                    height: "100%", // 100% height to cover the entire div
                    width: "100%",
                    zIndex: "0",
                    }}
                ></div>
                <div style={{marginTop:"10%", marginLeft:"10%",}}>
                        <Texto>
                            <hr/>
                            <h2>CLIENTES</h2>    
                            <hr2/>
                            <p>Conheça as impressões de quem teve experiências com a Bossa Rio Real Estate.</p>                 
                        </Texto>
                </div>
                <div style={{ marginLeft:"10%",}}>
                    <Texto>
                        <h2>Depoimentos de<br></br>Clientes anteriores:</h2>
                    </Texto>
                </div>
                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(2, 1fr)",
                        marginTop:"50px",
                        marginLeft:"150px"
                }}>
                    <div style={{position:"relative"}}>
                        <div class="rectangle_clients"
                            style={{
                                color:"white",
                                textAlign: "center",
                                justifyContent: "center",
                                alignContent: "center",
                                zIndex: "2",
                                overflow:"hidden"}}>
                            <Texto>
                                <p1>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." - Lorem</p1>
                            </Texto>
                        </div>
                        <div style={{ borderRadius: '20px', display: "block", zIndex: "3", }}>
                            <img    
                                src="/images/clientes/perfil.jpg"
                                className="img-room"
                                width="25%"
                                style={{ borderRadius: '20px', display: "block", zIndex: "3", }}
                            />
                        </div>
                    </div>

                    <div style={{position:"relative"}}>
                        <div class="rectangle_clients"
                            style={{
                                color:"white",
                                textAlign: "center",
                                justifyContent: "center",
                                alignContent: "center",
                                zIndex: "2",
                                overflow:"hidden"}}>
                            <Texto>
                                <p1>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." - Lorem</p1>
                            </Texto>
                        </div>
                        <div style={{ borderRadius: '20px', display: "block", zIndex: "3", }}>
                            <img    
                                src="/images/clientes/perfil.jpg"
                                className="img-room"
                                width="25%"
                                style={{ borderRadius: '20px', display: "block", zIndex: "3", }}
                            />
                        </div>
                    </div>
                </div>
                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(2, 1fr)",
                        marginTop:"50px",
                        marginLeft:"150px"
                }}>
                    <div style={{position:"relative"}}>
                        <div class="rectangle_clients"
                            style={{
                                color:"white",
                                textAlign: "center",
                                justifyContent: "center",
                                alignContent: "center",
                                zIndex: "2",
                                overflow:"hidden"}}>
                            <Texto>
                                <p1>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." - Lorem</p1>
                            </Texto>
                        </div>
                        <div style={{ borderRadius: '20px', display: "block", zIndex: "3", }}>
                            <img    
                                src="/images/clientes/perfil.jpg"
                                className="img-room"
                                width="25%"
                                style={{ borderRadius: '20px', display: "block", zIndex: "3", }}
                            />
                        </div>
                    </div>

                    <div style={{position:"relative"}}>
                        <div class="rectangle_clients"
                            style={{
                                color:"white",
                                textAlign: "center",
                                justifyContent: "center",
                                alignContent: "center",
                                zIndex: "2",
                                overflow:"hidden"}}>
                            <Texto>
                                <p1>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." - Lorem</p1>
                            </Texto>
                        </div>
                        <div style={{ borderRadius: '20px', display: "block", zIndex: "3", }}>
                            <img    
                                src="/images/clientes/perfil.jpg"
                                className="img-room"
                                width="25%"
                                style={{ borderRadius: '20px', display: "block", zIndex: "3", }}
                            />
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}