import React, { useEffect } from 'react';
import { useForm } from '../hooksGlobals/Hooks';
import { useHistory } from 'react-router-dom'
import axios from 'axios';
import { url } from '../../App';
import { goToFeedPage, goToSignUpPage } from '../../router/GoTo'
import { DivForm, DivHome } from './StyledHome';


export default function Home () {
    const history = useHistory();
    const { form, onChange, resetState } = useForm({email:"", password:""});
    let token = localStorage.getItem("token")


    const requestPostLogin = () =>{
        const body= {
            email: form.email,
            password: form.password
        };
        axios
        .post(`${url}/login`, body)
        .then((response) =>{
            localStorage.setItem("token", response.data.token)
            localStorage.setItem("user", response.data.user.username)
            resetState();
            goToFeedPage(history)
        })
        .catch((error) =>{
            alert(error.message)
            resetState()
        })
    };

    const inputChange = (event) =>{
        const { name, value } = event.target;

        onChange(name, value)
    };

    const clickSubmittion = (event) =>{
        event.preventDefault();
        requestPostLogin();
    };
    
    const clickSignUp = () =>{
        goToSignUpPage(history)
    };

    useEffect(() =>{
        if(token){
            goToFeedPage(history)
        }
    }, [history, token])

    return(
        <DivHome>
            <DivForm onSubmit={clickSubmittion}>
                <input value={form.email} 
                name="email" 
                onChange={inputChange} 
                type="email"
                title="email" 
                required 
                placeholder="Email"
                />
                <input value={form.password} 
                name="password" 
                onChange={inputChange} 
                type="password" 
                title="senha" 
                required 
                placeholder="Senha"
                />
                <button>Entrar</button>
            </DivForm>
            <button onClick={clickSignUp}>Cadastrar</button>
        </DivHome>
    );
}