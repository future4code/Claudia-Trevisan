import React, { useState, useEffect } from 'react';
import { DivHeader, LogoImg, HeartImg, HeartCheck } from './Styles'


export default function Header(props) {

    
    return(
        <DivHeader>
            <HeartImg src={"love.svg"} visibility={props.visibility} onClick={props.onClickButton}></HeartImg>
            <LogoImg src={"astromatch1.svg"} visibility={props.visibility}/>
            <HeartCheck src={"like.svg"} visibility={props.visibility} onClick={props.onClickButton}></HeartCheck>
        </DivHeader>
    )
}