import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import FeedPage from '../components/feedPage/FeedPage';
import SignUpPage from '../components/signUpPage/SignUpPage';
import PostPage from '../components/postPage/PostPage';
import HomePage from '../components/homePage/HomePage'
import PageDefault from '../components/pageDefault/PageDefault';


export default function Router () {
    return(
        <>
            <BrowserRouter>
                <Switch>
                    <Route exact path="/">
                        <HomePage/>
                    </Route>
                    <PageDefault>
                    <Route exact path="/feed">
                        <FeedPage/>
                    </Route>
                    <Route exact path="/signup">
                        <SignUpPage/>
                    </Route>
                    <Route exact path="/post/:idPost">
                        <PostPage/>
                    </Route>
                    </PageDefault>
                    <Route>
                        <div>Erro 404</div>
                    </Route>
                </Switch>
            </BrowserRouter>
        </>
    );
}