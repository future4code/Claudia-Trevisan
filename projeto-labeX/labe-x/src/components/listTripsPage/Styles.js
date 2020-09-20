import styled from 'styled-components';
import { Animation } from '../homePage/Styles';
import SlickSlider from 'react-slick'
import React from 'react'

const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 85%;
    background-color: black;
    background-color: #3a3636;
    border-radius: 10px;

    @media (min-width: 440px){
        margin-top: 5em;
        max-width: 70%;
    };

    @media (min-width: 800px){
        max-width: 40%;
    };

    @media (min-width: 990px){
        max-width: 60%;
    }

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
    margin-top: 8em;

    @media (min-width: 800px){
        margin-top: 3em;
    }
`;

export const Case = styled.div`
    position: absolute;
    left: 10em;
    bottom: 6em;

    @media (min-width: 440px){
        left: 13em;
    };
    @media (min-width: 600px){
        left: 18em;
    };

    @media (min-width: 800px){
        left: 26em;
    };

    @media (min-width: 990px){
        left: 37em;
    };

    @media (min-width: 1024px){
        left: 50em;
    }

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

    @media (min-width: 990px){
        h3{
            font-size: 2rem;
        };

        p{
            font-size: 1.7rem;
        }
    }
`;

export const Button = styled.button`
    width: 40%;
    font-size: 1rem;
    background-color: #f0f8ff;
    border: 1px solid #97adc1;
    cursor: pointer;
    margin-left: 6em;
    margin-top: 19px;
    
    :focus{
        outline: none;
        box-shadow: 0px 1px 4px whitesmoke;
    };

    @media (min-width: 440px){
        margin-left: 7.5em;
    };

    @media (min-width: 600px){
    };

    @media (min-width: 800px){
        margin-left: 2.8em;
        min-width: 25vw;
        height: 37px;
        font-size: 1.4rem;
    };

    @media (min-width: 1010px){
        margin-left: 13.2em;
    };
`;

export const ImgCreate = styled.img`
    height: 30px;
    position: absolute;
    top: 1.3em;
    right: 2em;
`;

export const DivDefault = styled.div`
    
`