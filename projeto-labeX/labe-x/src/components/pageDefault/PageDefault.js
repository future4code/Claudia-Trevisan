import React from 'react';
import Footer from '../footer/Footer';
import Header from '../header/Header';
import styled from 'styled-components'

const Main = styled.main`
  align-items:center;
  flex: 1;
`;


export default function PageDefault(props) {
    
    return(
        <>
            <Header/>
                <Main>
                    {props.children}
                </Main>
            <Footer/>
        </>
    );
}