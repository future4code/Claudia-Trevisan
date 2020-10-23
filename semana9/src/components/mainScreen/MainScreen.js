import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, ContainerCard, CardBack, Img, DivP, PanelButton } from './Styles';




export default function MainScreen(){
    const [profile, setProfile] = useState({})
    const [choice, setChoice] = useState(false)
    const [idChoice, setIdChoice] = useState("")

    const getMain = () =>{
        const request = axios
        .get('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/claudia/person')

        request
        .then((response) =>{
            setProfile(response.data.profile)
        })
        .catch((error) =>{
            alert(error.message)
        })
    };

    const postChoice = () =>{
        const body ={
            id: idChoice,
            choice: choice
        }

        const request = axios
        .post('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/claudia/choose-person',
            body
        )

        request
        .then((response) =>{
        })
        .catch((error) =>{
            alert(error.message)
        })
    };

    const onClickChose = (id, choice) =>{
        setIdChoice(id)
        setChoice(choice)
        postChoice()
        getMain()
    };

    useEffect(() =>{
        getMain()
    }, []);

    return(
        <Container>
            <ContainerCard>
                <CardBack src={profile.photo}></CardBack>

                <Img src={profile.photo} alt={profile.name}/>
                <DivP>              
                    <p>{profile.name} {profile.age}</p>
                    <p>{profile.bio}</p>
                </DivP>
            </ContainerCard>
            <PanelButton>
                <img src={"broken-heart.png"} onClick={()=> onClickChose(profile.id, false)}></img>
                <img src={"heart.png"} onClick={()=> onClickChose(profile.id, true)}></img>
            </PanelButton>
        </Container>
    )
}