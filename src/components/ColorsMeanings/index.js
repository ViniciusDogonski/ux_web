import React from 'react';

import qq from '../../image/poster_la_casa.jpg'

import './index.css';

// ColorsMeanings

function ColorsMeanings(props) {

    console.log(props);
    return (

        <div class="wrap">
            <div class="container card">
                <div class="flex row structure">
                    <div class="flex row structure-2">
                        <div class="flex col structure-2-2">
                            <div class="flex element g">
                                <div class="content" style={{ background: props.primaryColor }}>
                                    Vermelho
                                </div>
                            </div>
                            <div class="flex element h" >
                                <div class="content" style={{ background: props.colorOne }}>

                                </div>
                            </div>

                        </div>
                        <div class="flex element f">
                            <div class="content">
                                <p>Associado:</p>
                                {props.associado.map((s) => (

                                    <h6 style={{ color: props.primaryColor }}>{s}</h6>

                                ))}
                                <br />

                                <p>Possitivo:</p>
                                {props.possitivo.map((s) => (

                                    <h6 style={{ color: props.primaryColor }}>{s}</h6>

                                ))}
                                <br />
                                <p>Negativo:</p>
                                {props.negativo.map((s) => (

                                    <h6 style={{ color: props.primaryColor }}>{s}</h6>

                                ))}
                            
                            </div>
                        </div>

                    </div>

                    <div class="flex row structure-1">
                        {/* <div class="flex element a">
                            <div class="content">
                                A
                            </div>
                        </div> */}
                        <div class="flex element b">
                            <div class="content">
                                <img src={props.imagem} />
                            </div>
                        </div>
                        <div class="flex col structure-1-2-1">
                            <div class="flex element c">
                                <div class="content" style={{ background: props.ColorTwo }}>

                                </div>
                            </div>
                            <div class="flex element d">
                                <div class="content" style={{ background: props.ColorThree }}>

                                </div>
                            </div>
                        </div>
                        {/* <div class="flex element e">
                            <div class="content">
                                E
                            </div>
                        </div> */}
                    </div>

                </div>
            </div>
        </div>


    );
}

export default ColorsMeanings;