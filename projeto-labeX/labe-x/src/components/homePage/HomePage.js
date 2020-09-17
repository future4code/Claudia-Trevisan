import React, { useState, useEffect} from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import { GoToListTripsPage, GoToLoginPage } from '../../router/GoTo'
import { Container, Case, Img, DivButton, Button } from './Styles'

export default function Home() {
    const history = useHistory();

    return(
        <Container>
            <DivButton>
                <Button onClick={()=> GoToLoginPage(history)}>Login</Button>
                <Button onClick={()=> GoToListTripsPage(history, "user")}>Trips</Button>
                </DivButton>
            <Case>
                <Img src={"spaceship.svg"}/>
            </Case>
        </Container>
    )
}