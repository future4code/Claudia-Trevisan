import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import HomePage from '../components/homePage/HomePage';
import LoginPage from '../components/loginPage/LoginPage';
import TripsListPage from '../components/listTripsPage/TripsListPage';
import ApplyToTripPage from '../components/applyTripPage/ApplyToTripPage';
import TripDetailPage from '../components/tripDetailPage/TripDetailPage';
import AddTripPage from '../components/addTripPage/AddTripPage'

export const Router = () =>{

    return(
        <>
            <BrowserRouter>
                <Switch>
                    <Route exact path="/">
                        <HomePage/>
                    </Route>
                    <Route exact path="/login">
                        <LoginPage/>
                    </Route>
                    <Route exact path="/trips">
                        <TripsListPage/>
                    </Route>
                    <Route exact path="/trips/create">
                        <AddTripPage/>
                    </Route>
                    <Route exact path="/trips/details">
                        <TripDetailPage/>
                    </Route>
                    <Route exact path="/trips/details/apply">
                        <ApplyToTripPage/>
                    </Route>
                    <Route >
                        <div>Erro 404</div>
                    </Route>
                </Switch>
            </BrowserRouter>
        </>
    );
}