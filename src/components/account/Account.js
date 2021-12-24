import React, {useEffect} from 'react';
import {useDispatch} from "react-redux";
import {NavLink, Redirect, Route} from "react-router-dom";
import {faUser} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import ChangeImage from "./changeImage/ChangeImage"
import {formReset} from "../../services/auth-service";
import {fetchUserInfo} from "../../services/user-service";
import ChangePassword from "./changePassword/ChangePassword";
import PersonalData from "./personalData/PersonalData.js";
import AccountItem from "./AccountItem";

import "./Account.css";

const Account = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(formReset());
        dispatch(fetchUserInfo());
    }, []);

    return (
        <div className="page-body body-content">
            <div className="row mt-5">
                <div className="col-md-2">
                    <h4><FontAwesomeIcon icon={faUser}/>My Account</h4>
                    <NavLink to={"/account/user/info"}
                             className="account-sidebar-link nav-link"
                             activeClassName="is-active">Personal data</NavLink>
                             
                    {   <>
                            <NavLink to={"/account/user/edit"}
                                     className="account-sidebar-link nav-link"
                                     activeClassName="is-active">Change password</NavLink>
                            <NavLink to={"/account/user/image"}
                                     className="account-sidebar-link nav-link"
                                     activeClassName="is-active">Change Image</NavLink>
                        </>
                    }
                </div>
                <div className="col-md-10">
                    <Route  path="/account" component={() => <AccountItem/>}/>
                    <Route  path="/account/user/info" component={() => <PersonalData/>}/>
                    <Route  path="/account/user/edit" component={() => <ChangePassword/>}/>
                    <Route  path="/account/user/image" component={() => <ChangeImage/>}/>
                </div>
            </div>
        </div>
    );
};

export default Account;
