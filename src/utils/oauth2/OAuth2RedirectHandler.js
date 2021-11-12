import React from 'react';
import { Redirect } from 'react-router-dom';
const OAuth2RedirectHandler = () => {
    const url = window.location;
    const token = new URLSearchParams(url.search).get('token');
    if (token) {
        localStorage.setItem("token", token);
    }
    return React.createElement(Redirect, { to: "/" });
};
export default OAuth2RedirectHandler;
