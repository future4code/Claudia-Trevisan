import React, { useState, useEffect} from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import { goToListTripsPage, goToLoginPage } from '../../router/GoTo'
import { Container, Case, Img, DivButton, Button } from './Styles'
import ship from '../../img/spaceship.svg'

export default function Home() {
    const history = useHistory();

    return(
        <Container>
            <DivButton>
                <Button onClick={()=> goToLoginPage(history)}>Login</Button>
                <Button onClick={()=> goToListTripsPage(history, false)}>Trips</Button>
                </DivButton>
            <Case>
                <Img src={ship}/>
            </Case>
        </Container>
    )
}