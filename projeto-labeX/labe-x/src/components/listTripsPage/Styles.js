import styled from 'styled-components';
import { Animation } from '../homePage/Styles'

export const SectionTrips = styled.section`
    margin-top: 4em;
    margin-left: 2em;
`;

export const Case = styled.div`
    position: absolute;
    bottom: 8em;
    left: 9.3em;
`;
    
export const Img = styled.img`
    width: 80px;
    animation: ${Animation} 12s infinite;
`;


export const DivUser = styled.div`
    display: flex;
    flex-direction: column;
    margin: 10px 0px 0px 20px;

    div{
        border: 1px solid white;
        width: 270px;
        margin: 15px;
        margin-left: 0;

        p{
            text-align: center;
            color: #d2fc90;
            font-size: 1.1rem;
            margin-left: .5em;
            margin-right: .5em;
        }
    }
`;

export const Button = styled.button`
    margin: 8px;
    width: 35%;
    font-size: 1.06rem;
    background-color: #f0f8ff;
    border: 1px solid #97adc1;
    cursor: pointer;
    margin-left: 5em;
    
    :focus{
        outline: none;
        box-shadow: 0px 1px 4px whitesmoke;
    }
`;


export const DivDefault = styled.div`
    
`