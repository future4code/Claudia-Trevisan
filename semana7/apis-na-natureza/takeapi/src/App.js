import React from 'react';
import axios from 'axios';
import styled from 'styled-components';
import SelectSeason from './components/SelectSeason';
import Infos from './components/Infos';
import Queen from './components/Queen'

export default class App extends React.Component{
  state={
    changePage: "selectPage", 
    idSeason: "",
    idQueen: ""
  };

  onChangeSelect = (event) =>{
    const season = event.target.value
    this.setState({idSeason: season, changePage: "infoPage"})
  };


  onClickSearch = (idQueen) =>{
    this.setState({changePage: "queenPage", idQueen: idQueen})
  };

  onClickBack = () =>{
    this.SetState({changePage: "selectPage"})
  }

  render(){
    const currentPage=()=>{
      if(this.state.changePage === "selectPage"){
        return <SelectSeason functionOnChange={this.onChangeSelect}/>
      }else if(this.state.changePage === "infoPage"){
        return <Infos idSeason={this.state.idSeason} functionOnClick={this.onClickBack}
        functionOnClickSearch={this.onClickSearch}/>
      }else if(this.state.changePage === "queePage"){
        return <Queen idQueen={this.state.idQueen}/>
      }
    }

    return (
      <div>
        {currentPage()}
      </div>
    );
  };
};