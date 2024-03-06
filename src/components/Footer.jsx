import Texto from "src/components/Texto"

export default function Footer() {
    return (
        <footer id="footer">
            <div className="footer_esquerda">
                <img
                    src="/images/logo.png"
                    alt="Logo Bossa rio"
                    className="logo_footer"
                />
                <Texto>
                    <p>Your Modern Office Space<br></br> for more productibility</p>
                </Texto>
            </div>

            <div className="footer_direita">
                <div>
                    <Texto>
                        <h4>Vendas</h4>
                        <p4><a href="/imoveis">Imóveis</a></p4>
                        <p4><a href="/clientes">Clientes</a></p4>
                    </Texto>
                </div>
                <div>
                    <Texto>
                        <h4>Veja também</h4>
                        <p4><a href="/sobre_nos">Sobre Nós</a></p4>
                    </Texto>
                </div>
                <div>
                    <Texto>
                        <h4>Contatos</h4>
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