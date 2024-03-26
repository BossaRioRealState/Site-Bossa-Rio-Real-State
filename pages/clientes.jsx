import Header from "src/components/Header"
import Footer from "src/components/Footer"
import Texto from "src/components/Texto";

import CarouselDepoimentos from 'src/components/carousel_depoimentos';

import {UseLanguage} from 'src/components/language';

const textos_clientes = [
    ["CLIENTES",
    "Conheça as impressões de quem teve experiências com a Bossa Rio Real Estate." ,
    "Depoimentos de"," Clientes anteriores:"],
    ["CUSTOMERS",
    "Get to know the impressions of those who had experiences with Bossa Rio Real Estate.",
    "Testimonials from", " previous Customers:",]
]

export default function clientes() {
    const { currentLanguage } = UseLanguage();

    return (
        <div>
            <Header />
            <div className="clientes">
                <div className="background_clientes"></div>
                <div className="titulo_clientes">
                        <Texto>
                            <hr/>
                            <h2>{textos_clientes[currentLanguage][0]}</h2>    
                            <hr2/>
                            <p>{textos_clientes[currentLanguage][1]}</p>                 
                        </Texto>
                </div>
                <div className="titulo_depoimentos">
                    <Texto>
                        <h2>{textos_clientes[currentLanguage][2]}<br></br>{textos_clientes[currentLanguage][3]}</h2>
                    </Texto>
                </div>
                <CarouselDepoimentos slides={[]}/>
            </div>
            <Footer />
        </div>
    )
}