import React, { useState } from 'react';
import MainScreen from './components/mainScreen/MainScreen';
import MatchScreen from './components/matchScreen/MatchScreen';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import styled from 'styled-components'

const Div = styled.div`
  display: flex;
  flex-direction: column;
  height: auto;
  background-color: lightgrey;
  align-items: center;
  width: 500px;
  border: 1px solid;
  position: fixed;
  left: 35%;
  top: 5%;
`;

export default function App() {
  const [button, setButton] = useState(true)

  const onClickButton = () =>{
    setButton(!button)
  };

  const renderize = () =>{
    if(button){
      return <MainScreen/>
    }
    else{
      return <MatchScreen/>
    }
  };

  return (
    <Div>
      <Header visibility={button} onClickButton={onClickButton}/>
      {renderize()}
      <Footer/>
    </Div>
  );
}

