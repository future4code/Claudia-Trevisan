import React, { useState } from 'react';

export const useInput = () =>{
    const [data, setData] = useState("")

    const onChangeInput = (event) =>{
        setData(event.target.value)
    };

    return [data, onChangeInput];
}