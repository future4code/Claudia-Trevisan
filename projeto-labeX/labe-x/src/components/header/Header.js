import React, { useState, useEffect} from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { DivHeader, Img } from './Styles';
import { GoBack } from '../../router/GoTo'
import { useHistory } from 'react-router-dom';

export default function Header() {
    const history = useHistory()

    return(
        <DivHeader>
            <Img src={"back.svg"} alt={"Voltar"} onClick={()=>GoBack(history)}/>
        </DivHeader>
    )
}