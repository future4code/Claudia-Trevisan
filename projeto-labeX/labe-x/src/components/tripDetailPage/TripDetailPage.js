import React, { useState, useEffect} from 'react';
import axios from 'axios';
import { useHistory, useParams } from 'react-router-dom';
import { goToAddTripPage, goToHomePage } from '../../router/GoTo';
import { url } from '../../bases/Bases';
import { Carousel } from '../listTripsPage/Styles';
import { DivCandidates, Button } from './Styles'

export default function TripDetail() {
    const history = useHistory();
    const pathParams = useParams();
    const [tripDetail, setTripDetail] = useState({});
    const [decideCandidate, setDecideCandidate] = useState(null)

    const token = localStorage.getItem("token");

    const requestPut = (idCandidate, decide) =>{
        setDecideCandidate(decide)

        const body = {
            aprove: decideCandidate
        }

        axios
        .put(`${url}/trips/${pathParams}/candidates/${idCandidate}/decide`, body,
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

    useEffect(() =>{
        if(!token) {
            goToHomePage(history)
        }
        else{
            axios
            .get(`${url}/trip/${pathParams}`,
            {
                headers:{
                    auth: token
                }
            })
            .then((response) =>{
                console.log(response);
                setTripDetail(response.data)
            })
            .catch((error) =>{
                alert(error.message)
            })
        }
    }, []);


    return(
        <div>
            <div>
                <h3>{tripDetail.name}</h3>
                <p>
                    {tripDetail.planet}<br/>
                    {tripDetail.durationInDays}<br/>
                    {tripDetail.date}
                </p>
            </div>
            {tripDetail.candidates && (
            <Carousel>
                {tripDetail.candidates.map((candidate) =>{
                    return(
                        <DivCandidates>
                            <h4>
                                {candidate.name}
                            </h4>
                            <p>
                                Idade: {candidate.age}<br/>
                                Profissão: {candidate.profession}<br/>
                                País: {candidate.country}<br/>
                                {candidate.applicationText}
                            </p>
                            <Button onClick={()=>requestPut(candidate.id, true)}>Aprovar</Button>
                            <Button onClick={()=>requestPut(candidate.id, false)}>Reprovar</Button>
                        </DivCandidates>
                    );
                })}
            </Carousel>
        )}
            <button onClick={()=>goToAddTripPage(history)}>Criar</button>
        </div>
    );
}