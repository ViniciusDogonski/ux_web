import React from 'react';
import '../Intro/index.css';
import Image from '../../image/preto.png'
function intro(){
    return(
        
       <div className="container1">
         <h2 id="txt1">Importância das Cores</h2>
         

            <div className="text-content col-md-4">

                <p>A cor é uma das ferramentas mais poderosas que um designer tem para comunicar uma mensagem ao cliente.
                    Através dessa ferramenta é possível simbolizar uma ideia, invocar significados e ter relevância cultural. 
                    Ao utilizarmos as cores, é importante que os relacionamentos entre elas sejam bem-sucedidos, pois isso pode influenciar na escolha de compra de um produto ou uso de serviços propostos ao cliente. 
                    A cor tem o poder de atrair e manter a atenção do espectador, mas ela também traz inúmeros desafios ao designer, podendo 
                    das estrutura a projetos com vários componentes, dar enfase e transmitir humor. Seja sugerindo espaço ou mostrando movimento e ritmo, a cor sempre tem uma história para contar.
                </p>
            </div>
            
        
         <div className="content col-md-4">
            <img src={Image} alt="legumes e frutas em preto e branco"></img>
                
            </div>
       </div> 
    )

}
export default intro;