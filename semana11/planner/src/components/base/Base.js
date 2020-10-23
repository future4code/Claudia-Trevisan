import React, { useState } from 'react';


export const useForm = (initialState) =>{
    const [form, setForm] = useState(initialState)

    const onChange = (name, value) =>{
        const newForm = {...form, [name]: value};

        setForm(newForm)
    };

    const resetState = () =>{
        setForm(initialState)
    };

    return {form, onChange, resetState}
};

export const url = "https://us-central1-labenu-apis.cloudfunctions.net/generic/planner-jackson-claudia"