import React, { useEffect, useState } from 'react';
import ReCAPTCHA from "react-google-recaptcha";
import { useDispatch, useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faLock, faUser, faUserPlus } from "@fortawesome/free-solid-svg-icons";
import { formReset, registration } from "../../thunks/auth-thunks";
import PageLoader from "../pageLoader/PageLoader";


const Registration = () =>{
    const dispatch = useDispatch();
    const isRegistered =  useSelector(state=>state.auth.isRegistered)
    const loading = useSelector(state => state.auth.loading)
    const errors = useSelector(state => state.auth.errors)
    const { emailError, firstNameError, lastNameError, passwordError, password2Error } = errors;
    const [email, setEmail] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [password, setPassword] = useState("");
    const [password2, setPassword2] = useState("");
    const [captchaValue, setCaptchaValue] = useState("");

    useEffect(()=>{
        dispatch(formReset());
    },[]);

    useEffect(() => {
        setEmail("");
        setFirstName("");
        setLastName("");
        setPassword("");
        setPassword2("");
        setCaptchaValue("");
    }, [isRegistered]);

    const onClickSignUp = (event) =>{
        event.preventDefault();
        const userRegistrationData = {email,firstName,lastName,password,password2 ,captcha:captchaValue};
        
        dispatch(registration(userRegistrationData));
        window.grecaptcha.reset();
    }

    const onChangeRecaptcha = (token) => {
        setCaptchaValue(token);
    };

    let pageLoading;
    if (loading) {
        pageLoading = (<PageLoader/>);
    }

    return (
        <div className="container mt-5 body-content">
            {pageLoading}
            <h4><FontAwesomeIcon className="mr-2" icon={faUserPlus}/> SIGN UP</h4>
            <hr/>
            {isRegistered ? <div className="alert alert-success col-6" role="alert">
                Activation code has been sent to your email!
            </div> : null}
            <form onSubmit={onClickSignUp}>
                <div className="form-group row">
                    <label className="col-sm-2 col-form-label">E-mail: </label>
                    <FontAwesomeIcon style={{position: "relative", top: "8px"}} icon={faEnvelope}/>
                    <div className="col-sm-4">
                        <input
                            type="email"
                            name="email"
                            value={email}
                            className={emailError ? "form-control is-invalid" : "form-control"}
                            onChange={(event) => setEmail(event.target.value)}/>
                        <div className="invalid-feedback">{emailError}</div>
                    </div>
                </div>
                <div className="form-group row">
                    <label className="col-sm-2 col-form-label">First name: </label>
                    <FontAwesomeIcon style={{position: "relative", top: "8px"}} icon={faUser}/>
                    <div className="col-sm-4">
                        <input
                            type="text"
                            name="firstName"
                            value={firstName}
                            className={firstNameError ? "form-control is-invalid" : "form-control"}
                            onChange={(event) => setFirstName(event.target.value)}/>
                        <div className="invalid-feedback">{firstNameError}</div>
                    </div>
                </div>
                <div className="form-group row">
                    <label className="col-sm-2 col-form-label">Last name: </label>
                    <FontAwesomeIcon style={{position: "relative", top: "8px"}} icon={faUser}/>
                    <div className="col-sm-4">
                        <input
                            type="text"
                            name="lastName"
                            value={lastName}
                            className={lastNameError ? "form-control is-invalid" : "form-control"}
                            onChange={(event) => setLastName(event.target.value)}/>
                        <div className="invalid-feedback">{lastNameError}</div>
                    </div>
                </div>
                <div className="form-group row">
                    <label className="col-sm-2 col-form-label">Password: </label>
                    <FontAwesomeIcon style={{position: "relative", top: "8px"}} icon={faLock}/>
                    <div className="col-sm-4">
                        <input
                            type="password"
                            name="password"
                            value={password}
                            className={passwordError ? "form-control is-invalid" : "form-control"}
                            onChange={(event) => setPassword(event.target.value)}/>
                        <div className="invalid-feedback">{passwordError}</div>
                    </div>
                </div>
                <div className="form-group row">
                    <label className="col-sm-2 col-form-label">Confirm password: </label>
                    <FontAwesomeIcon style={{position: "relative", top: "8px"}} icon={faLock}/>
                    <div className="col-sm-4">
                        <input
                            type="password"
                            name="password2"
                            value={password2}
                            className={password2Error ? "form-control is-invalid" : "form-control"}
                            onChange={(event) => setPassword2(event.target.value)}/>
                        <div className="invalid-feedback">{password2Error}</div>
                    </div>
                </div>
                <div className="form-group row">
                    <button type="submit" className="btn btn-dark mx-3">
                        <FontAwesomeIcon className="mr-2" icon={faUserPlus}/>Sign up
                    </button>
                </div>
                <ReCAPTCHA onChange={onChangeRecaptcha} sitekey="6Lf9paEcAAAAACyaIKtVAOHKFUHU-D71XOg7JTV7"/>
            </form>
        </div>
    );
};

export default Registration;

