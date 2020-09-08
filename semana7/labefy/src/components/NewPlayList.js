import React from 'react';
import axios from 'axios';
import styled from 'styled-components'

const BigContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 100vw;
`;
const ContainerNewPlay = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    width: 80%;
    background-color: #312e45;
    margin-bottom: 7px;
    border-radius: 10px;
    height: 40%;
    box-shadow: 1px 1px 16px 3px orange;

    @media (min-width: 680px){
        margin-bottom: 40px;
    }
`;

const Input = styled.input`
    width: 85%;
    border-radius: 13px;
    border: none;
    padding: 5px;
    height: 15%;
    padding-left: 13px;
    font-size: 23px;
    margin-bottom: 30px;

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
      height: 90px;
      margin-bottom: 15px;
      border-radius: 27px;
      font-size: 30px;
      padding-left: 30px;
      margin-bottom: 20px;

      ::placeholder{
          font-size: 2rem;
          padding-left: 20px;
      }
  }
`;

const ButtonC = styled.button`
  margin: 20px;
  width: 70%;
  height: 15%;
  border-radius: 25px;
  border: none;
  font-weight: 700;
  font-size: 130%;

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
    height: 70px;
    width: 60%;
    border-radius: 40px;
    font-size: 2.5rem;
  }
`;

const Button = styled.button`
  margin: 20px;
  width: 55%;
  height: 7%;
  border-radius: 25px;
  border: none;
  font-weight: 700;
  font-size: 113%;

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
      height: 50px;
      width: 35%;
      font-size: 2.2rem;
  }
`;

const ImageH = styled.img`
  width: 40px;
  margin-top: 8px;

  @media (min-width: 680px){
      width: 65px;
      margin-top: 13px;
  }
`;

export default class NewPlayList extends React.Component{
    state ={
        namePlayList: "",
    };

    newPlay = () =>{
        const body = {
            name: this.state.namePlayList
        }
        const request = axios
        .post ("https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists",
            body,
            {
                headers: {
                    Authorization: "claudia-trevisan-jackson"
                }
            }
        );
        request
        .then((response)=>{
            alert("Playlist criada com sucesso. Para visualizar e adicionar músicas clique em visualizar playlists")
        })
        .catch((error)=>{
            alert("ocorreu um erro. Tente novamente mais tarde")
        })
    };

    onChangeInput = (event) =>{
        const inputValue = event.target.value
        this.setState({namePlayList: inputValue})
    };

    onClickCreate = () =>{
        this.newPlay()
        this.setState({namePlayList: ""})
    };

    render(){
        return(
            <BigContainer>
                <ContainerNewPlay>
                    <Input type={"text"} onChange={this.onChangeInput} placeholder={"Nome da playlist"}></Input>
                    <ButtonC onClick={this.onClickCreate}>Criar</ButtonC>
                </ContainerNewPlay>
                <Button onClick={this.props.functionView}>Visualizar playlists</Button>
                <ImageH src="spotify-sketch.png" onClick={this.props.functionBack} alt="Home"/>
            </BigContainer> 
        );
    };
}