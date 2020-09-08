import React from 'react';
import styled from 'styled-components'

const BigContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  height: 100vh;
  width: 100vw;
`;

const Image = styled.img`
  height: 125px;

  @media (min-width: 680px){
    width: 130px;
  }
`;

const Button = styled.button`
  margin: 20px;
  width: 75%;
  height: 7%;
  border-radius: 25px;
  border: none;
  font-weight: 700;
  font-size: 130%;

  :hover{
    background-color: #2e042c;
    color: white;
  };
  :focus{
    background-color: #2e042c;
    color: white;
    outline: none;
  };

  @media (min-width: 680px){
    height: 80px;
    border-radius: 40px;
    font-size: 2.5rem;
  }
`;

export default class Home extends React.Component{


    render(){
        return(
            <BigContainer>
              <Image src= "/spotify-sketch.png" alt="Logo"/>
              <Button onClick={this.props.functionCreate}>Criar playlist</Button>
              <Button onClick={this.props.functionView}>Visualizar playlists</Button>
            </BigContainer>
        );
    };
}