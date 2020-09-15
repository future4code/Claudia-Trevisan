import React, { useState, useEffect} from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import { GoToListTripsPage, GoToLoginPage } from '../../router/GoTo'
import { Container, Button } from './Styles'

export default function Home() {
    const history = useHistory()

    return(
        <Container>
        <Button onClick={()=> GoToLoginPage(history)}>Login</Button>
        <Button onClick={()=> GoToListTripsPage(history)}>Trips</Button>
        </Container>
    )
}