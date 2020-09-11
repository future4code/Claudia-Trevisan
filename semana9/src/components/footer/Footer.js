import React, { useState, useEffect } from 'react';
import axios from 'axios'
import { DivFooter, Button } from './Styles'

export default function Footer() {

    const putClear = () =>{
        const body={
            id:""
        }

        const request = axios
        .put('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/claudia/clear',
            body
        )

        request
        .then((response) =>{
        })
        .catch((error) =>{
            alert(error.message)
        })
    };

    const buttonClear = () =>{
        putClear()
    }


    return(
        <DivFooter>
            <Button src={"hot-tea.svg"} alt="Limpar Matches e swipes" onClick={buttonClear}/>
        </DivFooter>
    )
}