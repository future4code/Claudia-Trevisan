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
    users: []
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

  logOnUsers = () =>{
    const body = {
      name: this.state.inputName,
      email: this.state.iputEmail
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
      this.getUsers();
      this.setState({inputName: ""});
    }).catch((error) =>{
      alert("Ocorreu um erro")
    })
  };

  

  // componentDidMount(){
  //   this.getUsers();
  // };

  render() {

    return (
      <AppContainer>
        <LogOn/>
        <UsersList/>
      </AppContainer>
    );
  }
}
