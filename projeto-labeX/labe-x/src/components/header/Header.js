import React from 'react';
import { DivHeader, Img } from './Styles';
import { goBack } from '../../router/GoTo'
import { useHistory, useParams } from 'react-router-dom';
import back from '../../img/back.svg';



export default function Header() {
    const history = useHistory()



    return(
        <DivHeader>
            <Img src={back} alt={"Voltar"} onClick={()=>goBack(history)}/>
        </DivHeader>
    );
}