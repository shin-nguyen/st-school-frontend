import React from 'react';
import {useDispatch} from "react-redux";
import { Redirect } from 'react-router-dom';
import {formReset} from "../../services/auth-service";
import {fetchUserInfo} from "../../services/user-service";

const OAuth2RedirectHandler = () => {
    const url = window.location;
    const dispatch = useDispatch();
    const token = new URLSearchParams(url.search).get('token');
    if (token) {
        localStorage.setItem("token", token);
    }
    return React.createElement(Redirect, { to: "/" });
        
    
};
export default OAuth2RedirectHandler;
