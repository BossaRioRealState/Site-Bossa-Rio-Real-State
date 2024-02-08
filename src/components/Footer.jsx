import Center from "src/components/Center"
import Texto from "src/components/Texto"


export default function Footer() {
    return (
        <div className="Footer" style={{display:"grid"}}>
            <Center>
                <footer>
                        <div className="footer_esquerda">
                            <div style={{display:"grid"}}>
                                <div>
                                    <img
                                        src="/images/logo.png"
                                        alt="Logo Bossa rio"
                                        className="img-center"
                                        height="100px"
                                        style={{ marginTop: '-5%'}}
                                    />
                                </div>
                                <div style={{marginTop:"-10%",marginLeft:"15%"}}>
                                    <Texto>
                                        <p>Your Modern Office Space<br></br> for more productibility</p>
                                    </Texto>
                                </div>
                            </div>
                        </div>

                        <div className="footer_direita" style={{top:0,left:"50%",}}>

                        </div>
                </footer>
            </Center>
        </div>
    )
}