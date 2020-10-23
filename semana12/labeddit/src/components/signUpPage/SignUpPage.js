import axios from 'axios';
import React from 'react';
import { url } from '../../App';
import { useForm } from '../hooksGlobals/Hooks';

export default function SignUpPage () {
    const { form, onChange, resetState } = useForm({username: "", email: "", password: ""});

    const requestPostSignup = () =>{
        const body = {
            email: form.email,
            password: form.password,
            username: form.username
        };
        axios
        .post(`${url}/signup`, body)
        .then((response) =>{
            localStorage.setItem("token", response.data.token);
            localStorage.setItem("user", response.data.user.username)
            resetState()
        })
    };

    const inputChange = (event) =>{
        const { name, value } = event.target;

        onChange(name, value)
    };

    const clickSubmittion = (event) =>{
        event.preventDefault();
        requestPostSignup()
    };

    return(
        <>
            <form onSubmit={clickSubmittion}>
                <input value={form.username}
                onChange={inputChange}
                type="text"
                name="username"
                title="Nome de usuario"
                required
                placeholder="Nome de usuario"
                />
                <input value={form.email}
                onChange={inputChange}
                type="email"
                name="email"
                title="Email"
                required
                placeholder="Email"
                />
                <input value={form.password}
                onChange={inputChange}
                type="password"
                name="password"
                title="Senha"
                required
                placeholder="Senha"
                />
                <button>Cadastrar</button>
            </form>
        </>
    );
}