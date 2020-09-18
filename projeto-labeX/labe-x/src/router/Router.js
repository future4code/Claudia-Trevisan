import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import HomePage from '../components/homePage/HomePage';
import LoginPage from '../components/loginPage/LoginPage';
import TripsListPage from '../components/listTripsPage/TripsListPage';
import ApplyToTripPage from '../components/applyTripPage/ApplyToTripPage';
import TripDetailPage from '../components/tripDetailPage/TripDetailPage';
import AddTripPage from '../components/addTripPage/AddTripPage'
import PageDefault from '../components/pageDefault/PageDefault';

export const Router = () =>{

    return(
        <>
            <BrowserRouter>
                <Switch>
                    <Route exact path="/">
                        <HomePage/>
                    </Route>
                    <PageDefault>
                    <Route exact path="/login">
                        <LoginPage/>
                    </Route>
                    <Route exact path="/trips/:opTion">
                        <TripsListPage/>
                    </Route>
                    <Route exact path="/trips/create">
                        <AddTripPage/>
                    </Route>
                    <Route exact path="/trips/details/:idTripDetail">
                        <TripDetailPage/>
                    </Route>
                    <Route exact path="/trips/apply/:idTrip">
                        <ApplyToTripPage/>
                    </Route>
                    </PageDefault>
                    <Route >
                        <div>Erro 404</div>
                    </Route>
                </Switch>
            </BrowserRouter>
        </>
    );
}