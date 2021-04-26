
import React, {useEffect, useState} from "react";
import {Header} from "./Header";
import {AppRoute} from "./AppRoute";
import {BrowserRouter} from "react-router-dom";
import {useSelector} from "react-redux";

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


    return(
        <>
            {
                (isLogin | isLoginRedux) ?<Header/> :null
            }

            <AppRoute/>
        </>


    )
}


export {MainApp}