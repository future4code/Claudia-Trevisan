import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from '../components/homePage/Home';
import FeedPage from '../components/feedPage/FeedPage';
import SignUpPage from '../components/signUpPage/SignUpPage';
import PostPage from '../components/postPage/PostPage'


export const Router = () =>{
    return(
        <>
            <BrowserRouter>
                <Switch>
                    <Route exact path="/">
                        <Home/>
                    </Route>
                    <Route exact path="/feed">
                        <FeedPage/>
                    </Route>
                    <Route exact path="/signup">
                        <SignUpPage/>
                    </Route>
                    <Route exact path="/feed/post">
                        <PostPage/>
                    </Route>
                    <Route>
                        <div>Erro 404</div>
                    </Route>
                </Switch>
            </BrowserRouter>
        </>
    );
}