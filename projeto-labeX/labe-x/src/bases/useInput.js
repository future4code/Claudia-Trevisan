import React, { useState } from 'react';

export const useInput = () =>{
    const [data, setData] = useState("")

    const onChangeInput = (event) =>{
        setData(event.target.value)
    };

    return [data, onChangeInput];
};

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