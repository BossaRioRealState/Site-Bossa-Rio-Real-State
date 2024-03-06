import Header from "src/components/Header"
import Footer from "src/components/Footer"
import Texto from "src/components/Texto";

import CarouselDepoimentos from 'src/components/carousel_depoimentos';

export default function clientes() {

    return (
        <div>
            <Header />
            <div className="clientes">
                <div className="background_clientes"></div>
                <div className="titulo_clientes">
                        <Texto>
                            <hr/>
                            <h2>CLIENTES</h2>    
                            <hr2/>
                            <p>Conheça as impressões de quem teve experiências com a Bossa Rio Real Estate.</p>                 
                        </Texto>
                </div>
                <div className="titulo_depoimentos">
                    <Texto>
                        <h2>Depoimentos de<br></br>Clientes anteriores:</h2>
                    </Texto>
                </div>
                <CarouselDepoimentos slides={[]}/>
            </div>
            <Footer />
        </div>
    )
}