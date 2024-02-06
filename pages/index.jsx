import Layout from "src/components/Layout"
import Center from "src/components/Center"
import Backgroundimage from "src/components/Backgroundimage"

export default function Home() {

    return (
        <div className="Start">
            
                <Center>

                </Center>

                <Backgroundimage size =  "1254px" imageUrl={"/images/Home/background1.jpg"}>
                    <p></p>
                </Backgroundimage>

                <Backgroundimage size =  "1254px" imageUrl={"/images/Home/background2.jpg"}>
                    <p></p>
                </Backgroundimage>
            
        </div>

        
    )
}