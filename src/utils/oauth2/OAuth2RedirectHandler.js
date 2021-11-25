import React, {useEffect} from 'react';
import {useDispatch,useSelector} from "react-redux";
import { Redirect } from 'react-router-dom';
import {formReset} from "../../services/auth-service";
import {fetchUserInfo} from "../../services/user-service";
import Spinner from "../../components/spinner/Spinner";

const OAuth2RedirectHandler = () => {
    const url = window.location;
    const dispatch = useDispatch();
    const token = new URLSearchParams(url.search).get('token');
    const loading = useSelector(state => state.user.isLoaded);

    useEffect(() => {
        dispatch(formReset());
        
        if (token) {
            localStorage.setItem("token", token);
        }

        dispatch(fetchUserInfo());
    }, []);
    return (
        <>
            {loading ? <Spinner/> :
            //    (localStorage.getItem("userRole") == "USER") ? <Redirect to={"/"}/> : 
               <Redirect to={"/"}/>
            }
        </>
    )
};
export default OAuth2RedirectHandler;
