import React from 'react'
import axios from "axios"
import styled from "styled-components"

const ContainerEditUser = styled.div`
    border: 1px solid;
`

export default class UserDetail extends React.Component{
    state = {
        name: "",
        email: ""
    };

    userDetail = (userId) =>{
        const request = axios.get(`${baseUrl}/${userId}`,axiosConfig);
        request
        .then((response) =>{
            this.setState({name: response.name, email: response.email})
        }).catch((error) =>{
            alert("Ocorreu um erro")
        });
     };
 

    render (){

        return(
            <ContainerEditUser>
                Hello World
            </ContainerEditUser>
        )
    

    };
}