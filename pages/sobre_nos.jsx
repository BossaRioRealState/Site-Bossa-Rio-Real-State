import Header from "src/components/Header"
import Footer from "src/components/Footer"
import Texto from "src/components/Texto";

export default function sobre_nos() {

    return (
        <div>
            <Header />
            <div className="sobre_nos">
                <div className="background_sobre_nos"></div>
                <div className="titulo">
                    <Texto>
                        <h2>SOBRE</h2>
                        <h2 style={{ marginLeft: "35%" }}>NÓS</h2>
                    </Texto>
                </div>
                <div className="texto_quem_somos">
                    
                    <h2>QUEM SOMOS?</h2>

                    <p4>Bossa Rio Real Estate chega ao mercado com o propósito de auxiliar você que deseja comprar ou vender um imóvel de luxo ou de alto padrão. Conte com a consultoria especializada de uma empresa que agrega o que há de melhor disponível no mercado imobiliário para sua segurança e conforto.</p4>
                    <p4>Com o apoio da Plantel Turismo, uma empresa consolidada e reconhecida há mais de 40 anos no mercado de turismo de luxo, chegamos para ocupar uma lacuna muito requisitada neste nicho</p4>
                    <p4>Através dos nossos contatos, curadoria de portfólio e know how em atendimento personalizado, agregamos um novo conceito para um público exigente e sofisticado.</p4>
                   
                </div>


                <div className="container_perfils">
                    <div class="perfil_socias">
                        <img
                            src="/images/sobre_nos/Aliny.jpg"
                            className="img_perfil"
                        />
                        <div class="rectangle_sobre_nos">
                            <Texto>
                                <h1>Aliny Manzieri</h1>
                            </Texto>
                            <p>Formada em comunicação, com mba em gestão empresarial pela FGV.</p>
                            <p>Experiência ampla na área comercial e em bancos. Atuando desde financiamento habitacional, aporte, até compra e venda de imóveis para fundo imobiliário, inclusive negociações pela oportunitty. Sócia da imobiliária Bossa Rio Real Estate.</p>
                        </div>
                    </div>
                    <div class="perfil_socias">
                        <img
                            src="/images/sobre_nos/Flavia.jpg"
                            className="img_perfil"
                        />
                        <div class="rectangle_sobre_nos">
                            <Texto>
                                <h1>Flávia Baldoíno Costa</h1>
                            </Texto>
                            <p>Formada em Direito com especialização em Gestão e Direito Empresarial pela FGV.</p>
                            <p> Possui ampla experiência em Direito Imobiliário, atuando também como sócia em consultoria imobiliária da Bossa Rio Real Estate.</p>
                        </div>
                    </div>
                    <div class="perfil_socias">
                        <img
                            src="/images/sobre_nos/Isis.jpg"
                            className="img_perfil"
                        />
                        <div class="rectangle_sobre_nos">
                            <Texto>
                                <h1>Isis Grossi</h1>
                            </Texto>
                            <p>Atriz, empreendedora e concierge lifestyle a frente da agência boutique Rio de Janeiro Feelings, realizando gerenciamento de eventos de negócios no mercado de luxo e facilidades em viagens de luxo privadas.</p>
                            <p>A compra e venda de imóveis, comum entre os clientes de turismo, a posicionaram no mercado imobiliário, buscando soluções criativas e fora da curva para o público que se apaixona pelo Brasil e decide ficar. Sócia de Bossa Rio Real Estate.</p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}