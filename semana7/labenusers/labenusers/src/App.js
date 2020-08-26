import React from 'react';
import LogOn from './components/LogOn';
import UsersList from './components/UsersList';
import axios from "axios";
import styled from "styled-components"

const AppContainer = styled.main`
  display: flex;
  
`;

export default class App extends React.Component{
  state={
    users: [],
    inputName: "",
    inputEmail: ""
  };

  getUsers = () =>{
    const request = axios.get(
        "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users",
        {
          headers: {
            Authorization: "claudia-trevisan-jackson"
          }
        }
    );

    request
    .then((response) =>{
        this.setState({users: response.data.name})
    }).catch((error) =>{
        alert("Ocorreu um erro")
    });
  };

  logOnUsers = (name, email) =>{
    const body = {
      name: name,
      email: email
    };
    const request = axios.post(
      "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users",
      body,
      {
        headers: {
          Authorization: "claudia-trevisan-jackson"
        }
      }
    );
    request
    .then((response) =>{
      alert(`Usuário ${this.state.inputName} cadastrado com sucesso.`)
      this.setState({inputName: ""});
      this.setState({inputEmail: ""});
    }).catch((error) =>{
      alert("Ocorreu um erro")
    })
    
  };

  onChangeInput = (event) =>{
    this.setState({inputName: event.target.value})
  };
  
  onChangeInputEmail = (event) =>{
      this.setState({inputEmail: event.target.value})
  };


  render() {

    return (
      <AppContainer>
        <LogOn inputName={this.state.inputName} inputEmail={this.state.inputEmail} pass={this.logOnUsers} again={this.onChangeInput} andAgain={this.onChangeInputEmail}/>
        <UsersList passingList={this.state.users}/>
      </AppContainer>
    );
  }
}
