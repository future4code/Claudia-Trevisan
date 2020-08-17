import React from 'react';
import './App.css';
import Post from './components/Post/Post';
import styled from 'styled-components';

const ContainerGrande = styled.div`
  display:flex;
  flex-direction: column;
`
const ParteDeCima = styled.header`
  display: flex;
  flex-direction: column;
  align-items:center;
  font-family: cursive;
  font-size: 5rem;
  font-weight:900;
  font-style: italic;
`

const ContainerNovoPost = styled.div`
  display: flex;
  align-items:center;
  flex-direction: column;
  justify-content: center;
  gap: .6rem;
  border: 2px solid gray;
  width:50vw;
  margin-bottom: 3.2rem;
  padding: 1.5rem;
  margin-top: 2rem;
  margin-right: 0;
  background-color: #d3d3d3;
  align-self: center;
`;
const TextoAbertura = styled.h1`
  font-family: sans-serif;
  margin-bottom: .4rem;
`
const BotaoAdiciona = styled.button`
  width: 35vw;
  margin-top: .3rem;
  margin-bottom: .4rem;
  height: 2.5rem;
  font-family: sans-serif;
  font-weight: 700;
  font-size: 1.4rem;
  background-color: #789;

`;
const WriteSpace = styled.input`
  width: 40vw;
  height: 6vh; 
  padding-left: .5rem;
`;


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
    ],
    valorInputUsuario: "",
    valorInputFoto: "",
    valorInputPost:""     
  };

  adicionaPost = () =>{
    const novoPost = {
      nomeUsuario: this.state.valorInputUsuario,
      fotoUsuario: this.state.valorInputFoto,
      fotoPost: this.state.valorInputPost
    };
    const novaPostagem = [...this.state.post, novoPost];
    this.setState({post: novaPostagem});
    this.setState({
      valorInputUsuario: "",
      valorInputFoto: "",
      valorInputPost: ""
    })
  };

  onChangeInputNovoUsuario = (event) =>{
    this.setState({valorInputUsuario: event.target.value});
  };

  onChangeInputNovaFoto = (event) =>{
    this.setState({valorInputFoto: event.target.value});
  };

  onChangeInputnovoPost = (event)=>{
    this.setState({valorInputPost: event.target.value});
  };

  render() {
    const listaDeComponentes = this.state.post.map((postagem) => {
      return (
        <Post
        nomeUsuario={postagem.nomeUsuario}
        fotoUsuario={postagem.fotoUsuario}
        fotoPost={postagem.fotoPost}
        />
      );
    });
    return (
      <ContainerGrande>
        <ParteDeCima>Labegran</ParteDeCima>
        <ContainerNovoPost>
          <TextoAbertura>Adicione seu Post!</TextoAbertura>
          <WriteSpace 
          value = {this.state.valorInputUsuario}
          onChange = {this.onChangeInputNovoUsuario}
          placeholder = {"Adicione seu nome de usuário"}
          />
          <WriteSpace 
          value = {this.state.valorInputFoto}
          onChange = {this.onChangeInputNovaFoto}
          placeholder = {"URL da foto do usuário"}
          />
          <WriteSpace 
          value = {this.state.valorInputPost}
          onChange = {this.onChangeInputnovoPost}
          placeholder = {"URL da foto do post"}
          />
          <BotaoAdiciona onClick = {this.adicionaPost}>Adicionar</BotaoAdiciona>
        </ContainerNovoPost>
        <div className= {"app-container"}>
          {listaDeComponentes}
        </div>
      </ContainerGrande>
    )
  }
}

export default App;
