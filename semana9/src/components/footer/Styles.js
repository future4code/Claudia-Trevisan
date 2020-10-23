import React from 'react';
import styled from 'styled-components'

export const DivFooter = styled.footer`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    padding-top: 10px;
    padding-bottom: 10px;
`;

export const Button = styled.img`
    height: 43px;

    :hover{
        transform: scale(1.2);
        transform: rotate(-140deg);
        transition: all 0.3s ease 0s;
    }
`;