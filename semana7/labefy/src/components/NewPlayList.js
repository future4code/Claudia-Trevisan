import React from 'react';
import axios from 'axios';
import styled from 'styled-components'


export default class NewPlayList extends React.Component{
    state ={
        namePlayList: "",
    }

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
            <div>
                <input type={"text"} onChange={this.onChangeInput} placeholder={"Nome da playlist"}></input>
                <button onClick={this.onClickCreate}>Criar</button>
                <button onClick={this.props.functionView}>Visualizar playlists</button>
                <button onClick={this.props.functionBack}>Home</button>
            </div> 
        )
    };
}