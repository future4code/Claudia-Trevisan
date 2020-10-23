import styled from 'styled-components'

export const DivHome = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 95vh;
    padding: 16px;
    align-items: center;
    justify-content: center;

    button{
        width: 150px;
        height: 40px;
        align-self:center;
        font-weight: 550;
        font-size: 20px;    
    }
`;

export const DivForm = styled.form`
    display: flex;
    flex-direction: column;
    width: 60%;
    margin-bottom: 33px;

    input{
        height: 60px;
        margin-bottom: 10px;
        padding-left: 18px;
        font-size: 22px;

        ::placeholder{
        font-size: 16px;
        }
    };
    button{
        width: 120px;
        height: 40px;
        align-self:center;
        font-weight: 550;
        font-size: 20px;    
    }
`;