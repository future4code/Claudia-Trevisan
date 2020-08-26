import React from 'react'
import axios from "axios"
import styled from "styled-components"

const ContainerLogOn = styled.div`
    border: 1px solid;
    padding: 8px;
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

    

    render(){
        return(
            <ContainerLogOn>
                <Input>
                    <label>Nome:
                        <input type="text" value={this.props.inputName} onChange={this.props.again}/>
                    </label>
                </Input>
                <Input>
                    <label>Email:
                        <input type="email" value={this.props.inputEmail} onChange={this.props.andAgain}/>
                    </label>
                    <button onClick={() => this.props.pass(this.props.inputName, this.props.inputEmail)}>Salvar</button>            
                </Input>
            </ContainerLogOn>
        )
    }
};

