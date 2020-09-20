import styled from 'styled-components'
import { Animation } from '../homePage/Styles';

export const SectionFormAdd = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100vw;
    min-height: 100vh;
    margin: 0px;
    justify-content: center;
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
        max-width: 60%;
    };

    @media (min-width: 640px){
        max-width: 43%;
    };

    @media (min-width: 850px){
        max-width: 35%;
    };

    @media (min-width: 940px){
        max-width: 25%;
    }
`;

export const TextArea = styled.textarea`
    height: 60px;
    width: 70%;
    margin: 9px;
    padding: 20px;
    font-size: 1.2rem;
    word-wrap: break-word;

    ::placeholder{
        font-size: 1.3rem;
    };

    @media (min-width: 440px){
        max-width: 56%;
    };

    @media (min-width: 640px){
        max-width: 41%;
    };

    @media (min-width: 850px){
        max-width: 33.5%;
    };

    @media (min-width: 940px){
        max-width: 24%;
    }

`;

 export const Select = styled.select`
    height: 55px;
    width: 82%;
    margin: 9px;
    padding-left: 20px;
    font-size: 1.2rem;

    @media (min-width: 440px){
        max-width: 66%;
    };

    @media (min-width: 640px){
        max-width: 46%;
    };

    @media (min-width: 850px){
        max-width: 37.5%;
    };

    @media (min-width: 940px){
        max-width: 26.5%;
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
  margin-bottom: 4.3rem;

    :focus{
      outline: none;
      box-shadow: 0px 1px 4px whitesmoke;
    };

    @media (min-width: 640px){
        max-width: 35%;
    };

    @media (min-width: 850px){
        max-width: 27%;
    };

    @media (min-width: 940px){
        max-width: 18%;
    }
`;

export const Case = styled.div`
    position: absolute;
    left: 10em;
    bottom: 3.3em;

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

export const ImgCreate = styled.img`
    height: 30px;
    position: absolute;
    top: 1.3em;
    right: 2em;
    cursor: pointer;
`;

