import React from 'react';
import styled from 'styled-components'

export const ContainerMatches = styled.div`
    display: flex;
    flex-direction: column;
    width: 450px;
    height: 70vh;

    ul{
        list-style: none;
        padding-left: 10px;

        li{
            margin: 20px;
            position: relative;

            :hover{
                background-color: darkgray;
            }

            p{
                display: inline;
                position: absolute;
                margin-left: 16px;
            }
        }
    }
`;

export const Img = styled.img`
    width: 60px;
    height: 60px;
    border-radius: 80px;
`;

