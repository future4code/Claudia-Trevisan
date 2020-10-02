import React from 'react';
import styled from 'styled-components';
import Header from '../header/Header';

const Main = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export default function PageDefault (props) {

    return(
        <>
            <Header/>
                <Main>
                    {props.children}    
                </Main>
        </>
    )
}