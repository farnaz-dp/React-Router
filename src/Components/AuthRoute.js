
import React, {useState} from "react";
import {Redirect , Route} from "react-router-dom"
import {useSelector} from 'react-redux'
// import { useHistory } from "react-router-dom";


const AuthRoute = (props) => {
    const isLogin = useSelector(state => state.loginApi.isLogin)

    const {isLoged} = props

    // const isLogin = localStorage.getItem("isLogin");
    // const sessionIsLogin = sessionStorage.getItem('isLogin');
    // const sessionIsLogin = window.sessionStorage.getItem('isLogin')

    // const [sessionIsLogin, setSessionIsLogin] = useState(
    //     window.sessionStorage.getItem('isLogin') || ''
    // );

    // console.log('AuthRoute, sessionIsLogin is : ', sessionIsLogin)
    console.log('AuthRoute, sessionIsLogin is : ', isLoged)

    const {type, path} = props

    // let history = useHistory();

        if (type==='guest'  && (   isLogin ) ){
    // if (isLogin){
        return <Redirect to={'/home'} />
        // history.push('/home')
    }
    else if (type==='private' && !isLogin){
    // else if (!isLogin){
        console.log("Redirect to Login page")
        // return (<Redirect from={'*'} to={'/login'}/>)
        return <Redirect  to={'/login'}/>
        // history.push('/login')
    }
    return <Route {...props} />

    // const renderredirect = () => {
    //     if (isLogin){
    //         return (<Redirect to="/home" />)
    //     }
    //     else {
    //         console.log("Redirect to Login page")
    //         return (<Redirect to="/login"/>)
    //     }
    // }
    // return (
    //     <>
    //         {renderredirect()}
    //     </>
    // )



}

// const PrivateRoute = ({ children, ...rest }) => {
//     const isLogin = useSelector(state => state.loginApi.isLogin)
//     // let auth = useAuth();
//     return (
//         <Route
//             {...rest}
//             render={({ location }) =>
//                 // auth.user ? (
//                 isLogin ? (
//                     children
//                 ) : (
//                     <Redirect
//                         to={{
//                             pathname: "/login",
//                             state: { from: location }
//                         }}
//                     />
//                 )
//             }
//         />
//     );
// }

function PrivateRoute ({component: Component, authed, ...rest}) {
    const isLogin = useSelector(state => state.loginApi.isLogin)
    return (
        <Route
            {...rest}
            render={
                // (props) => authed === true
                (props) => {
                    if (isLogin === true) {
                        console.log('PrivateRoute, authed : ', authed)
                        return <Component {...props} />
                    } else {
                        console.log('PrivateRoute, isNotLogin : ', authed)
                        // return <Redirect to={{pathname: '/login', state: {from: props.location}}}/>
                        return <Redirect to={"/login"}/>
                    }
                }
            }

        />
    )
}

// function PrivateRoute ({component: Component, authed, ...rest}) {
//     return (
//         <Route
//             {...rest}
//             render={(props) => authed === true
//                 ? <Component {...props} />
//                 : <Redirect to={{pathname: '/login', state: {from: props.location}}} />}
//         />
//     )
// }

export {PrivateRoute}

// const ProtectedRoute = ({isEnabled, ...props}) => {
//     const {type, path} = props
//     const isLogin = useSelector(state => state.loginApi.isLogin)
//     // return (isEnabled) ? <Route {...props} /> : <Redirect  to={'/login'}/>
//     return (isLogin && type !='guest'  ) ? <Route {...props} /> : <Redirect  to='/login'/>
// };

// export default ProtectedRoute;

export {AuthRoute}
// export {ProtectedRoute}