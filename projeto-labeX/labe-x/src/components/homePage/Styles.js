import styled from 'styled-components';
import { keyframes } from 'styled-components'

export const Animation = keyframes`
{
  0%,
  100% {
    -webkit-transform: translateY(0);
            transform: translateY(0);
  }
  10%,
  30%,
  50%,
  70% {
    -webkit-transform: translateY(-8px);
            transform: translateY(-8px);
  }
  20%,
  40%,
  60% {
    -webkit-transform: translateY(8px);
            transform: translateY(8px);
  }
  80% {
    -webkit-transform: translateY(6.4px);
            transform: translateY(6.4px);
  }
  90% {
    -webkit-transform: translateY(-6.4px);
            transform: translateY(-6.4px);
  }
}
`;

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100vw;
    min-height: 100vh;
    align-items: center;
    justify-content: unset;
    background-image: linear-gradient(1deg, black, #e9e9e9e0);
    position: relative;
`;

export const DivButton = styled.div`
    margin-top: 7em;
    display: flex;
    flex-direction: column;
    width: 100%;
    justify-content: center;
`;

export const Button = styled.button`
    margin: 18px;
    width: 60%;
    height: 38px;
    font-size: 1.1rem;
    background-color: #f0f8ff;
    border: 1px solid #97adc1;
    cursor: pointer;
    margin-left: 4.2em;
    
    :focus{
        outline: none;
        box-shadow: 0px 1px 4px whitesmoke;
    }
`;

export const Case = styled.div`
    position: absolute;
    bottom: 10em;
`;

export const Img = styled.img`
    width: 100px;
    animation: ${Animation} 12s infinite;
`;


// export const Button = styled.button`
//     margin: 8px;
//     min-width: 70%;
//     outline: none;
//     border:none;
//     background-color: darkorange;
//     border-radius: 10px;
//     height: 28px;
// `;