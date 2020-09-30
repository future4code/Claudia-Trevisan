import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useHistory, useParams } from 'react-router-dom'
import { url } from '../../bases/Bases';
import { SectionTrips, Case, Img, DivUser, Button, Carousel, ImgCreate } from '../listTripsPage/Styles';
import ship from '../../img/spaceship.svg';
import plus from '../../img/plus.svg'
import { goToApplyToTripPage, goToTripDetailPage, goToAddTripPage } from '../../router/GoTo';



export default function TripsList() {
    const history = useHistory();
    const [getTrips, setGetTrips] = useState([]);
    const pathParams = useParams();

    const textButton = pathParams.option === "false" ? "Inscrever-se" : "Detalhes"

    // const functionButton = (tripId) =>{
    //     if(pathParams === "false") {
    //         goToApplyToTripPage(history, tripId)
    //     }
    //     else{
    //         goToTripDetailPage(history, tripId)
    //     }
    // }; 

    const functionRequestGet = () =>{
        axios
        .get(`${url}/trips`)
        .then((response) =>{
            setGetTrips(response.data.trips)
        })
        .catch((error) =>{
            alert(error.message)
        })
    };
    
    useEffect(() =>{
        functionRequestGet()
    }, []);


    return(
        <SectionTrips>
            {pathParams.option === "true" && <ImgCreate src={plus} onClick={()=>goToAddTripPage(history)}/>}
            <Case>
                <Img src={ship}/>
            </Case>

            <Carousel>
                {getTrips.map((trip) =>{
                    return(
                        <DivUser>
                            <h3 key={trip.name}>
                                {trip.name}
                            </h3>
                            <p key={trip.id}>
                                Planeta: {trip.planet}<br/>
                                {trip.description}<br/>
                                Data: {trip.date}<br/>
                                Duração: {trip.durationInDays} dias
                            </p>
                            <Button onClick={pathParams.option === "false" ? ()=>goToApplyToTripPage(history, trip.id) : ()=>goToTripDetailPage(history, trip.id)}>{textButton}</Button>
                        </DivUser>
                    );
                })}
            </Carousel>
        </SectionTrips>
    );
}