import React, {useEffect, useState} from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCheck} from "@fortawesome/free-solid-svg-icons";

import {useDispatch, useSelector} from "react-redux";
import {resetForm, updateUserInfo} from '../../../services/user-service';
import "./EditPersonalData.css";

const EditPersonalData = () => {
    const dispatch = useDispatch();
    const usersData = useSelector(state => state.user.user);
    const errors = useSelector((state) => state.user.userEditErrors);
    const [user, setUser] = useState(usersData);
    const {id, firstName, lastName, address, phone} = user;
    const {firstNameError, lastNameError} = errors;
    console.log(user);
    useEffect(() => {
        dispatch(resetForm());
    }, []);

    const onFormSubmit = (event) => {
        event.preventDefault();
        const userEdit = {id, firstName, lastName, address, phone};
        dispatch(updateUserInfo(userEdit));
    };

    const handleInputChange = (event) => {
        const {name, value} = event.target;
        setUser({...user, [name]: value});
    };

    return (
        <>
            <form className="edit_personal_data" onSubmit={onFormSubmit}>
                <div className="form-group row">
                    <label className="col-sm-3 col-form-label">First name: </label>
                    <div className="col-sm-6">
                        <input
                            type="text"
                            className={firstNameError ? "form-control is-invalid" : "form-control"}
                            name="firstName"
                            value={firstName}
                            onChange={handleInputChange}/>
                        <div className="invalid-feedback">{firstNameError}</div>
                    </div>
                </div>
                <div className="form-group row">
                    <label className="col-sm-3 col-form-label">Last name: </label>
                    <div className="col-sm-6">
                        <input
                            type="text"
                            className={lastNameError ? "form-control is-invalid" : "form-control"}
                            name="lastName"
                            value={lastName}
                            onChange={handleInputChange}/>
                        <div className="invalid-feedback">{lastNameError}</div>
                    </div>
                </div>
            
                <div className="form-group row">
                    <label className="col-sm-3 col-form-label">Address: </label>
                    <div className="col-sm-6">
                        <input
                            type="text"
                            className={"form-control"}
                            name="address"
                            value={address}
                            onChange={handleInputChange}/>
                    </div>
                </div>
                <div className="form-group row">
                    <label className="col-sm-3 col-form-label">Phone number: </label>
                    <div className="col-sm-6">
                        <input
                            type="text"
                            className={"form-control"}
                            name="phone"
                            value={phone}
                            onChange={handleInputChange}/>
                    </div>
                </div>
               
                <button type="submit" className="btn btn-dark">
                    <FontAwesomeIcon className="mr-2" icon={faCheck}/>Save
                </button>
            </form>
        </>
    );
};

export default EditPersonalData;
