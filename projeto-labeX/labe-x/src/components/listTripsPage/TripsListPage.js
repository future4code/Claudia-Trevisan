import React, { useState, useEffect} from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { useHistory } from 'react-router-dom'
import { GoToAddTripPage, GoToTripDetailPage } from '../../router/GoTo';

export default function TripsList() {
    const history = useHistory()

    return(
        <>
        <button onClick={()=>GoToAddTripPage(history)}>Create</button>
        <button onClick={()=>GoToTripDetailPage(history)}>Details</button>
        </>
    )
}