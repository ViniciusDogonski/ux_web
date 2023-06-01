import React from 'react';
// import '../Intro/index.css';
import './index.css';
import Image from '../../image/preto.png'


function intro() {
    return (



        <>
            <div class="l-hero">
                <div class="l-hero__img">
                    <img src={Image} alt='img' />
                </div>

                <div class="l-hero__pulled">
                    <div class="l-hero__pulled-inner">
                        <div class="c-card">
                            <h3 class="c-card__subtitle">Importância das Cores</h3>
                            <p class="c-card__title">
                                A cor é uma das ferramentas mais poderosas que um designer tem para comunicar uma mensagem ao cliente.
                                Através dessa ferramenta é possível simbolizar uma ideia, invocar significados e ter relevância cultural.
                                Ao utilizarmos as cores, é importante que os relacionamentos entre elas sejam bem-sucedidos, pois isso pode influenciar na escolha de compra de um produto ou uso de serviços propostos ao cliente.
                                A cor tem o poder de atrair e manter a atenção do espectador, mas ela também traz inúmeros desafios ao designer, podendo
                                das estrutura a projetos com vários componentes, dar enfase e transmitir humor. Seja sugerindo espaço ou mostrando movimento e ritmo, a cor sempre tem uma história para contar.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>




    )

}
export default intro;