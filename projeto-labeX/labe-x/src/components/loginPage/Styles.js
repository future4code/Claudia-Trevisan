import styled from 'styled-components'
import { Animation } from '../homePage/Styles'


export const SectionFormLogin = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100vw;
    min-height: 100vh;
    margin: 0px;
    justify-content: center;

    @media (min-width: 440px){
      max-width:75vw;
      align-self: center;
    }
`;

 export const Input = styled.input`
    height: 55px;
    width: 75%;
    margin: 9px;
    padding-left: 20px;
    font-size: 1.2rem;

    ::placeholder{
        font-size: 1.3rem;
    };

    @media (min-width: 440px){
        max-width: 70%;
    };

    @media (min-width: 800px){
        max-width: 40%;
    }
 `;

 export const Button = styled.button`
    margin: 18px;
    width: 50%;
    height: 28px;
    font-size: 1.1rem;
    background-color: #f0f8ff;
    border: 1px solid #97adc1;
    cursor: pointer;
    margin-bottom: 8rem;

    :focus{
        outline: none;
        box-shadow: 0px 1px 4px whitesmoke;
    }

    @media (min-width: 800px){
        max-width: 30%;
    }
 `;

export const Case = styled.div`
    position: absolute;
    bottom: 8em;
    left: 9.3em;

    /* @media (min-width: ){

    } */
`;
    
export const Img = styled.img`
    width: 80px;
    animation: ${Animation} 12s infinite;
`;
    