import React, { useEffect } from 'react';
import axios from 'axios'
import { url } from '../../bases/Bases';
import { goToHomePage, goToAddTripPage } from '../../router/GoTo';
import { useHistory } from 'react-router-dom';
import { useForm } from '../../bases/UseInput';
import { Input, SectionFormAdd, Button, Case, Img, Select, ImgCreate, TextArea } from './Styles';
import ship from '../../img/spaceship.svg';
import plus from '../../img/plus.svg'

const date = new Date()
date.setDate(date.getDate());


export default function AddTrip() {
    const history = useHistory();
    const token = localStorage.getItem("token");
    const { form, onChange, resetState } = useForm({name:"", planet:"", date:"", description:"", durationInDays:""});

    const requestPost = () =>{
        const body = {
            name: form.name,
            planet: form.planet,
            date: form.date,
            description: form.description,
            durationInDays: form.durationInDays
        };

        axios
        .post(`${url}/trips`, body,
        {
            headers:{
                 auth: token
            } 
         })
        .then((response) =>{
            // goToListTripsPage(history, true);
            resetState();
        })
        .catch((error) =>{
            alert(error.message)
        })
    };


    const inputChange = (event) =>{
        const { name, value } = event.target;

        onChange(name, value)
    };

    const clickSubmition = (event) =>{
        event.preventDefault();
        // console.log(form)
        // if(form.date > date){
            requestPost();
        // }
        // else{
        //     alert("Data incorreta")
        // }
    };

    useEffect(() =>{     
        if(!token){
            goToHomePage(history)
        }
    }, []);

    return(
        <>
            <SectionFormAdd onSubmit={clickSubmition}>
                <Input type="text" 
                value={form.name} 
                name="name" 
                onChange={inputChange} 
                pattern="[.\s\w]{5,}" 
                title="No minimo 5 letras" 
                required 
                placeholder="Nome da Viagem"
                />
                <Select value={form.planet} name="planet" onChange={inputChange} placeholder="Planeta" required >
                    <option value="">Planeta</option>
                    <option value="mercurio">
                        Mercúrio
                    </option>
                    <option value="venus">
                        Vênus
                    </option>
                    <option value="marte">
                        Marte
                    </option>
                    <option value="">
                        Jupiter
                    </option>
                    <option value="saturno">
                        Saturno
                    </option>
                    <option value="urano">
                        Urano
                    </option>
                    <option value="netuno">
                        Netuno
                    </option>
                    <option value="plutao">
                        Plutão
                    </option>
                </Select>
                <Input type="date" 
                value={form.date} 
                name="date" 
                onChange={inputChange} 
                title="Data Incorreta" 
                required 
                placeholder="Data"
                />
                <TextArea type="text" 
                value={form.description} 
                name="description" 
                onChange={inputChange}
                pattern="[.\s\w]{30,}" 
                title="Minimo 30 caracteres" 
                required 
                placeholder="Descrição"
                />
                <Input type="number" 
                value={form.durationInDays} 
                name="durationInDays" 
                onChange={inputChange} 
                min= "50"
                required 
                placeholder="Duração em dias"
                />
                <Button>Criar</Button>
            </SectionFormAdd>
            <ImgCreate src={plus} onClick={()=>goToAddTripPage(history)}/>
            <Case>
                <Img src={ship}/>
            </Case>
        </>
    );

}