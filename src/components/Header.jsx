import { useState } from "react";

export default function Header() {
    const [IdiomMenuActive, setIdiomMenuActive] = useState(false);

    const toggleIdiomMenu = () => {
        setIdiomMenuActive(!IdiomMenuActive);
    };

    return (
        <header className="header">
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/imoveis">Imóveis</a></li>
                <li><a href="/clientes">Clientes</a></li>
                <li><a href="/sobre_nos">Sobre nós</a></li>
                <li><a href="#footer">Contatos</a></li>

                <li onClick={toggleIdiomMenu}>
                    Idioma
                    <div className={`nav-idiom ${IdiomMenuActive ? 'active' : ''}`}>
                        <ul>
                            <li>
                                <a href="/">Português (PT-BR)</a>

                                <img
                                    src="/images/header/brasil_flag.png"
                                    className="img_flag"
                                />
                            </li>
                            <li>
                                <a href="/english/home">English (ENG)</a>

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