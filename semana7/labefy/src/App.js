import React from 'react';
import styled from 'styled-components';
import ViewAll from './components/ViewAll';
import NewPlayList from './components/NewPlayList';
import Details from './components/Details';
import AddMusic from './components/AddMusic'
import Home from './components/Home';

const BigContainer = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  background-color: #0f0a28;
  width: 100vw;
  height: 100vh;
`;

export default class App extends React.Component {
  state = {
    currentPage: "pageHome",
    idDetails: "",
    namePlay: ""
  };
  
    onClickButtonCreate = () =>{
    this.setState({currentPage:"pageNewPlay"})
  };
  
  onClickButtonView = () =>{
    this.setState({currentPage: "pageViewAll"})
  };

  onCLickButtonBack = () =>{
    this.setState({currentPage: "pageHome"})
  };

  onClickButtonDetails = (idPlay, namePlay) =>{
    this.setState({currentPage: "pageDetails", idDetails: idPlay, namePlay: namePlay})
  };

  onClickButtonAdd = () =>{
    this.setState({currentPage: "pageAdd"})
  };



  render(){
    const renderize = () =>{
      if(this.state.currentPage === "pageHome"){
        return <Home functionCreate={this.onClickButtonCreate} functionView={this.onClickButtonView}/>
      }
      else if(this.state.currentPage === "pageNewPlay"){
        return <NewPlayList functionBack={this.onCLickButtonBack} functionView={this.onClickButtonView}/>
      }
      else if(this.state.currentPage === "pageViewAll"){
        return <ViewAll functionBack={this.onCLickButtonBack} functionDetails={this.onClickButtonDetails}/>
      }
      else if(this.state.currentPage === "pageDetails"){
        return <Details functionBack={this.onCLickButtonBack} idDetails={this.state.idDetails} 
        namePlay={this.state.namePlay} functionView={this.onClickButtonView}/>
      }
      else if(this.state.currentPage === "pageAdd"){
        return <AddMusic functionBack={this.onCLickButtonBack} idDetails={this.state.idDetails}/>
      }
    };

    return (
      <BigContainer>
        {renderize()}
      </BigContainer>
    );
  };
}

