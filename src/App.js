
import React from 'react'
import {Provider, useSelector} from "react-redux"
import {BrowserRouter , Route ,Switch} from "react-router-dom"
import {store} from "./Store"
import {AuthRoute} from './Components/AuthRoute'
import {Login} from "./Components/Login"
import {Home} from "./Components/Home"
import {About} from "./Components/About"
// import {ProtectedRoute} from './Components/AuthRoute'
import {PrivateRoute} from './Components/AuthRoute'
import {AppRoute} from './Components/AppRoute'
import {Header} from "./Components/Header";
import {MainApp} from "./Components/MainApp";



function App() {

    return (
        <Provider store={store}>
            <BrowserRouter>
               <MainApp/>
            </BrowserRouter>

        </Provider>
    );
}

export default App;
