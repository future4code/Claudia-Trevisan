import React, { useState, useEffect} from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { DivHeader, Img } from './Styles';
import { goBack } from '../../router/GoTo'
import { useHistory } from 'react-router-dom';
import back from '../../img/back.svg'


export default function Header() {
    const history = useHistory()

    return(
        <DivHeader>
            <Img src={back} alt={"Voltar"} onClick={()=>goBack(history)}/>
        </DivHeader>
    )
}