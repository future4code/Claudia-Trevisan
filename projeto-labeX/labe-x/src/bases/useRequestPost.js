import React, { useState } from 'react';
import axios from 'axios'

export function useRequestPost(url, email, password,){

    const body = {
        email: email,
        password: password
    };
    
    axios
    .post(url,
        body
        )
    .then((response)=>{
       alert(response.data.token)
    })
    .catch((error)=>{
       alert(error.message)
    });

}