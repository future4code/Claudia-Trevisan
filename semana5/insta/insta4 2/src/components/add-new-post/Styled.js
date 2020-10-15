import styled from 'styled-components'

export const BigContainer = styled.div`
    display: flex;
    flex-direction: column;
`

export const NewPostContainer = styled.form`
  display: flex;
  align-items:center;
  flex-direction: column;
  justify-content: center;
  border: 2px solid gray;
  width:50vw;
  margin-bottom: 3.2rem;
  padding: 1.5rem;
  margin-top: 2rem;
  margin-right: 0;
  background-color: #d3d3d3;
  align-self: center;
`;
export const ContainerTitle = styled.div`
    display: flex;
    justify-content: center;
`
export const ButtonAdd = styled.button`
  width: 35vw;
  margin-top: .3rem;
  margin-bottom: .4rem;
  height: 2.5rem;
  font-family: sans-serif;
  font-weight: 700;
  font-size: 1.4rem;
  background-color: #789;

`;
export const WriteSpace = styled.input`
  width: 40vw;
  height: 6vh; 
  padding-left: .5rem;
`;