
import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {useState,useEffect} from "react";
import {useHistory} from 'react-router-dom'
import axios from 'axios'

import {LoginApiRequest, LoginApiError, fetchToken, LoginApiSuccess, LoginSetUSer} from '../ActionType'


const Login = (props) => {

    const [usernameState , setUsernameState] =useState('')
    const [passwordState , setPasswordState] =useState('')
    // const [apiFetchState , setApiFetchState] =useState(false)

    const token = useSelector(state => state.loginApi.token)

    const dispatch = useDispatch()

    const history = useHistory()

    // // const [isLogin, setIsLogin] = useState(  JSON.parse(localStorage.getItem('isLogin')) )
    // const [isLogin, setIsLogin] = useState(  localStorage.getItem('isLogin') )



    // // const isLogin = JSON.parse(localStorage.getItem('isLogin'))
    // useEffect(()=>{
    //     const userLogin = localStorage.getItem('isLogin') === 'true';
    //     // const user = rememberMe ? localStorage.getItem('user') : '';
    //     setIsLogin(userLogin)
    // },[])
    //
    //
    // useEffect(()=>{
    //     const userLogin = localStorage.getItem('isLogin') === 'true';
    //     setIsLogin(userLogin)
    //
    //     // setIsLogin( JSON.parse(localStorage.getItem('isLogin'))  )
    //     console.log('Login, isLogin is : ', isLogin)
    //     if (isLogin){
    //         history.push('/')
    //         console.log('Login, isLogin is : ', isLogin)
    //     }
    // },[isLogin])


    useEffect(() => {
        console.log("Login , token is :" , token)
        if (token){
            history.push('/')
        }
    } ,[token])



    const handleInputChange = (event) => {
        // console.log("Event : " , event.target.name)

        if (event.target.type ==="submit" ){
            event.preventDefault()
            if (usernameState != '' & passwordState != ''){


                dispatch(fetchToken(usernameState, passwordState))

                // dispatch(LoginApiRequest())

                // axios({
                //     method: 'post',
                //     url: 'http://192.168.100.56/api-token-auth',
                //     data: {
                //         username : usernameState,
                //         password: passwordState
                //     }
                //
                // })
                //     .then( (response)=>{
                //         // console.log(`Response : ${response}`)
                //         if (response.status === 200){
                //             // console.log('Login,Response : ' , response.data)
                //             dispatch(LoginApiSuccess(response.data.token))
                //             dispatch(LoginSetUSer(usernameState))
                //
                //             localStorage.setItem("isLogin", "true");
                //             // sessionStorage.setItem('isLogin', 'true');
                //
                //         }
                //     })
                //     .catch((error)=>{
                //         dispatch(LoginApiError(error))
                //         console.log('Error : ',error)
                //     })

            }
            console.log("Event type is Submit Button")

        }
        else
        {
            console.log("Event type is text input ")
            if (event.target.name === "username"){
                setUsernameState(event.target.value)
            }
            else if (event.target.name === "password")
            {
                setPasswordState(event.target.value)
            }
        }


    }


    return(
        <div style={{width:"300px" , height:"200px" , border:"2px solid black",borderRadius:"5%" , backgroundColor:"#e3f0f5" , margin:" -100px 0 0 -150px",position:"absolute" , top:"50%" , left:"50%"}}>
            <h2 style={{marginLeft:"5px"}}>Login Form</h2>
            <form >
                <label  style={{color: "#070b4c" , fontSize:"3 rem" , fontFamily:"Arial" ,fontWeight:"bold" , marginLeft:"8px"}}>
                    {`Username : `}
                </label>
                <input type={"text"} name={"username"} value={usernameState} onChange={handleInputChange} />
                <br/>
                <label  style={{color: "#070b4c" , fontSize:"3 rem" , fontFamily:"Arial" , fontWeight:"bold" , marginLeft:"8px"}}>
                    {`Password : `}
                </label>
                <input type={"password"} name={"password"} value={passwordState} onChange={handleInputChange} style={{marginLeft:3, marginTop:6} }/>
                <br/>
                <input type={"submit"} onClick={handleInputChange} style={{marginTop:20, marginLeft:100 ,width:"6rem" , height:"2rem" , backgroundColor:"#a1ceec" , fontWeight:"bold"}}/>

            </form>

        </div>
    )
}


export {Login}

