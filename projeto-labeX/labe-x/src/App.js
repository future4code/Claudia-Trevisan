import React from 'react';
import styled from 'styled-components'

function App(props) {
  return (
    <>
      <Menu/>
        <Main>
          {props.children}
        </Main>
      <Footer/>
    </>
  );
}

export default App;
