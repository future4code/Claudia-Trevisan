import React, { useState, useEffect} from 'react';
import axios from 'axios';
import { useInput } from '../../bases/useInput';
import { SectionFormLogin, Input, Button } from './Styles'
import { useHistory } from 'react-router-dom';
import PageDefault from '../pageDefault/PageDefault';
import { GoToHomePage, GoToListTripsPage } from '../../router/GoTo';
import { url } from '../../bases/Bases'


export default function Login() {
    const [email, setEmail] = useInput();
    const [password, setPassword] = useInput();
    const history = useHistory()

    useEffect(() =>{
        const token = localStorage.getItem("token");
        
        if(token){
            GoToListTripsPage(history, "default")
        }
        else{
            GoToHomePage(history)
        }
    }, []);

    const requestPost = () =>{
        const body = {
            email: email,
            password: password
        };
        axios
        .post(`${url}/login`, body)
        .then((response) =>{
            localStorage.setItem("token", response.data.token);
            GoToListTripsPage(history, "default")
        })
        .catch((error) =>{
            alert(error.message)
        })
    };

    return(
        <PageDefault>
            <SectionFormLogin>
                <Input value={email} onChange={setEmail} placeholder={"Email"}/>
                <Input value={password} onChange={setPassword} placeholder={"Senha"}/>
                <Button onClick={requestPost}>Login</Button>
            </SectionFormLogin>
        </PageDefault>
    );
}

