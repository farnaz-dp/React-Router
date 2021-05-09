
import React from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import {Home} from "./Home";
import {Login} from "./Login";
import {PrivateRoute} from './PrivateRoute'
import {About} from "./About";


const AppRoute = () => {
    return (

        <Switch>


            {/*<Route path="/public">*/}
            {/*    <PublicPage />*/}
            {/*</Route>*/}
            {/*<Route path="/login">*/}
            {/*    <LoginPage />*/}
            {/*</Route>*/}
            <Route path="/login">
                <Login />
            </Route>
            <PrivateRoute exact path="/">
                <Home />
            </PrivateRoute>
            <PrivateRoute path="/about">
                <About />
            </PrivateRoute>


            {/*<Route exact path="/" component={Home}/>*/}
            {/*<Route path='/login' component={Login} />*/}





        </Switch>
    )
}


export {AppRoute}