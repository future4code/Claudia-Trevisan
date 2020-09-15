import React, { useState, useEffect} from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import { GoToApplyToTripPage } from '../../router/GoTo';

export default function TripDetail() {
    const history = useHistory()

    return(
        <>
        <button onClick={()=>GoToApplyToTripPage(history)}>Inscricao</button>
        </>
    )
}