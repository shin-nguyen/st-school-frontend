import React from 'react';
import {Link, Route, useLocation} from 'react-router-dom';
import {useSelector} from "react-redux";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAddressCard, faEdit, faEyeSlash} from "@fortawesome/free-solid-svg-icons";
import EditPersonalData from "../editPersonalData/EditPersonalData";
import "./PersonalData.css";

const PersonalData = () => {
    const usersData = useSelector(state => state.user.user);
    const {email, firstName, lastName, address, phone} = usersData;
    const location = useLocation();

    return (
        <div className="row">
            <div className="personal_data col-md-5">
                <h4 className="personal_data_title">
                    <FontAwesomeIcon className="ml-2 mr-2" icon={faAddressCard}/>Personal data
                </h4>
                <p className="personal_data_item">Email:
                    <span className="personal_data_text">{email}</span>
                </p>
                <p className="personal_data_item">First name:
                    <span className="personal_data_text">{firstName}</span>
                </p>
                <p className="personal_data_item">Last name:
                    <span className="personal_data_text">{lastName}</span>
                </p>
                <p className="personal_data_item">Address:
                    <span className="personal_data_text">{address}</span>
                </p>
                <p className="personal_data_item">Phone number:
                    <span className="personal_data_text">{phone}</span>
                </p>
                {location.pathname === "/account/user/info" ?
                    <Link to={"/account/user/info/edit"} className="btn btn-dark personal_data_btn">
                        <FontAwesomeIcon className="mr-2" icon={faEdit}/> Edit
                    </Link> :
                    <Link to={"/account/user/info"} className="btn btn-dark personal_data_btn">
                        <FontAwesomeIcon className="mr-2" icon={faEyeSlash}/> Hide
                    </Link>}
            </div>
            <div className="col-md-7">
                <Route path="/account/user/info/edit" component={() => <EditPersonalData/>}/>
            </div>
        </div>
    );
};

export default PersonalData;
