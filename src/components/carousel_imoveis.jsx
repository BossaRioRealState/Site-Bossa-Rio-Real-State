import React, { useState } from 'react';

const CarouselImoveis = (props) => {
    const [IndexFotoAtual, setIndexFotoAtual] = useState(0);
    const [IndexImovelAtual, setIndexImovelAtual] = useState(0);

    const PassarFoto = () => {
        if (IndexFotoAtual === props.slides[IndexImovelAtual][0].length - 1) {
            setIndexFotoAtual(0);
        } else {
            setIndexFotoAtual(IndexFotoAtual + 1);
        }
    }

    const VoltarFoto = () => {
        if (IndexFotoAtual === 0) {
            setIndexFotoAtual(props.slides[IndexImovelAtual][0].length - 1);
        } else {
            setIndexFotoAtual(IndexFotoAtual - 1);
        }
    }

    const PassarImovel = () => {
        if (IndexImovelAtual === props.slides.length - 1) {
            setIndexImovelAtual(0);
        } else {
            setIndexImovelAtual(IndexImovelAtual + 1);
        }
        setIndexFotoAtual(0);
    }

    const VoltarImovel = () => {
        if (IndexImovelAtual === 0) {
            setIndexImovelAtual(props.slides.length - 1);
        } else {
            setIndexImovelAtual(IndexImovelAtual - 1);
        }
        setIndexFotoAtual(0);
    }

    return (
        <div className='carousel_container'>

            <button className='botao_voltar_imovel' onClick={VoltarImovel}>
                <img src="images/right-arrow.png" />
            </button>

            <div className="imovel">
                
                <div class="title">
                    <h2>{props.slides[IndexImovelAtual][1][0]}</h2>
                </div>

                <div class="grid_infos">

                    <div class="fotos_imovel">

                        <button className='botao_voltar_foto' onClick={VoltarFoto}>
                            <img src="images/right-arrow.png" />
                        </button>

                        {props.slides[IndexImovelAtual][0][IndexFotoAtual]}

                        <button className='botao_passar_foto' onClick={PassarFoto}>
                            <img src="images/right-arrow.png" />
                        </button>

                    </div>

                    <div className="descricao_imovel">
                        <p>{props.slides[IndexImovelAtual][1][1]}</p>
                        <ul>
                            <li>{props.slides[IndexImovelAtual][1][2]}: {props.slides[IndexImovelAtual][1][3]}</li>
                            <li>{props.slides[IndexImovelAtual][1][4]}: {props.slides[IndexImovelAtual][1][5]}</li>
                            <li>{props.slides[IndexImovelAtual][1][6]}: {props.slides[IndexImovelAtual][1][7]}</li>
                            <li>{props.slides[IndexImovelAtual][1][8]}: {props.slides[IndexImovelAtual][1][9]}</li>
                        </ul>
                    </div>
                </div>
            </div>
            
            <button className='botao_passar_imovel' onClick={PassarImovel}>
                <img src="images/right-arrow.png" />
            </button>
            

        </div>
    )
}

export default CarouselImoveis;