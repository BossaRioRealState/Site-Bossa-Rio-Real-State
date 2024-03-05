import Header from "src/components/Header"
import Footer from "src/components/Footer"
import Center from "src/components/Center"
import Texto from "src/components/Texto";

export default function sobre_nos() {

    return (
        <div className="sobre_nos">
            <Header />
            <div style={{
                position: "relative",
                backgroundColor: "rgba(255, 220, 100, 0.1)",
                overflow: "hidden",
                height: "250vh", // Initial height
                textAlign: "center",
                justifyContent: "center",
                alignContent: "center",
            }}>
                <div className="background_sobre_nos"></div>
                <div style={{ display:"flex",marginTop: "10%", marginLeft: "10%", }}>
                    <Texto>
                        <h2>SOBRE</h2>
                        <h2_t>NÓS</h2_t>
                        {/* <img
                            src="/images/sobre_nos/lines.png"
                            className="img-room"
                            width="250px"
                            marginTop="200px"
                        /> */}
                    </Texto>
                </div>
                <div
                    style={{
                        textAlign: "center",
                        display: "grid",
                        gridTemplateColumns: "repeat(2, 1fr)",
                        justifyContent: "center",
                        zIndex: "2",
                        marginTop: "130px",
                        marginLeft: "6%"
                    }}>
                    <div style={{
                        textAlign: "left",
                        alignContent: "center",
                        zIndex: "2", width: "80%"
                    }}>
                        <Texto>
                            <div>
                            <h2>QUEM SOMOS?</h2>
                            
                            </div>
                            <p4>Bossa Rio Real Estate chega ao mercado com o propósito de auxiliar você que deseja comprar ou vender um imóvel de luxo ou de alto padrão. Conte com a consultoria especializada de uma empresa que agrega o que há de melhor disponível no mercado imobiliário para sua segurança e conforto.</p4>
                            <p4>Com o apoio da Plantel Turismo, uma empresa consolidada e reconhecida há mais de 40 anos no mercado de turismo de luxo, chegamos para ocupar uma lacuna muito requisitada neste nicho</p4>
                            <p4>Através dos nossos contatos, curadoria de portfólio e know how em atendimento personalizado, agregamos um novo conceito para um público exigente e sofisticado.</p4>
                        </Texto>
                    </div>
                    {/* <div style={{
                        textAlign: "center",
                        alignContent: "center",
                        zIndex: "2", width:"80%"}}>
                        <Texto>
                            <h2>NOSSA HISTÓRIA</h2>
                            <p4>Visando atender as solicitações de referências no nicho imobiliário, de compra e venda de propriedades exclusivas, nasce a Bossa Rio Real Estate.</p4>
                            <p4>Chegamos para quebrar paradigmas no mercado imobiliário atendendo de forma personalizada, exclusiva e cuidando com excelência dos bens sonhos de cada um, tendo como espelho a mesma dedicação, personalização e curadoria cuidadosa e especializada da agência de turismo que nos abraça e tem mais de 4 décadas no mercado.</p4>
                        </Texto>
                    </div> */}

                </div>
                <div
                    style={{
                        width: "100%",
                        backgroundColor: "white",
                        textAlign: "center",
                        display: "flex",
                        gridTemplateColumns: "repeat(3, 3fr)",
                        alignItems: "center",
                        gridGap: "70px",
                        justifyContent: "center",
                        alignItems: "center",
                        zIndex: "4",
                        marginTop: "100px",
                    }}>
                    <div class="perfil_socias">
                        <img
                            src="/images/sobre_nos/Aliny.jpg"
                            className="img-room"
                            width="250px"
                            style={{ borderRadius: "40px", border: '10px solid white', }}
                        />
                        <div class="rectangle_sobre_nos"
                            style={{
                                color: "white",
                                textAlign: "center",
                                justifyContent: "center",
                                alignContent: "center",
                                zIndex: "2"
                            }}>
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
                            className="img-room"
                            width="250px"
                            style={{ borderRadius: "40px", border: '10px solid white', }}
                        />
                        <div class="rectangle_sobre_nos"
                            style={{
                                color: "white",
                                textAlign: "center",
                                justifyContent: "center",
                                alignContent: "center",
                                zIndex: "2"
                            }}>
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
                            className="img-room"
                            width="250px"
                            style={{ borderRadius: "40px", border: '10px solid white', }}
                        />
                        <div class="rectangle_sobre_nos"
                            style={{
                                color: "white",
                                textAlign: "center",
                                justifyContent: "center",
                                alignContent: "center",
                                zIndex: "2"
                            }}>
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