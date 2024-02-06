import Center from "src/components/Center";

export default function Header(){
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
                                <li className="opcao_header"><a href="/compradores">Compradores</a></li>
                                <li className="opcao_header"><a href="/vendas">Vendas</a></li>
                                <li className="opcao_header"><a href="/sobre_nos">Sobre nós</a></li>
                                <li className="opcao_header"><a href="/Contatos">Portifólio</a></li>
                                <li className="opcao_header"><a href="/idioma">Idioma</a></li>
                            </ul>
                        </div>
                    </div>
                </header>
            </Center>
        </div>
    )
}