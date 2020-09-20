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

export const DivCandidates = styled.div`
    display: flex;
    flex-direction: column;
    padding-bottom: 10px;

    h4{
        text-align: center;
        color: #f3ddff;
    }
    p{
        text-align: center;
        color: #d2fc90;
        font-size: 1.1rem;
        margin: 8px;
    };

    @media (min-width: 990px){
        h4{
            font-size: 1.4rem;
        };

        p{
            font-size: 1.5rem;
        }
    }
`;

export const SectionCandidates = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 5em;
`;

export const DivTrip = styled.div`
    display: flex;
    flex-direction: column;
    border: 1px solid;
    padding: 5px;
    margin-bottom: 8px;
    background-color: #d8e1e3;
    border-radius: 8px;
    width: 200px;

    h4{
        margin: 0;
        text-align: center;
    };

    p{
        margin: 0;
        margin-left: 20px;
        margin-top: 6px;    
    };

    @media (min-width: 840px){
        width: 300px;

        p{
            font-size: 1.2rem;
        }
    }
`;

export const ImgCreate = styled.img`
    height: 30px;
    position: absolute;
    top: 1.3em;
    right: 2em;
    cursor: pointer;
`;

export const Case = styled.div`
    position: absolute;
    left: 10em;
    bottom: 5em;

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

export const DivButtons = styled.div`
    display: flex;
    justify-content: space-evenly;
    margin: 20px;
`;

export const ImgOk = styled.img`
    width: 40px;
`;

export const ImgCancel = styled.img`
    width: 33px;
`
