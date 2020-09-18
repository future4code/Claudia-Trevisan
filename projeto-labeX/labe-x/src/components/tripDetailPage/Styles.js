import styled from 'styled-components'

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
