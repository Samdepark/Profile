import "./navStyles.css";
import { Link } from "react-router-dom"
import React from 'react';
 const NavBar=()=>{
    return(
        <div className="Header">
            <Link to='/' className="logo">
                <h1 >Depark </h1>
            </Link>
            <ul className="nav">
                <Link to='/' className="link">Home</Link>
                <Link to='/project' className="link">Project</Link>
                <Link to='/about' className="link">About</Link>
                <Link to='/contacts' className="link">Contacts</Link>
            </ul>
        </div>
    )
 }

 export default NavBar