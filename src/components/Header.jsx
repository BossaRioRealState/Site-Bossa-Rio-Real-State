import { useState } from "react";
import {UseLanguage} from 'src/components/language';
import Link from 'next/link';

const textos_header = [
    //portugues
    ["Home", "Imóveis", "Clientes", "Sobre Nós", "Contatos", "Idioma"],
    ["Home", "Properties", "Clients", "About Us", "Contact", "Language"]
]

export default function Header() {
    const [IdiomMenuActive, setIdiomMenuActive] = useState(false);

    const toggleIdiomMenu = () => {
        setIdiomMenuActive(!IdiomMenuActive);
    };
    
    const { currentLanguage, MudarIdiomaPort, MudarIdiomaEng } = UseLanguage();

    return (
        <header className="header">
            <ul>
                <li><Link href="/">{textos_header[currentLanguage][0]}</Link></li>
                <li><Link href="/imoveis">{textos_header[currentLanguage][1]}</Link></li>
                <li><Link href="/clientes">{textos_header[currentLanguage][2]}</Link></li>
                <li><Link href="/sobre_nos">{textos_header[currentLanguage][3]}</Link></li>
                <li><Link href="#footer">{textos_header[currentLanguage][4]}</Link></li>

                <li onClick={toggleIdiomMenu}>
                    {textos_header[currentLanguage][5]}
                    <div className={`nav-idiom ${IdiomMenuActive ? 'active' : ''}`}>
                        <ul>
                            <li>
                                <a onClick={MudarIdiomaPort}>Português (PT-BR)</a>

                                <img
                                    src="/images/header/brasil_flag.png"
                                    className="img_flag"
                                />
                            </li>
                            <li>
                                <a onClick={MudarIdiomaEng}>English (ENG)</a>

                                <img
                                    src="/images/header/eua_flag.png"
                                    className="img_flag"
                                />
                            </li>
                        </ul>
                    </div>
                </li>
            </ul>
        </header >
    )
}