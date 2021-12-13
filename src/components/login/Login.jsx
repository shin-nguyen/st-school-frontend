import React, {useEffect, useState} from 'react';
import { Link, useHistory,RouteComponentProps } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { activateAccount, formReset, login } from '../../services/auth-service';
import { useParams } from 'react-router'

import googleLogo from "../../img/google.png";
import facebookLogo from "../../img/face.png";
import githubLogo from "../../img/github.png";

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEnvelope, faLock, faSignInAlt} from "@fortawesome/free-solid-svg-icons";
import {BASE_URL} from "../../constants/SystemConstants"
import "./Login.css";

const Login = () =>{
    const dispatch  = useDispatch();
    const history = useHistory();
    const error = useSelector((state)=>state.auth.error);
    const success = useSelector((state)=>state.auth.success);
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");

    let { code } = useParams();
    // console.log(code);
    useEffect(() => {
        dispatch(formReset());
        if (code) {
            dispatch(activateAccount(code));
        }
    }, []);
    
    const onClickSignIn = (event) =>{
        event.preventDefault();
        const userData = {email,password};
        dispatch(login(userData,history));
    }

    return (
        <div id="container" className="container mt-5 h-500">
            <div className="row">
                <div className="col-md-6">
                <h4><FontAwesomeIcon className="mr-3" icon={faSignInAlt}/>SIGN IN</h4>

                    <hr/>
                    {error ? <div className="alert alert-danger col-6" role="alert">{error}</div> : null}
                    {success ? <div className="alert alert-success col-6" role="alert">{success}</div> : null}
                    <form onSubmit={onClickSignIn}>
                        <div className="form-group row">
                            <label className="col-sm-4 col-form-label">E-mail: </label>
                            <FontAwesomeIcon style={{position: "relative", top: "8px"}} icon={faEnvelope}/>

                            <div className="col-sm-7">
                                <input
                                    className="form-control"
                                    type="email"
                                    name="email"
                                    value={email}
                                    onChange={(event) => setEmail(event.target.value)}/>
                            </div>
                        </div>
                        <div className="form-group row">
                            <label className="col-sm-4 col-form-label">Password: </label>
                            <FontAwesomeIcon style={{position: "relative", top: "8px"}} icon={faLock}/>

                            <div className="col-sm-7">
                                <input
                                    className="form-control"
                                    type="password"
                                    name="password"
                                    value={password}
                                    onChange={(event) => setPassword(event.target.value)}/>
                            </div>
                        </div>
                        <div className="form-group row">
                            <button type="submit" className="btn btn-dark mx-3">
                            <FontAwesomeIcon className="mr-3" icon={faSignInAlt} />Sign in

                            </button>
                            <Link to={"/forgot"} style={{position: "relative", top: "8px"}}>Forgot password?</Link>
                        </div>
                    </form>
                </div>
                <div className="col-md-6">
                    <div className="mt-5">
                        <a className="btn btn-block social-btn google"
                           href={`${BASE_URL}/oauth2/authorize/google`}>
                            <img src={googleLogo} alt="google"/>Log in with Google</a>
                        <a className="btn btn-block social-btn facebook"
                            href={`${BASE_URL}/oauth2/authorize/facebook`}>
                            <img src={facebookLogo} alt="facebook"/>Log in with Facebook</a>
                        <a className="btn btn-block social-btn github"
                           href={`${BASE_URL}/oauth2/authorize/github`}>
                            <img src={githubLogo} alt="github"/>Log in with Github</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
