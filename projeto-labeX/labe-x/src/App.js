import React from 'react';
import styled from 'styled-components'
import { Router } from './router/Router';
import Header from './components/header/Header';
import Footer from './components/footer/Footer'

const Main = styled.main`
  align-items:center;
  flex: 1;
`

function App() {
  return (
    <>
      <Header/>
        <Main>
          <Router/>
        </Main>
      <Footer/>
    </>
  );
}

export default App;
