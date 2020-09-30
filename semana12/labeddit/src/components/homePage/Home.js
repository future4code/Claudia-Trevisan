import React, { useEffect } from 'react';
import { useForm } from '../hooksGlobals/Hooks';
import { useHistory } from 'react-router-dom'

const token = localStorage.getItem("token")

export default function Home () {
    const history = useHistory();
    const { form, onChange, resetState } = useForm({email:"", password:""})

    const inputChange = (event) =>{
        const { name, calue } = event.target;

        onChange(name, value)
    };

    const clickSubmittion = (event) =>{
        event.preventDefault();
        goToFeedPage(history)
    };
    
    const clickSignUp = () =>{
        goToSignUpPage(history)
    };

    useEffect(() =>{
        if(token){
            goToFeedPage(history)
        }
    }, [token])

    return(
        <div>
            <form onSubmit={clickSubmittion}>
                <input value={form.email} 
                name="email" 
                onChange={inputChange} 
                type={"email"} title="email" 
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
                <buton>Entrar</buton>
            </form>
            <button onClick={clickSignUp}>Cadastrar</button>
        </div>
    );
}