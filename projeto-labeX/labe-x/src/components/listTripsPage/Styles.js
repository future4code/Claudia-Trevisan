import styled from 'styled-components';
import { Animation } from '../homePage/Styles';
import SlickSlider from 'react-slick'
import Slider from 'react-slick';
import React from 'react'

const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 85%;
    background-color: black;
    background-color: #3a3636;
    border-radius: 10px;
`;  

export const Carousel = ({children}) =>{
    return(
        <Container>
        <SlickSlider {...{
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
        }}>
            {children}
        </SlickSlider>
        </Container>
    )
};

export const SectionTrips = styled.section`
    display: flex;
    justify-content: center;
    margin-top: 10em;
`;

export const Case = styled.div`
    position: absolute;
    left: 10em;
    bottom: 6em;
`;    

export const Img = styled.img`
    width: 50px;
    animation: ${Animation} 12s infinite;
`;


export const DivUser = styled.div`
    display: flex;
    flex-direction: column;
    padding-bottom: 10px;

    h3{
        text-align: center;
        color: #f3ddff;
    }
    p{
        text-align: center;
        color: #d2fc90;
        font-size: 1.1rem;
        margin: 8px;
    }

`;

export const Button = styled.button`
    width: 35%;
    font-size: 1.06rem;
    background-color: #f0f8ff;
    border: 1px solid #97adc1;
    cursor: pointer;
    margin-left: 6em;
    margin-top: 19px;
    
    :focus{
        outline: none;
        box-shadow: 0px 1px 4px whitesmoke;
    }
`;


export const DivDefault = styled.div`
    
`