import React, { useState, useEffect} from 'react';
import axios from 'axios';
import { useForm } from '../../bases/UseInput';
import { SectionFormLogin, Input, Button, Case, Img } from './Styles'
import { useHistory } from 'react-router-dom';
import { goToListTripsPage } from '../../router/GoTo';
import { url } from '../../bases/Bases'
import ship from '../../img/spaceship.svg'


export default function Login() {
    const history = useHistory();
    const { form, onChange, resetState } = useForm({email:"", password: ""})

    const inputChange = (event) =>{
        const { name, value } = event.target;

        onChange(name, value)
    };

    const clickSubmition = (event) =>{
        event.preventDefault();
        requestPost();
        console.log(form)
    };

    useEffect(() =>{
        const token = localStorage.getItem("token");
        
        if(token){
            goToListTripsPage(history, true);
        }
    }, []);

    const requestPost = () =>{
        const body = {
            email: form.email,
            password: form.password
        };
        axios
        .post(`${url}/login`, body)
        .then((response) =>{
            localStorage.setItem("token", response.data.token);
            goToListTripsPage(history, true);
            resetState();
        })
        .catch((error) =>{
            alert(error.message)
        })
    };

    return(
        <div>
            <SectionFormLogin onSubmit={clickSubmition}>
                <Input value={form.email} name="email" onChange={inputChange} type="email" title="Email inválido" required placeholder={"Email"}/>
                <Input value={form.password} name="password" onChange={inputChange} type="password" placeholder={"Senha"}/>
                <Button>Login</Button>
            </SectionFormLogin>
            <Case>
                <Img src={ship}/>
            </Case>
        </div>
    );
}

