import React from 'react';
import './App.css';
import {CardVideo} from '.components/CardVideo';
import {ListItem} from '.components/ListItem';

function App() {
  const titulo = "Titulo do video"
  function reproduzVideo() {
    alert("O vídeo está sendo reproduzido")
  }

  return (
      <div>
        <div className="tela-inteira">
            <header>
                <h1>Lab Tube</h1>
                <input type="text" placeholder="Busca" id="campoDeBusca" />
            </header>
    
            <main>
                <ListItem />
                <section className="painel-de-videos">
                    <CardVideo imagem = {imagem} {titulo=video1}/>
                    <CardVideo />
                    <CardVideo />
                    <CardVideo />
                    <CardVideo />
                    <CardVideo />
                    <CardVideo />
                    <CardVideo />
                </section>
            </main>
    
            <footer>
                <h4>Oi! Eu moro no footer!</h4>
            </footer>
        </div>
    </div>
  );
}

export default App;
