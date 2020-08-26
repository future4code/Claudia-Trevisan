import React from 'react'
import axios from "axios"
import styled from "styled-components"
import { axiosConfig, baseUrl } from './ConfigApi';

const ContainerLogOn = styled.div`
    border: 1px solid;
    padding: 8px;
    width: 60%;
`;

const Input = styled.div`
    display: flex;
    flex-direction: column;
    margin: 8px;

    label{
        display: flex;
        flex-direction: column;
        align-items: center;
    };

    button{
        display: flex;
        align-self: center;
        width: 60px;
        margin-top: 8px;
        justify-content: center;
    };
`;

export default class LogOn extends React.Component{
    state={
        inputName: "",
        inputEmail: ""
    };
    
    onChangeName = (event) =>{
        this.setState({inputName: event.target.value})
      };
      
    onChangeEmail = (event) =>{
        this.setState({inputEmail: event.target.value})
    };
    
    logOnUsers = () =>{
        const body = {
          name: this.state.inputName,
          email: this.state.inputEmail
        };
        const request = axios.post(
          baseUrl,
          body,
          axiosConfig
        );
        request
        .then((response) =>{
          alert(`Usuário ${this.state.inputName} cadastrado com sucesso.`)
          this.setState({inputName: "", inputEmail: ""});
        }).catch((error) =>{
          alert("Ocorreu um erro")
        })
        
      };

    render(){
        return(
            <ContainerLogOn>
                <Input>
                    <label>Nome:
                        <input type="text" value={this.state.inputName} onChange={this.onChangeName}/>
                    </label>
                </Input>
                <Input>
                    <label>Email:
                        <input type="email" value={this.state.inputEmail} onChange={this.onChangeEmail}/>
                    </label>
                    <button onClick={this.logOnUsers}>Salvar</button>            
                </Input>
            </ContainerLogOn>
        )
    }
};

