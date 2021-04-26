
import React, {useEffect, useState} from "react";
import {Route , Redirect} from 'react-router-dom'
import {useSelector} from "react-redux";


const PrivateRoute = ({ children, ...rest }) => {
    // const isLogin = useSelector(state => state.loginApi.isLogin)

    // const [isLogin, setIsLogin] = useState( JSON.parse( localStorage.getItem('tat') )  )
    const [isLogin, setIsLogin] = useState( JSON.parse( localStorage.getItem('isLogin') ) === true )
    // const [isLogin, setIsLogin] = useState( JSON.parse( sessionStorage.getItem('isLogin') ) === true )

    // useEffect(()=>{
    //     setIsLogin( JSON.parse( localStorage.getItem('isLogin') ) === true )
    //     console.log("PrivateRoute , isLogin is :" , isLogin)
    // },[])

    return (
        <Route
            {...rest}
            render={({ location }) =>
                (isLogin) ? (
                    children
                ) : (
                    <Redirect
                        to={{
                            pathname: "/login",
                            state: { from: location }
                        }}
                    />
                )
            }
        />
    );
}


export {PrivateRoute}