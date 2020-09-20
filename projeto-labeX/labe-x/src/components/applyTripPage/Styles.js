import styled from 'styled-components';
import { Animation } from '../homePage/Styles';


export const SectionForm = styled.form`
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
    }
`;

export const TextArea = styled.textarea`
    height: 60px;
    width: 70%;
    margin: 9px;
    padding: 20px;
    font-size: 1.2rem;

    ::placeholder{
        font-size: 1.2rem;
    }
`;

 export const Select = styled.select`
    height: 55px;
    width: 82%;
    margin: 9px;
    padding-left: 20px;
    font-size: 1.2rem;
 ;`

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
  }
`;

export const Case = styled.div`
    position: absolute;
    left: 10em;
    bottom: 3.3em;
`;    

export const Img = styled.img`
    width: 50px;
    animation: ${Animation} 12s infinite;
`;
