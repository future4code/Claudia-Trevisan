import React from 'react';
import axios from 'axios';
import styled from 'styled-components'

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
            <div>
                <h3>Playlists</h3>
                <ul>
                    {this.state.list.map((playlist)=>{
                        return(
                            <div>
                                <li key={playlist.id}>{playlist.name}</li>
                                <button onClick={()=>this.onClickButtonDelete(playlist.id)}>Excluir</button>
                            </div>
                        ) 
                    })}
                </ul>
            </div>
        )
    }
}