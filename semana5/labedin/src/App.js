import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';
import CardPequeno from './components/CardPequeno/CardPequeno';

function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem="https://avatars1.githubusercontent.com/u/68132361?s=460&u=6bb3b5eaac2cf4ee4330d09dd405e0ce87d2dea8&v=4" 
          nome="Claudia Trevisan Oliveira" 
          descricao="Eu sou o rei Salomão. Eu sou John Kennedy. Eu sou Raul Seixas. Eu sou Jimi Hendrix. Mesmo que ninguém escute,
            Mesmo que ninguém ouça, Mesmo que ninguém acredite no que sai da minha boca. Eu sou o verdadeiro Bruce Lee. Eu sou o verdadeiro Bob Marley.
            Eu sou o verdadeiro Peter Sellers. Eu sou a verdadeira Mary Poppins!!"
        />

        <div className="moreInfo">
        <CardPequeno 
          email="Email: claudiaoliveira@gmail.com"
          endereco="Endereço: Rua das Ilusões, nº 888. Jardim do Eden. Montecristo - PA. Brasil"
        />
        </div>

        <ImagemButton 
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png" 
          texto="Ver mais"
        />
      </div>

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem="https://s3.amazonaws.com/future4.com.br/static/headf4-c492117ca2373dc85ca81bf715b3dc2a.png" 
          nome="Labenu" 
          descricao="Aprendendo a criar Bugs!" 
        />
        
        <CardGrande 
          imagem="https://imagens.canaltech.com.br/empresas/4418.400.jpg" 
          nome="NASA" 
          descricao="Criando Bugs." 
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
      </div>
    </div>
  );
}

export default App;
