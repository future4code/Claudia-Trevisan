import React from 'react';
import { Etapa1 } from './components/Etapa1'
import { Etapa2 } from './components/Etapa2'
import { Etapa3 } from './components/Etapa3'
import { Final } from './components/Final'
import styled from 'styled-components'

const Caixa = styled.div`
  position:relative;
  left: 35em;
`;

const Button = styled.button`
  position: relative;
  top: 2em;
  left: 2.2em;
`

class App extends React.Component{
  state={
    click: 1
  }

  deuClick = () =>{
    this.setState({click: this.state.click +1})
  };


  render() {
    const renderiza = () =>{
      switch (this.state.click){
        case 1:
          return <Etapa1/>;
        case 2:
          return <Etapa2/>;
        case 3:
          return <Etapa3/>;
        case 4:
          return <Final/>;
        default:
         return <Etapa1/>
      }
    };

    return (
      <Caixa>
        {renderiza()}
        {this.state.click < 4 ? <Button onClick={this.deuClick}>Proxima etapa</Button> : null}
      </Caixa>
    );
  };
}

export default App;
