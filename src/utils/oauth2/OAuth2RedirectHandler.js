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
        dispatch(formReset());
        dispatch(fetchUserInfo());
        return React.createElement(Redirect, { to: "/admin" });

    }
   
        
    
};
export default OAuth2RedirectHandler;
