import React from 'react';
import styled from 'styled-component'
import Etapa1 from "./components/Etapa1"

class App extends React.Component{
  state={
    click: false
  };

  render() {
    /*const proximaEtapa = () =>{
      if(this.state.click){
          return <Etapa2/>
      }
    }*/

    return (
      <div>
        <Etapa1/>
      </div>
    );
  }



}


export default App;
