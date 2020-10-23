import React from 'react';
import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 70vh;
    width: 450px;
    margin-top: 10px;
    
`;

export const ContainerCard = styled.div`
    display: flex;
    height: 450px;
    box-shadow: 0px 8px 8px gray;
    overflow: hidden;
    border-radius: 10px;
    width: 97%;
    position: relative;
`;

export const CardBack = styled.div`
    width: 100%;
    height: 100%;
    background-image: url(${props=> props.src});
    position: absolute;
    filter: blur(26px);
`;

export const Img = styled.img`
    width: 100%;
    display: block;
    z-index: 1;
`;

export const DivP = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 10px 0px 10px 10px;
    font-size: 16px;
    font-weight: 500;
    position: absolute;
    bottom: 0px;
    z-index: 2;
    background-image: linear-gradient(1deg, #664e4e, transparent);

    p{
        margin: 8px;
        color: white;
    }

`;

export const PanelButton = styled.section`
    display: flex;
    justify-content: space-evenly;
    margin: 16px;
    width: 90%;

    img{
        height: 50px;

        :hover{
            transform: scale(1.3);
            transition: all 0.3s ease 0s;
        }
    }
`;


