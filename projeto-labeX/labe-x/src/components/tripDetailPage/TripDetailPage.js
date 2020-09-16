import React, { useState, useEffect} from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import { GoToApplyToTripPage, GoToHomePage } from '../../router/GoTo';

export default function TripDetail() {
    const history = useHistory()

    useEffect(() =>{
        const token = localStorage.getItem("token");

        if(token) {
            return(
                <>
                <button>Criar</button>
                </>
            )
        }
        else{
            GoToHomePage(history)
        }
    }, []);
}