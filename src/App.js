import React from 'react';
import ReactDOM from "react-dom/client";


// Bootstrap CSS
// import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
// import "bootstrap/dist/js/bootstrap.bundle.min";

import Banner from './section/Banner';
import Intro from './section/Intro';
import Color from './section/Color';
import Waves from './section/Waves';
import ColorsMeanings from './components/ColorsMeanings';
import ColorHarmony from './section/ColorHarmony/index';


//imgs

import superMan from '../src/image/super_resized.png';
import laCasaDePapel from '../src/image/poster_la_casa.jpg';
import minions from '../src/image/mini_resized.png';


function App() {
  return (
    <div className="App">

      <Banner></Banner>
      <Intro></Intro>
      <Color></Color>
      <Waves></Waves>

      <ColorHarmony />

      <ColorsMeanings
        primaryColor={'#EA1D24'}
        colorOne={'#FFBBBA'}
        ColorTwo={'#FF7A7B'}
        ColorThree={'#AD0101'}
        associado={['fogo', 'sangue']}
        possitivo={['paixão', 'amor', 'energia', 'entusiasmo', 'atenção']}
        negativo={['agressão', 'raiva', 'vingança', 'revolução']}
        imagem={laCasaDePapel}
      />
      <ColorsMeanings
        primaryColor={'#FDF001'}
        colorOne={'#FFF691'}
        ColorTwo={'#FFDE37'}
        ColorThree={'#CFA00A'}
        associado={['sol']}
        possitivo={['alegria', 'brilho', 'otimismo', 'idealismo']}
        negativo={['covardia', 'decepção', 'ciúmes', 'cuidado']}
        imagem={minions}
      />

      <ColorsMeanings
        primaryColor={'#0171BB'}
        colorOne={'#B2CDE0'}
        ColorTwo={'#6497B2'}
        ColorThree={'#001F4B'}
        associado={['mar', 'céu']}
        possitivo={['confiar', 'conhecimento', 'paz', 'lealdade']}
        negativo={['depressão', 'frieza', 'apatia', 'destacamento']}
        imagem={superMan}
      />

    </div>
  );
}

export default App;
