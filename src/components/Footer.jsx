import Texto from "src/components/Texto"

import { UseLanguage } from 'src/components/language';

const textos_footer = [
    ["Your Modern Office Space"," for more productibility","Vendas","Imóveis","Clientes","Veja também","Sobre Nós","Contatos"],
    ["Your Modern Office Space"," for more productibility","Sales","Real Estate","Clients","See also","About Us","Contacts",]
]

export default function Footer() {
    const { currentLanguage } = UseLanguage();

    return (
        <footer id="footer">
            <div className="footer_esquerda">
                <img
                    src="/images/logo.png"
                    alt="Logo Bossa rio"
                    className="logo_footer"
                />
                <Texto>
                    <p>{textos_footer[currentLanguage][0]}<br></br>{textos_footer[currentLanguage][1]}</p>
                </Texto>
            </div>

            <div className="footer_direita">
                <div>
                    <Texto>
                        <h4>{textos_footer[currentLanguage][2]}</h4>
                        <p4><a href="/imoveis">{textos_footer[currentLanguage][3]}</a></p4>
                        <p4><a href="/clientes"></a>{textos_footer[currentLanguage][4]}</p4>
                    </Texto>
                </div>
                <div>
                    <Texto>
                        <h4>{textos_footer[currentLanguage][5]}</h4>
                        <p4><a href="/sobre_nos">{textos_footer[currentLanguage][6]}</a></p4>
                    </Texto>
                </div>
                <div>
                    <Texto>
                        <h4>{textos_footer[currentLanguage][7]}</h4>
                    </Texto>
                    <div className="container_contatos">
                        <a href="https://wa.me/5521971878889">
                            <img
                                src="/images/footer/whatsapp.png"
                                alt="whatsapp"
                                className="logo_contato"
                            />
                        </a>
                        <a href="https://www.instagram.com/bossariorealestate">
                            <img
                                src="/images/footer/instagram.png"
                                alt="instagram"
                                className="logo_contato"
                            />
                        </a>
                        <a href="mailto:bossario@plantelturismo.com.br">
                            <img
                                src="/images/footer/email.png"
                                alt="email"
                                className="logo_contato"
                            />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    )
}