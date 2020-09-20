import React, { useState, useEffect} from 'react';
import axios from 'axios';
import { useHistory, useParams } from 'react-router-dom';
import { goToAddTripPage, goToHomePage } from '../../router/GoTo';
import { url } from '../../bases/Bases';
import { Carousel } from '../listTripsPage/Styles';
import { DivCandidates, DivButtons, SectionCandidates, ImgCreate, DivTrip, Case, Img, ImgOk, ImgCancel } from './Styles'
import plus from '../../img/plus.svg';
import ship from '../../img/spaceship.svg';
import ok from '../../img/tick.svg';
import cancel from '../../img/close.svg'

export default function TripDetail() {
    const history = useHistory();
    const pathParams = useParams();
    const [tripDetail, setTripDetail] = useState({});
    const [decideCandidate, setDecideCandidate] = useState(null)

    const token = localStorage.getItem("token");

    const requestPut = (idCandidate, decision) =>{
        setDecideCandidate(decision)

        const body = {
            aprove: decideCandidate
        }

        axios
        .put(`${url}/trips/${pathParams.idTripDetail}/candidates/${idCandidate}/decide`, body,
        {
            headers:{
                auth: token
            }
        })
        .then((response) =>{
            alert("Sucesso!")
        })
        .catch((error) =>{
            alert(error.message)
        })
    };

    const functionRequestGet = () =>{
        axios
            .get(`${url}/trip/${pathParams.idTripDetail}`,
            {
                headers:{
                    auth: token
                }
            })
            .then((response) =>{
                setTripDetail(response.data.trip)
            })
            .catch((error) =>{
                alert(error.message)
            })
    };

    useEffect(() =>{
        if(!token || !pathParams.idTripDetail) {
            goToHomePage(history)
        }
        else{
           functionRequestGet() 
        }
    }, []);


    return(
        <>
            <SectionCandidates>
                <DivTrip>
                    <h4>{tripDetail.name}</h4>
                    <p>
                        Planeta: {tripDetail.planet}<br/>
                        Duração: {tripDetail.durationInDays} dias<br/>
                        Data: {tripDetail.date}
                    </p>
                </DivTrip>
                {tripDetail.candidates && (
                <Carousel>
                    {tripDetail.candidates.map((candidate) =>{
                        return(
                            <DivCandidates>
                                <h4 key={candidate.name}>
                                    {candidate.name}
                                </h4>
                                <p key={candidate.id}>
                                    Idade: {candidate.age}<br/>
                                    Profissão: {candidate.profession}<br/>
                                    País: {candidate.country}<br/>
                                    {candidate.applicationText}
                                </p>
                                <DivButtons>
                                    <ImgOk src={ok} onClick={()=>requestPut(candidate.id, true)}/>
                                    <ImgCancel src={cancel} onClick={()=>requestPut(candidate.id, false)}/>
                                </DivButtons>
                            </DivCandidates>
                        );
                    })}
                </Carousel>
                )}
            </SectionCandidates>
            <ImgCreate src={plus} onClick={()=>goToAddTripPage(history)}/>
            <Case>
                <Img src={ship}/>
            </Case>
        </>    
    );
}