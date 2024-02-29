import Center from "src/components/Center";
import { useState } from "react";

export default function Header() {
    const [IdiomMenuActive, setIdiomMenuActive] = useState(false);

    const toggleIdiomMenu = () => {
        setIdiomMenuActive(!IdiomMenuActive);
    };

    return (
        <div
            style={{
                position: "absolute",
                width: "100%",
                zIndex: 100,
            }}
        >
            <Center>
                <header
                    className="header"
                    style={{
                        color: "#045570",
                    }}
                >
                    <div className="opcoes_menu">
                        <div className="nav">
                            <ul>
                                <li className="opcao_header"><a href="/">Home</a></li>
                                <li className="opcao_header"><a href="/imoveis">Imóveis</a></li>
                                <li className="opcao_header"><a href="/clientes">Clientes</a></li>
                                {/* <li className="opcao_header"><a href="/vendas">Vendas</a></li> */}
                                <li className="opcao_header"><a href="/sobre_nos">Sobre nós</a></li>
                                <li className="opcao_header"><a href="#footer">Contatos</a></li>

                                <li className="opcao_header" onClick={toggleIdiomMenu}>Idioma
                                    <div className="dropdown">
                                        <div className={`nav-idiom ${IdiomMenuActive ? 'active' : ''}`}>
                                            <ul>
                                                <li><a href="/">Português (PT-BR)</a>
                                                    <img
                                                        src="/images/header/brasil_flag.png"
                                                        className="img-brasil"
                                                        width="60px"
                                                        style={{ display: "block", zIndex: "3", }}
                                                    />
                                                </li>
                                                <li><a href="/english/home">English (ENG)</a>
                                                    <img
                                                        src="/images/header/eua_flag.png"
                                                        className="img-brasil"
                                                        width="60px"
                                                        style={{ display: "block", zIndex: "3", }}
                                                    />
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </header >
            </Center >
        </div >
    )
}