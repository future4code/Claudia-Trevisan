import React, { useState, useEffect} from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { useHistory, useParams } from 'react-router-dom'
import { GoToAddTripPage, GoToTripDetailPage } from '../../router/GoTo';
import PageDefault from '../pageDefault/PageDefault';
import { url } from '../../bases/Bases'
import { useRequestGet } from '../../bases/useRequestGet';

export default function TripsList() {
    const history = useHistory();
    const pathParams = useParams()
    const [getTrips, setGetTrips] = useRequestGet(`${url}/trips`, [])

    useEffect(() =>{
        setGetTrips(useRequestGet)
    }, [])


    return(
        <PageDefault>
            {pathParams.option === "default" ? (
                <div>
                    {getTrips.map((trip) =>{
                        return(
                            <div>
                                <p>{trip.name}</p>
                                <button onClick={()=>GoToTripDetailPage(history,trip.id)}>Details</button>
                            </div>
                        )
                    })}
                    <button onClick={()=>GoToAddTripPage(history)}>Create</button>
                </div>
            ) : (
                <div>
                    {getTrips.map((trip) =>{
                        return(
                            <div>
                                <p>{trip.name}</p>
                                <button>Details</button>
                            </div>
                        )
                    })}
                </div>
            )}
        </PageDefault>
    );
}