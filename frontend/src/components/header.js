import React from 'react'
import {NavLink} from 'react-router-dom'
import './header.css'


const Header = () => {
    return (
        <div id= 'head'> 
            <NavLink to="/" 
            className="contact"
            activeClassName="is-active" exact={true}>
             Home
            </NavLink>
            
            <NavLink to="/aboutus" 
            className="contact"
            activeClassName="is-active">
            About Us
            </NavLink>
            <NavLink to="/registeruser" 
            className="contact"
            activeClassName="is-active">
            Register
            </NavLink>
           
            <NavLink to="/contact" 
            className="contact"
            activeClassName="is-active">
            Call Us Now!
            </NavLink>
        </div>
    )
}

export default Header;