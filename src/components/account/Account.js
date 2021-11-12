import React, {useEffect} from 'react';
import {useDispatch} from "react-redux";
import {NavLink, Redirect, Route} from "react-router-dom";
import {faUser} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

import {formReset} from "../../services/auth-service";
import {fetchUserInfo} from "../../services/user-service";
import ChangePassword from "./changePassword/ChangePassword";
import PersonalData from "./personalData/PersonalData.js";
import AccountItem from "./AccountItem";
import UsersList from "./usersList/UsersList";
import ManageUser from "./manageUser/ManageUser";
import "./Account.css";

const Account = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(formReset());
        dispatch(fetchUserInfo());
    }, []);

    return (
        <div className="account-container container">
            <div className="row mt-5">
                <div className="col-md-2">
                    <h4><FontAwesomeIcon className="mr-2" icon={faUser}/>My Account</h4>
                    <NavLink to={"/account/user/info"}
                             className="account-sidebar-link nav-link"
                             activeClassName="is-active">Personal data</NavLink>
                             
                    {(localStorage.getItem("userRole") === "ADMIN") ?
                        <>
                            <NavLink to={"/account/admin/orders"}
                                     className="account-sidebar-link nav-link"
                                     activeClassName="is-active">List of all orders</NavLink>
                            <NavLink to={"/account/admin/users"}
                                     className="account-sidebar-link nav-link"
                                     activeClassName="is-active">List of all users</NavLink>
                        </> :
                        <>
                            <NavLink to={"/account/user/edit"}
                                     className="account-sidebar-link nav-link"
                                     activeClassName="is-active">Change password</NavLink>
                            {/* <NavLink to={"/account/user/orders"}
                                     className="account-sidebar-link nav-link"
                                     activeClassName="is-active">List of orders</NavLink> */}
                        </>
                    }
                </div>
                <div className="col-md-10">
                    <Route exact path="/account" component={() => <AccountItem/>}/>
                    <Route  path="/account/user/info" component={() => <PersonalData/>}/>
                    <Route  path="/account/user/edit" component={() => <ChangePassword/>}/>
                    {(localStorage.getItem("userRole") === "ADMIN") ?
                        <>
                            <Route exact path="/account/admin/users" component={() => <UsersList/>}/>
                            <Route exact path="/account/admin/users/:userId" component={() => <ManageUser/>}/>

                        </> : <Redirect to={"/account"}/>
                    }
                </div>
            </div>
        </div>
    );
};

export default Account;
