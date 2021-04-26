
import React, {useEffect} from "react";
import {useSelector} from 'react-redux'
import {useHistory} from 'react-router-dom'

const Home = (props) => {
    // const isLogin = useSelector(state => state.loginApi.isLogin)
    //
    // const history = useHistory()
    //
    // useEffect(()=>{
    //     if (!isLogin){
    //         history.push('/login')
    //     }
    // },[])

    return (
        <div>
            <h1>Home</h1>
        </div>
    )
}

export {Home}