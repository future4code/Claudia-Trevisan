import styled from 'styled-components'

export const SectionFormLogin = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100vw;
    min-height: 87vh;
    margin: 0px;
    justify-content: center;
    position: relative;
    background-image: linear-gradient(1deg, black, #e9e9e9e0);
`;

 export const Input = styled.input`
    height: 55px;
    width: 75%;
    margin: 9px;
    padding-left: 20px;
    font-size: 1.2rem;

    ::placeholder{
        font-size: 1.3rem;
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

    :focus{
        outline: none;
        box-shadow: 0px 1px 4px whitesmoke;
    }
 `;