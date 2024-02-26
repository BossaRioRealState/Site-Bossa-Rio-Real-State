import Head from "next/head"

import "src/styles/pages/index.css"
import "src/styles/pages/imoveis.css"
import "src/styles/pages/clientes.css"
import "src/styles/pages/sobre_nos.css"

import "src/styles/components/texto.css"
import "src/styles/components/header.css"
import "src/styles/components/footer.css"
import "src/styles/components/carousel.css"

import "src/styles/global.css"

export default function App({ Component, pageProps }) {
    return (
        <>
            <Head>
                <title>Bossa Rio Real State</title>

                {/*SEO(search engine otimization)*/}
                <meta name="description" content="" />{/*Descrição para o site*/}
                <meta name="keywords" content=""/>{/*Palavras chave separadas por vírgulas*/}
                <meta name="author" content="FGV Jr." />{/*Autor do site*/}

                {/*SMO(social media otimization)*/}
                <meta property="og:title" content="" />
                <meta property="og:site_name" content="" />
                <meta property="og:description" content="" />
                <meta property="og:url" content="" />
                <meta property="og:image" content="" />
                <meta property="og:image:type" content="image/" />
            </Head>
            <Component {...pageProps} />
        </>
    )
}