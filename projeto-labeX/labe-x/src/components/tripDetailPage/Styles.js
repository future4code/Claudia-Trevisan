import styled from 'styled-components'
import { Animation } from '../homePage/Styles';

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

export const ImgCreate = styled.img`
    height: 30px;
    position: absolute;
    top: 1.3em;
    right: 2em;
`;

export const Case = styled.div`
    position: absolute;
    left: 10em;
    bottom: 5em;
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
