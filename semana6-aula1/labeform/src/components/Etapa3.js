import React from 'react'
import styled from "styled-components"
import Final from "./components/Final"

export class Etapa3 extends React.Component{
    state={
        click: false,
        inputCause: ""
    };

    insereCause = (event) =>{
        this.setState({inputCause: event.target.value})
    };
    
    deuClick = () =>{
        this.setState({
        inputCause: "",
        click: true
        });
    };

    render() {
        const proximaEtapa = () =>{
            if (this.state.click){
                return <Final/>
            }
        }
        return (
            <div>
                <h1>ETAPA 3 - INFORMAÇÕES GERAIS DE ENSINO</h1>
                <p>6 - Porque você não terminou o curso de graduação?</p>
                <input value={this.state.inputCause} onChange={this.insereCause}/>
                <p>7 - Você fez algum curso complementar?</p>
                <select>
                    <option>Nenhum</option>
                    <option>Curso Tecnico</option>
                    <option>Curso de inglês</option>
                </select>
                <button onClick={this.deuClick}>Proxima etapa</button>
            </div>
        );
    };
  };



export default Etapa3