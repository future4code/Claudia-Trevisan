import React from 'react';
import styled from styled-components
import Etapa3 from "./components/Etapa3"

export class Etapa2 extends React.Component{
    state={
        click: false,
        inputCurse: "",
        inputUnit: ""
    };

    insereCurse = (event) =>{
        this.setState({inputCurse: event.target.value})
    };

    insereUnit = (event) =>{
      this.setState({inputUnit: event.target.value})
    };

    deuClick = () =>{
        this.setState({
        inputCurse: "",
        inputUnit: "",
        click: true
        });
    };
    
    render() {
        const proximaEtapa = () =>{
            if (this.state.click){
                return <Etapa3/>
            }
        }
        return (
            <div>
                <h1>ETAPA 2 - INFORMAÇÕES DO ENSINO SUPERIOR</h1>
                <p>5 - Qual curso?</p>
                <input value={this.state.inputCurse} onChange={this.insereCurse}/>
                <p>6 - Qual a unidade de ensino?</p>
                <input value={this.state.inputUnit} onChange={this.insereUnit}/>
                <button onClick={this.deuClick}>Proxima etapa</button>
            </div>
        );
    };
  };


export default Etapa2