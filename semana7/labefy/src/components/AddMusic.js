import React from 'react';
import axios from 'axios';
import styled from 'styled-components'

const ContainerAdd = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #312e45;
    border-radius: 10px;
    width: 80%;
    margin-bottom: 16px;
    box-shadow: 1px 1px 16px 3px orange;

    h4{
        color: white;
    }

    @media (min-width: 680px){
        width: 60%;
        h4{
            font-size: 2rem;
        }
    }
`;

const Input = styled.input`
    width: 85%;
    border-radius: 13px;
    border: none;
    padding: 5px;
    height: 7%;
    padding-left: 13px;
    font-size: 23px;
    margin-top: 20px;

    ::placeholder{
        font-size: 90%;
        padding-left: 10px;
    };

    :focus{
    background-color: #2e042c;
    color: white;
    outline: none;
  };

  @media (min-width: 680px){
      height: 40px;
      font-size: 33px;
  }
`;

const Button = styled.button`
  margin: 20px;
  width: 55%;
  height: 30px;
  border-radius: 25px;
  border: none;
  font-weight: 700;
  font-size: 120%;

  :hover{
    background-color: #2e042c;
    color: white;
  };
  :focus{
    background-color: #2e042c;
    color: white;
    outline: none;
  };

  @media (min-width: 680px){
    height: 43px;
    width: 46%;
    font-size: 1.6rem;
  }
`;

const ImageR = styled.img`
  width: 40px;
  margin-bottom: 5px;

  @media (min-width: 680px){
      width: 65px;
  }
`;

export default class AddMusic extends React.Component{
    state={
        name: "",
        artist: "",
        url: ""  
    };
    
    addTrack = (idPlay) =>{
        const body = {
            name: this.state.name,
            artist: this.state.artist,
            url: this.state.url
        };
        const request = axios
        .post(`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${idPlay}/tracks`,
            body,
            {
                headers:{
                    Authorization: "claudia-trevisan-jackson"
                }
            }
        );
        request
        .then((response)=>{
            alert("Musica adicionada com sucesso")
            this.setState({name:"", artist: "", url: ""})
        })
        .catch((error)=>{
            alert("Ocorreu um erro")
        })
    };

    onChangeInputAddName = (event) =>{
        this.setState({name: event.target.value})
    };

    onChangeInputAddArtist = (event) =>{
        this.setState({artist: event.target.value})
    };

    onChangeInputAddUrl = (event) =>{
        this.setState({url: event.target.value})
    };

    onClickAddTrack = () =>{
        this.addTrack(this.props.idDetails)
    };

    render(){
        return(
            <ContainerAdd>
                <h4>Preencha os campos abaixo</h4>
                <Input onChange={this.onChangeInputAddName} key={"name"} placeholder={"Nome da musica"}></Input>
                <Input onChange={this.onChangeInputAddArtist} key={"artist"} placeholder={"Artista"}></Input>
                <Input onChange={this.onChangeInputAddUrl} key={"url"} placeholder={"Url musica"}></Input>
                <Button onClick={this.onClickAddTrack}>Adicionar</Button>
                <ImageR src="refresh.png" onClick={this.props.render} alt="Atualizar"/>
            </ContainerAdd>
        );
    };
}