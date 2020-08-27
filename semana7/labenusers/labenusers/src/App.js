import React from 'react';
import LogOn from './components/LogOn';
import UsersList from './components/UsersList';
import axios from "axios";
import styled from "styled-components"
import UserDetail from './components/UserDetail';

const AppContainer = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export default class App extends React.Component{
  state={
    showMe: "logOn",
    editUser: false
  };


  changePage = () =>{
    if(this.state.showMe === "logOn"){
      this.setState({showMe: "usersList"})
    }else{
      this.setState({showMe: "logOn"})
    }
  };
  
  onClickEditUser = () =>{
    this.setState({editUser: !this.state.editUser})
    console.log(this.state.editUser)

  }

  render() {
    const currentPage = () =>{
      if(this.state.showMe === "logOn"){
        return <LogOn/>
      }else if(this.state.showMe === "usersList"){
        return <UsersList functionOnClick={this.onClickEditUser}/>
      }
    };

    const editUsers = () =>{
      if(this.state.editUser){
        return <UserDetail />
      }
    }

    return (
      <AppContainer>
        <button onClick={this.changePage}>Ir para página de lista</button>
        {editUsers}
        {currentPage()}
      </AppContainer>
    );
  }
};
