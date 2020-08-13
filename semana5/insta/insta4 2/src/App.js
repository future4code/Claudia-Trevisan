import React from 'react';
import './App.css';
import Post from './components/Post/Post';

class App extends React.Component {
  state = {
    post: [
      {
        nomeUsuario: "Paulinha",
        fotoUsuario: "https://picsum.photos/50/50",
        fotoPost: "https://picsum.photos/200/150",
      },
      {
        nomeUsuario: "Joana22",
        fotoUsuario: "https://picsum.photos/50/55",
        fotoPost: "https://picsum.photos/200/159",
      },
      {
        nomeUsuario: "a_malukinha",
        fotoUsuario: "https://picsum.photos/50/57",
        fotoPost: "https://picsum.photos/200/189",
      },
    ]      
  }

  render() {
    const listaDeComponentes = this.state.post.map((postagem) => {
      return (
        <div>
          <div className={'app-container'}>
            {postagem.nomeUsuario}
          </div>
          <div className={'app-container'}>
             {postagem.fotoUsuario}
          </div>
          <div className={'app-container'}>
             {postagem.fotoPost}
          </div>
        </div>  
      );
    });
    return (
      <div className={'app-container'}>
        {listaDeComponentes}
      </div>

    )
  }
}

export default App;
