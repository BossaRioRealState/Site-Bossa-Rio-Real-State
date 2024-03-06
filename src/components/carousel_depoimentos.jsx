import React, { useState } from 'react';

const CarouselDepoimentos = (props) => {
    const [PaginaAtual, setPaginaAtual] = useState(0);

    const PassarPagina = () => {
        if (PaginaAtual === props.slides.length - 1) {
            setPaginaAtual(0);
        } else {
            setPaginaAtual(PaginaAtual + 1);
        }
    }

    const VoltarPagina = () => {
        if (PaginaAtual === 0) {
            setPaginaAtual(props.slides.length - 1);
        } else {
            setPaginaAtual(PaginaAtual - 1);
        }
    }

    return (
        <div style={{ display: "flex" }}>
            <button className='botao_voltar_pagina' onClick={VoltarPagina}>
                <img src="images/right-arrow.png" />
            </button>

            <div className="container_depoimentos">
                <div className="depoimento">
                    <img
                        src="/images/clientes/perfil.jpg"
                        className="img_depoimento"
                    />

                    <div className="retangulo_depoimento">
                        <p1>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." - Lorem</p1>
                    </div>
                </div>

                <div className="depoimento">

                    <img
                        src="/images/clientes/perfil.jpg"
                        className="img_depoimento"
                    />

                    <div className="retangulo_depoimento">
                        <p1>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." - Lorem</p1>
                    </div>
                </div>


                <div className="depoimento">

                    <img
                        src="/images/clientes/perfil.jpg"
                        className="img_depoimento"
                    />

                    <div className="retangulo_depoimento">
                        <p1>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." - Lorem</p1>
                    </div>
                </div>

                <div className="depoimento">
                    <img
                        src="/images/clientes/perfil.jpg"
                        className="img_depoimento"
                    />

                    <div className="retangulo_depoimento">
                        <p1>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." - Lorem</p1>
                    </div>
                </div>
            </div>

            <button className='botao_passar_pagina' onClick={PassarPagina}>
                <img src="images/right-arrow.png" />
            </button>
        </div>
    )
}

export default CarouselDepoimentos;