import { useState } from "react";
import {useLanguage} from 'src/components/language';

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
    
    const { currentLanguage, MudarIdiomaPort, MudarIdiomaEng } = useLanguage();

    return (
        <header className="header">
            <ul>
                <li><a href="/">{textos_header[currentLanguage][0]}</a></li>
                <li><a href="/imoveis">{textos_header[currentLanguage][1]}</a></li>
                <li><a href="/clientes">{textos_header[currentLanguage][2]}</a></li>
                <li><a href="/sobre_nos">{textos_header[currentLanguage][3]}</a></li>
                <li><a href="#footer">{textos_header[currentLanguage][4]}</a></li>

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