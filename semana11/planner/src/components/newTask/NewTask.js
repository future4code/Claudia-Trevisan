import React from 'react';
import { url, useForm } from '../base/Base';
import axios from 'axios';

export default function Newtask() {
    const { form, onChange, resetState } = useForm({task: "", weekDay: ""});
    
    const requestPost = () =>{
        const body = {
            text: form.task,
            day: form.weekDay
        };
        axios
        .post(url, body)
        .then((response) =>{
            resetState();
        })
        .catch((error) =>{
            alert(error.message)
        })
    };

    const handleChange = (event) =>{
        const { name, value } = event.target;

        onChange(name, value);
    };

    const handleSubmittion = (event) =>{
        event.preventDefault();
        requestPost()
    };

    return(
        <div>
            <form onSubmit={handleSubmittion}>
                <input type= "text"
                value={form.task}
                name= "task"
                onChange={handleChange}
                placeholder="Nova tarefa"
                required
                />
                <select value={form.weekDay} name="weekDay" onChange={handleChange} required>
                    <option value="">Selecione o dia</option>
                    <option value="segunda">Segunda-feira</option>
                    <option value="terca">Terça-feira</option>
                    <option value="quarta">Quarta-feira</option>
                    <option value="quinta">Quinta-feira</option>
                    <option value="sexta">Sexta-feira</option>
                    <option value="sabado">Sabado</option>
                    <option value="domingo">Domingo</option>
                </select>
                <button>Criar</button>
            </form>
        </div>
    );
}