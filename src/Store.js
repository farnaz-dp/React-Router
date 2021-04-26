
import React from "react";
import {applyMiddleware ,combineReducers , createStore} from "redux"
import thunk from "redux-thunk";
import {composeWithDevTools} from "redux-devtools-extension"
import {loginApiReducer} from './Reducers/LoginReducer'


 const rootReducer = combineReducers(
    {
        loginApi : loginApiReducer
    }
)

const store = createStore(
    rootReducer ,
    composeWithDevTools(
        applyMiddleware(
            thunk
        )
    )


)

export {store}