import React, { useState, useEffect} from 'react';
import styled from 'styled-components';
import axios from 'axios'
import { url } from '../../bases/Bases';
import { GoToHomePage } from '../../router/GoTo';
import { useHistory } from 'react-router-dom';

export default function AddTrip() {
    const history = useHistory()

    useEffect(() =>{
        const token = localStorage.getItem("token");
        
        if(!token){
            GoToHomePage(history)
        }
    }, []);

    return(
        <>
        Formulario
        </>
    )

}