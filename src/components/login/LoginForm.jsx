import React, {useEffect, useState} from 'react';
import { Link, useHistory,RouteComponentProps } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { activateAccount, formReset, login } from '../../services/auth-service';
import { useParams } from 'react-router'
import { Formik, Form } from 'formik'
import {TextField} from '../formik/TextField'
import * as Yup from 'yup';

import googleLogo from "../../img/google.png";
import facebookLogo from "../../img/face.png";
import githubLogo from "../../img/github.png";

import {BASE_URL} from "../../constants/SystemConstants"
import rocketImg from '../../assets/images/rocket.png'

const LoginForm = () => {
    const dispatch  = useDispatch();
    const history = useHistory();
    const error = useSelector((state)=>state.auth.error);
    const success = useSelector((state)=>state.auth.success);

    let { code } = useParams();
    // console.log(code);
    useEffect(() => {
        dispatch(formReset());
        if (code) {
            dispatch(activateAccount(code));
        }
    }, []);

    const handleSubmit = (values) => {
        console.log(values)

        const email = values.email
        const password = values.password

        const userData = {email, password};
        dispatch(login(userData,history));
    }

    const validate = Yup.object({
        email: Yup.string()
          .email('Email is invalid')
          .required('Email is required'),
        password: Yup.string()
          .min(6, 'Password must be at least 6 charaters')
          .required('Password is required'),
    })

    return (
        <div className="body-content">
            <div className="container mt-3 mb-100">
                <div className="row">
                    <div className="col-md-4">
                        <Formik
                            initialValues={{
                                email: '',
                                password: '',
                            }}
                            validationSchema={validate}
                            onSubmit={(values) => handleSubmit(values)}
                            >
                            {formik => (
                                <div>
                                    <h1 className="my-4 font-weight-bold .display-4">Login</h1>
                                    {
                                        error ? <div className="alert alert-danger col-6" role="alert">{error}</div> : null
                                    }
                                    {
                                        success ? <div className="alert alert-success col-6" role="alert">{success}</div> : null
                                    }
                                    <Form>
                                        <TextField label="Email" name="email" type="email" />
                                        <TextField label="Password" name="password" type="password" />
                                        <button style={{width: "100%"}} className="btn btn-primary mt-3" type="submit">Login</button>
                                    </Form>
                                </div>
                            )}
                        </Formik>
                        <div className="form-group row">
                            <Link to={"/forgot"} 
                                style={{position: "relative", top: "5px", left: "15px", fontSize: "13px", color: "blue"}}>
                                    Forgot password?
                            </Link>
                        </div>
                        <hr />
                        <div className="row">
                            <div className="col-md-4" style={{textAlign: "center"}}>
                                <a href={`${BASE_URL}/oauth2/authorize/google`}><img style={{width: "40%"}} src={googleLogo} alt="google"/></a>
                            </div>
                            <div className="col-md-4" style={{textAlign: "center"}}>
                                <a href={`${BASE_URL}/oauth2/authorize/facebook`}><img style={{width: "35%"}} src={facebookLogo} alt="google"/></a>
                            </div>
                            <div className="col-md-4" style={{textAlign: "center"}}>
                                <a href={`${BASE_URL}/oauth2/authorize/github`}><img style={{width: "35%"}} src={githubLogo} alt="google"/></a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-8 my-auto">
                        <img className="img-fluid w-100 br-15" src={rocketImg} alt=""/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LoginForm
