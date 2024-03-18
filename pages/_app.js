import { LanguageProvider } from 'src/components/language';

import Head from "next/head"
import Header from "src/components/Header.jsx"
import Home from "pages/index.jsx"

import "src/styles/pages/index.css"
import "src/styles/pages/imoveis.css"
import "src/styles/pages/clientes.css"
import "src/styles/pages/sobre_nos.css"

import "src/styles/components/texto.css"
import "src/styles/components/header.css"
import "src/styles/components/footer.css"
import "src/styles/components/carousel_imoveis.css"
import "src/styles/components/carousel_depoimentos.css"

import "src/styles/global.css"


export default function App({ Component, pageProps }){

    return (
        <LanguageProvider>
            <Head>
                <title>Bossa Rio Real State</title>

                {/*SEO(search engine otimization)*/}
                <meta name="description" content="" />{/*Descrição para o site*/}
                <meta name="keywords" content="" />{/*Palavras chave separadas por vírgulas*/}
                <meta name="author" content="FGV Jr." />{/*Autor do site*/}

                {/*SMO(social media otimization)*/}
                <meta property="og:title" content="" />
                <meta property="og:site_name" content="" />
                <meta property="og:description" content="" />
                <meta property="og:url" content="" />
                <meta property="og:image" content="" />
                <meta property="og:image:type" content="image/" />
                <link rel="preconnect" href="https://fonts.googleapis.com"></link>
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin></link>
                <link href="https://fonts.googleapis.com/css2?family=Libre+Baskerville:ital,wght@0,400;0,700;1,400&display=swap" rel="stylesheet"></link>
                <link rel="preconnect" href="https://fonts.googleapis.com"></link>
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin></link>
                <link href="https://fonts.googleapis.com/css2?family=Inter:wght@100..900&family=Libre+Baskerville:wght@400;700&display=swap" rel="stylesheet"></link>
                <link rel="preconnect" href="https://fonts.googleapis.com"></link>
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin></link>
                <link href="https://fonts.googleapis.com/css2?family=Inter:wght@100..900&family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&family=Libre+Baskerville:wght@400;700&display=swap" rel="stylesheet"></link>
                </Head>
            <Component {...pageProps} />
        </LanguageProvider>
    )
}