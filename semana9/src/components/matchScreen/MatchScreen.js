import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { ContainerMatches, Img, } from './styles'


export default function MatchScreen (props) {
    const [matches, setMatches] = useState([])

    const getMatches = () =>{
        const request = axios
        .get('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/claudia/matches')

        request
        .then((response) =>{
            setMatches(response.data.matches)
        })
        .catch((error) =>{
            alert(error.message)
        })
    };

    useEffect(() =>{
        getMatches()
    }, [])


    return(
        <ContainerMatches>
            <ul>
                {matches.map((matche) =>{
                    return(
                        <li key={matche.id}>
                        <Img src={matche.photo} alt={matche.name}/><p>{matche.name}</p>
                        </li>
                    )
                })}            
            </ul>
        </ContainerMatches>
    )
}