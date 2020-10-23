import React from 'react';
import styled from 'styled-components'

export const DivHeader = styled.header`
    display: flex;
    padding: 16px 0px 16px 0px;
    width: 450px;
    justify-content: space-evenly;
    border-bottom: 1px solid grey;
`;

export const LogoImg = styled.img`
    width: 160px;
    margin-left: ${(props=> !props.visibility ? "0em" : "5em")};
    margin-right: ${(props=> !props.visibility ? "6em" : "0em")};

`;

export const HeartImg = styled.img`
    display: ${(props)=> props.visibility ? "none" : "inline"};
    height: 30px;
    margin-right: 2em;

    :hover{
        transform: scale(0.9);
        transition: all 0.3s ease 0s;
    }
`;

export const HeartCheck = styled.img`
    display: ${(props)=> props.visibility ? "inline" : "none"};
    height: 30px;
    margin-left: 2em;
    
    :hover{
        transform: scale(0.9);
        transition: all 0.3s ease 0s;
    }
`;