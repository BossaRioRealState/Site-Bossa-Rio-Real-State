import Header from "src/components/Header"
import Center from "src/components/Center"
import Backgroundimage from "src/components/Backgroundimage"

export default function Home() {

    return (
        <div className="Home">
            <Header />
            <div className="Start">
                

                <Backgroundimage size =  "1254px" imageUrl={"/images/Home/background1.jpg"}>
                
                </Backgroundimage>
                <Center>
                    
                </Center>
            </div>

            <div className="OurWork">
                <Backgroundimage size =  "1254px" imageUrl={"/images/Home/background2.jpg"}>
                    <p></p>
                </Backgroundimage>
            </div>
        </div>

        
    )
}