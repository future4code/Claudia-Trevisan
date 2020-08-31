import React from 'react';
import axios from 'axios';
import styled from 'styled-components'

const BigContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: auto;
    width: 100vw;
    background-color: #0f0a28;
`;

const Title = styled.h3`
    color: white;
    margin-top: 5px;
    margin-bottom: 8px;

    @media (min-width: 680px){
        font-size: 3rem;
    }
`;

const DivViewAll = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    width: 80%;
    background-color: #312e45;
    margin-bottom: 20px;
    border-radius: 10px;
    box-shadow: 1px 1px 6px 1px orange;

    p{
        margin: 5px;
        color: white;
        text-align: center;
        font-size: 23px;
    }

    @media (min-width: 680px){
        display: grid;
        grid-template-columns: 1fr 1fr;
        p{
            font-size: 2rem;
        }
    }
`;

const DivButton = styled.div`
    display: flex;
    margin-bottom: 5px;
    align-items: center;
    justify-content: space-evenly;

    @media (min-width: 680px){
        margin-top: 6px;
    }
`;

const Button = styled.button`
  width: 50%;
  height: 100%;
  border-radius: 25px;
  border: none;
  font-size: 110%;
  background-color: #0f0a28;
  color: white;
  font-weight: 400;
  padding: 4px;
  margin: 6px;
  margin-left: 0;
  margin-right: 15px;

  :hover{
    background-color: white;
    color: #2e042c;
  };
  :focus{
    background-color: white;
    color: #2e042c;
    outline: none;
  };

  @media (min-width: 680px){
      font-size: 1rem;
  }
`;

const ImageDel = styled.img`
    width: 37px;
`;

const ImageH = styled.img`
  width: 40px;
  margin-bottom: 16px;

  @media (min-width: 680px){
      width: 65px;
  }
`;



export default class ViewAll extends React.Component{
    state ={
        list:[]
    };

    getAll = () =>{
        const request = axios.get("https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists",
            {
                headers:{
                    Authorization: "claudia-trevisan-jackson"
                }
            }
        );
        request
        .then((response)=>{
            this.setState({list: response.data.result.list})
        })
        .catch((error)=>{
            alert("Ocorreu um erro")
        })
    };

    delete = (id) =>{
        const request = axios.delete(`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}`,
            {
                headers:{
                    Authorization: "claudia-trevisan-jackson"
                }
            }
        );
        request
        .then((response)=>{
            alert("Exclusão realizada com sucesso")
            this.getAll()
        })
        .catch((error)=>{
            alert("Ocorreu um erro")
        })
    };

    componentDidMount(){
        this.getAll()
    };

    onClickButtonDelete = (id) =>{
        this.delete(id)
    };

    render(){
        return(
            <BigContainer>
                <Title>Playlists</Title>
                {this.state.list.map((playlist)=>{
                    return(
                        <DivViewAll>
                            <p key={playlist.id}>{playlist.name}</p>
                            <DivButton>
                                <Button onClick={()=>this.props.functionDetails(playlist.id, playlist.name)}>Detalhes</Button>
                                <ImageDel src="delete.png" alt="Excluir" onClick={()=>this.onClicButtonDelete(playlist.id)}></ImageDel>
                            </DivButton>
                        </DivViewAll>
                    ) 
                })}
                <ImageH src="spotify-sketch.png" onClick={this.props.functionBack} alt="Home"/>
            </BigContainer>
        );
    };
}