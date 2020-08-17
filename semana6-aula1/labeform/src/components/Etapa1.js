import React from 'react';
import styled from "styled-components"
import Etapa2 from 'Etapa2'

export class Etapa1 extends React.Component{
    state= {
      click: false,
      inputName: "",
      inputAge: "",
      inputEmail: ""
    };
  
    insereName = (event) =>{
      this.setState({inputName: event.target.value})
    };
  
    insereAge = (event) =>{
      this.setState({inputAge: event.target.value})
    };
  
    insereEmail = (event) =>{
      this.setState({inputEmail: event.target.value})
    };
  
    deuClick = () =>{
      this.setState({
      inputName: "",
      inputAge: "",
      inputEmail: "",
      click: true
      });
    };
  
    render() {
                return (
            <div>
                <h1>ETAPA 1 - DADOS GERAIS</h1>
                <p>1 - Qual o seu nome?</p>
                <input value={this.state.inputNome} onChange={this.insereName}/>
                <p>2 - Qual sua idade?</p>
                <input value={this.state.inputIdade} onChange={this.insereAge}/>
                <p>3 - Qual seu email?</p>
                <input value={this.state.inputNome} onChange={this.insereEmail}/>
                <p>4 - Qual a sua escolaridade?</p>
                <select>
                    <option>Ensino medio incompleto</option>
                    <option>Ensino medio completo</option>
                    <option>Ensino superior incompleto</option>
                    <option>Ensino superior completo</option>
                </select>
                <button onClick={this.deuClick}>Proxima etapa</button>
            </div>
        );
    };
  };

  export default Etapa1