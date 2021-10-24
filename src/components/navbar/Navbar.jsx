import React from 'react'
import { Link } from 'react-router-dom'
import {useDispatch, useSelector} from "react-redux";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faSignInAlt, faSignOutAlt, faUser, faUserPlus} from "@fortawesome/free-solid-svg-icons";

import {logout} from "../../thunks/auth-thunks";
import "./Navbar.css"

const Navbar= () => {
    const dispatch = useDispatch();
    const isLoggedIn = useSelector((state)=>state.user.isLoggedIn);

    const handleLogout = () =>{
        dispatch(logout());
    }

    let links;
    let signOut;

    if (localStorage.getItem("isLoggedIn") ||  isLoggedIn){
        links = (
            <li className="nav-item">
                <Link to={"/account"}><span className="nav-link pl-5 pr-5">
                         <FontAwesomeIcon className="mr-2" icon={faUser}/>MY ACCOUNT</span></Link>
            </li>
        );
        signOut = (
            <Link to={"/"} onClick={handleLogout}>
                <FontAwesomeIcon className="mr-2" icon={faSignOutAlt}/>EXIT
            </Link>
        );
    } else {
        links = (
            <>
                <li className="nav-item">
                    <Link to={"/login"} className="nav-link pl-5 pr-3">
                        <FontAwesomeIcon className="mr-2" icon={faSignInAlt}/>SIGN IN</Link>
                </li>
                <li className="nav-item">
                    <Link to={"/registration"} className="nav-link">
                        <FontAwesomeIcon className="mr-2" icon={faUserPlus}/>SIGN UP</Link>
                </li>
            </>
        );
        signOut = null;
    }

    return (
        <div>
            <nav className="navbar navbar-expand-sm navbar-light">
                <ul className="navbar-nav">
                    <li className="nav-item active">
                        <Link to="/" className="nav-link">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/courses" className="nav-link">Courses</Link>
                    </li>
                    <li className="nav-iteme">
                        <Link to="/my-courses" className="nav-link">My Course</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/admin" className="nav-link">Admin?</Link>
                    </li>
                    {links}
                </ul>
                {signOut}
            </nav>
        </div>
    )
}

export default Navbar
