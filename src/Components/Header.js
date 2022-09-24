import React,{useContext} from 'react'
import { Link } from 'react-router-dom'
import AuthContext from '../Context/AuthContext'
import logo from '../images/altlogo-modified.png'
import { Icon } from '@iconify/react';

import "../css/project.css"


const Header = () => {
 
  let {user, logoutUser} = useContext(AuthContext)
  return (
    // <div>
    //     <Link to="/register">Register</Link>
    //     <span> | </span>
    //     {user ? (
    //       <p onClick={logoutUser}>Logout</p>
    //     ): (
    //       <Link to="/login">Login</Link>
    //     )}
       

    //     {user && <p>Hello {user.username}</p>}
        
    // </div>
    <div className="navbar">
            <div>
                <img src={logo} alt=""/>
                {/* <a href='index.html'>By HardWhere?</a> */}
            </div>
            <nav>
                <ul id='MenuItems'>
                    <li><Link to="/list">List</Link></li>
                    <li><Link to="/AboutUs">AboutUs</Link></li>
                    <li><Link to="/map">Map</Link></li>
                    <li><Link to="/notok">NotOk</Link></li>
                    {!user && <li><Link to="/login">Login</Link></li>}
                    {!user &&<li ><Link to="/registerr">Register</Link></li>}
                    {user && <li><button onClick={logoutUser}>Log Out</button></li>}
                </ul>
            </nav>
            <div id='loginname'>
                <div id='imag'>
                {user && <li ><Icon icon="healthicons:ui-user-profile" /></li>}     
                </div>           
                {user && <li >{user.username} </li>}
            </div>
        </div>
  )
}

export default Header