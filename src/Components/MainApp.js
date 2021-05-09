
import React, {useEffect, useState} from "react";
import {Header} from "./Header";
import {AppRoute} from "./AppRoute";
import {BrowserRouter} from "react-router-dom";
import {useSelector} from "react-redux";
import {DashboardLayout} from './Layout/DashboardLayout'
import {LoginLayout} from './Layout/LoginLayout'

const MainApp = (props) => {

    const isLoginRedux = useSelector(state => state.loginApi.isLogin)

    // const [isLogin, setIsLogin] = useState( JSON.parse( localStorage.getItem('tat') )  )
    const [isLogin, setIsLogin] = useState( JSON.parse( localStorage.getItem('isLogin') ) === true )
    // const [isLogin, setIsLogin] = useState( JSON.parse( sessionStorage.getItem('isLogin') ) === true )
    // const [isLogin, setIsLogin] = useState( )

    // useEffect(()=>{
    //     setIsLogin( JSON.parse( localStorage.getItem('isLogin') ) === true )
    //     console.log("MainApp, DidMount , isLogin is :" , isLogin)
    // },[])
    //
    // useEffect(()=>{
    //     setIsLogin( JSON.parse( localStorage.getItem('isLogin') ) === true )
    //     console.log("MainApp , isLogin is :" , isLogin)
    // },[isLogin])

    const layoutRender = () => {
        if (isLogin | isLoginRedux) {
            return(
                <DashboardLayout/>
            )

        }
        else {
            return (
                <LoginLayout/>
            )
        }
    }

    return(

        <>
            {layoutRender()}
        </>
        // <>
        //     {
        //         (isLogin | isLoginRedux) ?<Header/> :null
        //     }
        //
        //     <AppRoute/>
        // </>


    )
}


export {MainApp}