import React from 'react'
import axios from "axios"
import styled from "styled-components"
import UserDetail from './UserDetail'
import { axiosConfig, baseUrl } from './ConfigApi';




const ContainerUsersList = styled.div`
    border: 1px solid;
`;

const DeleteButton = styled.span`
    color: red;
`;

export default class UsersList extends React.Component{
    state ={
        users:[],
    };

    componentDidMount = () =>{
        this.getUsers()
    };

    getUsers = () =>{
        const request = axios.get(baseUrl, axiosConfig);
    
        request
        .then((response) =>{
            this.setState({users: response.data})
        }).catch((error) =>{
            alert("Ocorreu um erro")
        });
      };
      
    deleteUser = (userId) =>{
       const question = window.confirm("Tem certeza que deseja deletar?")
        if(question){
            const request = axios.delete(`${baseUrl}/${userId}`,axiosConfig);
            request
            .then((response) =>{
                this.getUsers()
            }).catch((error) =>{
                alert("Ocorreu um erro")
            });
        }else{
            alert("Operação cancelada")
        }
    };

    render(){
        
        return(
            <ContainerUsersList>
                <h3>Usuários Cadastrados:</h3>
                {this.state.users.map(user =>{
                    return(
                        <div key={user.id}>
                            <div onClick={this.props.functionOnClick}>
                                {user.name}
                            </div>
                            <DeleteButton onClick={() =>this.deleteUser(user.id)}> X</DeleteButton>
                        </div>
                    )
                })}
            </ContainerUsersList>
        )
    }
};

