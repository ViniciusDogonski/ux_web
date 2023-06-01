import React from 'react';
import './index.css';
import Semaforo from '../../image/semaforo.png';

function color() {
    return (




        <div class="hero-content" >
            <div class="hero-left">
                <div class="hero-title">
                    <div className='center'>
                    <h4>O que é cor?</h4>
                    </div>
                    <p>Em um mundo onde a impressão é produzida em apenas um vigésimo de segundo,
                        a cor pode ajudar o designer a chamar a atenção do espectador e
                        comunicar informações em um ambiente visual movimentado.
                        As cores também ajudam o visualizador a fazer a associação correta ou
                        a ter a reação certa a uma marca de produto ou serviço.
                        A cor atua como um ponto de exclamação, como uma forma de alcançar o equilíbrio da composição
                        e como uma ferramenta para sugerir e transmitir significado.</p>
                </div>
            </div>
            <div class="hero-right">
                <img src={Semaforo} />
            </div>
        </div>


    )
}
export default color;