import React from 'react';
import axios from 'axios';
import styled from 'styled-components';
import ViewAll from './components/ViewAll';
import NewPlayList from './components/NewPlayList';
import Details from './components/Details';
import AddMusic from './components/AddMusic'


export default class App extends React.Component {
  state = {
    currentPage: "",
  }
  
    onClickButtonCreate = () =>{
    this.setState({currentPage:"pageNewPlay"})
  };
  
  onClickButtonView = () =>{
    this.setState({currentPage: "pageViewAll"})
  };

  onCLickButtonBack = () =>{
    this.setState({currentPage: ""})
  };

  onClickButtonDetails = () =>{
    this.setState({currentPage: "pageDetails"})
  };

  onClickButtonAdd = () =>{
    this.setState({currentPage: "pageAdd"})
  };



  render(){
    const renderize = () =>{
      if(this.state.currentPage === "pageNewPlay"){
        return <NewPlayList functionBack={this.onCLickButtonBack} functionView={this.onClickButtonView}/>
      }
      else if(this.state.currentPage === "pageViewAll"){
        return <ViewAll functionBack={this.onCLickButtonBack}/>
      }
      else if(this.state.currentPage === "pageDetails"){
        return <Details functionBack={this.onCLickButtonBack}/>
      }
      else if(this.state.currentPage === "pageAdd"){
        return <AddMusic functionBack={this.onCLickButtonBack}/>
      }
    };

    return (
      <div>
        <button onClick={this.onClickButtonCreate}>Criar playlist</button>
        <button onClick={this.onClickButtonView}>Visualizar playlists</button>
        {renderize()}
      </div>
    );
  };
}

