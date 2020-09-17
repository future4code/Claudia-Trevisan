import React, { useState, useEffect} from 'react';
import axios from 'axios';
import { useHistory, useParams } from 'react-router-dom'
import { GoToAddTripPage, GoToTripDetailPage } from '../../router/GoTo';
import { url } from '../../bases/Bases';
import { SectionTrips, Case, Img, DivUser, DivDefault, Button } from '../listTripsPage/Styles';

export default function TripsList() {
    const history = useHistory();
    const pathParams = useParams()
    const [getTrips, setGetTrips] = useState([])
    const [stateDetails, setStateDetails] = useState("")

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

    const handleClick = (id) =>{
        setStateDetails(id)
    };


    return(
        <SectionTrips>
            <Case>
                <Img src={"spaceship.png"}/>
            </Case>

            {pathParams.option === "default" ? (
                <DivDefault>
                    {getTrips.map((trip) =>{
                        return(
                            <div>
                                <p>{trip.name}</p>
                                <Button onClick={()=>GoToTripDetailPage(history,trip.id)}>Details</Button>
                            </div>
                        )
                    })}
                    <button onClick={()=>GoToAddTripPage(history)}>Create</button>
                </DivDefault>
            ) : (
                <div>
                    {stateDetails ? ( 
                        <DivUser>
                            {getTrips.map((trip) =>{
                                return(
                                    <div>
                                        <h3>
                                            {trip.name}
                                        </h3>
                                        <p>
                                            Planeta: {trip.planet}<br/>
                                            {trip.description}<br/>
                                            Data: {trip.date}<br/>
                                            Duração: {trip.durationInDays} dias
                                        </p>
                                        <Button>Candidatar</Button>
                                    </div>
                                )
                            })}
                        </DivUser>
                    ) : (
                        <DivUser>
                            {getTrips.map((trip) =>{
                                return(
                                    <div>
                                        <p>{trip.name}</p>
                                        <Button onClick={()=>handleClick(trip.id)}>Details</Button>
                                    </div>
                                )
                            })}
                        </DivUser>
                    )}
                </div>
            )}
        </SectionTrips>
    );
}