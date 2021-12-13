import { Formik, Form } from 'formik'
import * as Yup from 'yup';
import React, { useEffect, useState } from 'react';
import {TextField} from '../formik/TextField'
import ReCAPTCHA from "react-google-recaptcha";
import { formReset, registration } from "../../services/auth-service";
import PageLoader from "../pageLoader/PageLoader";
import { useDispatch, useSelector } from "react-redux";
import rocketImg from '../../assets/images/rocket.png'

const Registration = () => {

    const dispatch = useDispatch();
    const isRegistered =  useSelector(state=>state.auth.isRegistered)
    const loading = useSelector(state => state.auth.loading)
    const errors = useSelector(state => state.auth.errors)

    const handleSubmit = (values) => {
        console.log(values)

        const email = values.email
        const firstName = values.firstName
        const lastName = values.lastName
        const password = values.password
        const password2 = values.confirmPassword
        const captcha = values.captcha

        const userRegistrationData = {email,firstName,lastName,password,password2,captcha};

        console.log(userRegistrationData)

        dispatch(registration(userRegistrationData));
        window.grecaptcha.reset();
    }

    const validate = Yup.object({
        firstName: Yup.string()
          .max(15, 'Must be 15 characters or less')
          .required('Required'),
        lastName: Yup.string()
          .max(20, 'Must be 20 characters or less')
          .required('Required'),
        email: Yup.string()
          .email('Email is invalid')
          .required('Email is required'),
        password: Yup.string()
          .min(6, 'Password must be at least 6 charaters')
          .required('Password is required'),
        confirmPassword: Yup.string()
          .oneOf([Yup.ref('password'), null], 'Password must match')
          .required('Confirm password is required'),
    })

    let pageLoading;
    if (loading) {
        pageLoading = (<PageLoader/>);
    }

    return (
        <div>
            <div className="container mt-3 mb-100">
                {pageLoading}
                <div className="row">
                    <div className="col-md-5">
                        <Formik
                            initialValues={{
                                firstName: '',
                                lastName: '',
                                email: '',
                                password: '',
                                confirmPassword: '',
                                captcha:''
                            }}
                            validationSchema={validate}
                            onSubmit={(values) => handleSubmit(values)}
                            >
                            {formik => (
                                <div>
                                <h1 className="my-4 font-weight-bold .display-4">Sign Up</h1>
                                {
                                    isRegistered ? 
                                    <div className="alert alert-success" role="alert">
                                        Activation code has been sent to your email!
                                    </div> : null
                                }
                                <Form>
                                    <TextField label="First Name" name="firstName" type="text" />
                                    <TextField label="Last Name" name="lastName" type="text" />
                                    <TextField label="Email" name="email" type="email" />
                                    <TextField label="Password" name="password" type="password" />
                                    <TextField label="Confirm Password" name="confirmPassword" type="password" />
                                    <ReCAPTCHA 
                                        name ="captcha"
                                        onChange={(token) => 
                                            formik.setFieldValue("captcha", token
                                        )}
                                        sitekey="6Lf9paEcAAAAACyaIKtVAOHKFUHU-D71XOg7JTV7"/>
                                    <button className="btn btn-dark mt-3" type="submit">Register</button>
                                    <button className="btn btn-danger mt-3 ml-3" type="reset">Reset</button>
                                </Form>
                                </div>
                            )}
                        </Formik>
                    </div>
                    <div className="col-md-7 my-auto">
                        <img className="img-fluid w-100 br-15" src={rocketImg} alt=""/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Registration
