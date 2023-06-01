import React from 'react';
import './index.css';
import Semaforo from '../../image/semaforo.png';

function color(){
return(
    <div className="container2">
        <div className='text-content col-md-8'>
            <h2 id="txt">O que é Cor?</h2>
            <p> Em um mundo onde a impressão é produzida em apenas um vigésimo de segundo, 
                a cor pode ajudar o designer a chamar a atenção do espectador e 
                comunicar informações em um ambiente visual movimentado. 
                As cores também ajudam o visualizador a fazer a associação correta ou 
                a ter a reação certa a uma marca de produto ou serviço.
                 A cor atua como um ponto de exclamação, como uma forma de alcançar o equilíbrio da composição
                 e como uma ferramenta para sugerir e transmitir significado.</p>
        </div>
        <div className="content col-md-4">
            <img src={Semaforo} alt="semáforo"></img>
        </div>
        
    </div>
)
}
export default color;