import React from 'react'
// import axios from "axios"
import styled from "styled-components"

const ContainerUsersList = styled.div`
    border: 1px solid;
`;

export default class UsersList extends React.Component{
    

    render(){
        return(
            <ContainerUsersList>
                <h3>Usuários Cadastrados:</h3>
            </ContainerUsersList>
        )
    }
};

