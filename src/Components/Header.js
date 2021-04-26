
import React from "react";
import {Link ,NavLink} from 'react-router-dom'
import "../index.css"



const Header = (props) => {
    return (
        <div className="header">
            <a href="http://www.ava.co.ir/" className="logo">AVA Company</a>
            <div className="header-right">
                <NavLink to="/" activeClassName="active"><button>Home</button></NavLink>
                <NavLink to="/about" activeClassName="active"><button>About</button></NavLink>
            </div>

        </div>

    )

}

export {Header}