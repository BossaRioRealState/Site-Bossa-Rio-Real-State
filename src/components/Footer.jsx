import Texto from "src/components/Texto"
import Link from 'next/link';

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
                <div style={{display:"flex", gap:"60px"}}>
                    <div>
                        <Texto>
                            <h4>{textos_footer[currentLanguage][2]}</h4>
                            <p4><Link href="/imoveis">{textos_footer[currentLanguage][3]}</Link></p4>
                            <p4><Link href="/clientes"></Link>{textos_footer[currentLanguage][4]}</p4>
                        </Texto>
                    </div>
                    <div>
                        <Texto>
                            <h4>{textos_footer[currentLanguage][5]}</h4>
                            <p4><Link href="/sobre_nos">{textos_footer[currentLanguage][6]}</Link></p4>
                        </Texto>
                    </div>
                </div>
                <div>
                    <Texto>
                        <h4>{textos_footer[currentLanguage][7]}</h4>
                    </Texto>
                    <div className="container_contatos">
                        <Link href="https://wa.me/5521971878889">
                            <img
                                src="/images/footer/whatsapp.png"
                                alt="whatsapp"
                                className="logo_contato"
                            />
                        </Link>
                        <Link href="https://www.instagram.com/bossariorealestate">
                            <img
                                src="/images/footer/instagram.png"
                                alt="instagram"
                                className="logo_contato"
                            />
                        </Link>
                        <Link href="mailto:bossario@plantelturismo.com.br">
                            <img
                                src="/images/footer/email.png"
                                alt="email"
                                className="logo_contato"
                            />
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}