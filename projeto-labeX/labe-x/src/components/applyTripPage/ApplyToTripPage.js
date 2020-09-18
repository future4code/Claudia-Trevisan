import React, { useState, useEffect} from 'react';
import axios from 'axios'
import { useHistory, useParams } from 'react-router-dom';
import { useForm } from '../../bases/UseInput';
import { url } from '../../bases/Bases';

export default function ApplyToTrip() {
    const history = useHistory();
    const pathParams = useParams();
    const { form, onChange, resetState } = useForm({name:"", age:"", applicationText:"", profession:"", country:""});
    const [countries, setCountries] = useState([])

    const requestGet = () =>{
        axios
        .get("https://restcountries.eu/rest/v2/all")
        .then((response) =>{
            setCountries(response.data)
        })
        .catch((error) =>{
            alert(error.message)
        })
    };

    const requestPost = () =>{  
        const body = {
            name: form.name,
            age: form.age,
            applicationText: form.applicationText,
            profession: form.profession,
            country: form.country
        };

        axios
        .post(`${url}/trips/${pathParams}/apply`, body)
        .then((response) =>{
            alert("Inscrição realizada com sucesso")
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
        requestPost()
    };

    useEffect(()=>{
        requestGet()
        console.log(pathParams)

    }, [])

    return(
        <form onSubmit={clickSubmition}>
            <input type="text" 
            value={form.name} 
            name="name" 
            onChange={inputChange} 
            pattern="[A-Za-z]{3,}" 
            title="No minimo 3 letras" 
            required 
            placeholder="Nome"
            />
            <input type="number" 
            value={form.age} 
            name="age" 
            onChange={inputChange} 
            min= "18"
            required 
            placeholder="Idade"
            />
            <input type="text" 
            value={form.applicationText} 
            name="applicationText" 
            onChange={inputChange}
            // pattern="[A-Za-z]{30,}" 
            minLength="30"
            title="Minimo 30 caracteres" 
            required 
            placeholder="Porque devemos te escolher"
            />
            <input type="text" 
            value={form.profession} 
            name="profession" 
            onChange={inputChange}
            pattern="[A-Za-z]{10,}" 
            title="Minimo 10 caracteres" 
            required 
            placeholder="Profissão"
            />
            <select name="country"
            value={form.country}
            onChange={inputChange}
            placeholder="País"
            required>
                <option value=""></option>
                {countries.map((country)=>{
                    return(
                    <option id={country.name} value={country.name}>{country.name}</option>
                    )
                })}
            </select>
            <button>Inncrever-se</button>
        </form>    
    )
}