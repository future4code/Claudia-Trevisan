import React, { useState, useEffect, Component} from 'react';
import axios from 'axios';
import { useHistory, useParams } from 'react-router-dom'
import { url } from '../../bases/Bases';
import { SectionTrips, Case, Img, DivUser, Button } from '../listTripsPage/Styles';
import ship from '../../img/spaceship.svg';
import {Carousel} from './Styles'
import { goToApplyToTripPage, goToTripDetailPage } from '../../router/GoTo';



export default function TripsList() {
    const history = useHistory();
    const [getTrips, setGetTrips] = useState([]);
    const pathParams = useParams()

    useEffect(() =>{
        axios
        .get(`${url}/trips`)
        .then((response) =>{
            setGetTrips(response.data.trips)
        })
        .catch((error) =>{
            alert(error.message)
        })
    }, []);


    return(
        <SectionTrips>
            <Case>
                <Img src={ship}/>
            </Case>

            {pathParams.option === false ? (
                <Carousel>
                    {getTrips.map((trip) =>{
                        return(
                            <DivUser>
                                <h3>
                                    {trip.name}
                                </h3>
                                <p>
                                    Planeta: {trip.planet}<br/>
                                    {trip.description}<br/>
                                    Data: {trip.date}<br/>
                                    Duração: {trip.durationInDays} dias
                                </p>
                                <Button onClick={()=>goToApplyToTripPage(history, trip.id)}>Increver-se</Button>
                            </DivUser>
                        );
                    })}
                </Carousel>
            ) : (
                <Carousel>
                    {getTrips.map((trip) =>{
                        return(
                            <DivUser>
                                <h3>
                                    {trip.name}
                                </h3>
                                <p>
                                    Planeta: {trip.planet}<br/>
                                    {trip.description}<br/>
                                    Data: {trip.date}<br/>
                                    Duração: {trip.durationInDays} dias
                                </p>
                                <Button onClick={()=>goToTripDetailPage(history, trip.id)}>Detalhes</Button>
                            </DivUser>
                        );
                    })}
                </Carousel>
            )}
        </SectionTrips>
    );
}