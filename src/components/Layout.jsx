import Header from "src/components/Header"
import Footer from "src/components/Footer"

export default function Layout(props) {
    return (
        <div className="Layout">
            <Header />

            {props.children}

            <Footer />
        </div>
    )
}