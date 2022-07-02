import { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { faUserEdit } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { fetchUserInfo } from "../../../services/admin-service";
import Spinner from '../../../components/spinner/Spinner';
import { useParams } from 'react-router'

const ManageUser = ({ match }) => {
    const dispatch = useDispatch();
    const userData = useSelector((state) => state.admin.user);
    // const userOrders = useSelector((state) => state.admin.userOrders);
    const loading = useSelector((state) => state.admin.isLoaded);
    const { id, email, firstName, lastName, address, phone, provider, roles } = userData;

    let { userId } = useParams();
    useEffect(() => {
        dispatch(fetchUserInfo(userId));
    }, []);

    // useEffect(() => {
    //     dispatch(fetchUserOrders(email));
    // }, [userData]);

    return (
        <>
            <div className="container">
                {loading ? <Spinner /> :
                    <>
                        <h4><FontAwesomeIcon className="mr-2" icon={faUserEdit} /> User: {firstName} {lastName}</h4>
                        <div className="row mt-5 mb-4 border px-3 py-3">
                            <div className="col-md-4">
                                <p className="personal_data_item">User id:
                                    <span className="personal_data_text">{id}</span>
                                </p>
                                <p className="personal_data_item">Email:
                                    <span className="personal_data_text">{email}</span>
                                </p>
                                <p className="personal_data_item">Role:
                                    <span className="personal_data_text">{roles}</span>
                                </p>
                            </div>
                            <div className="col-md-4">
                                <p className="personal_data_item">First name:
                                    <span className="personal_data_text">{firstName}</span>
                                </p>
                                <p className="personal_data_item">Last name:
                                    <span className="personal_data_text">{lastName}</span>
                                </p>
                                <p className="personal_data_item">Provider:
                                    <span className="personal_data_text">{provider}</span>
                                </p>
                            </div>
                            <div className="col-md-4">

                                <p className="personal_data_item">Address:
                                    <span className="personal_data_text">{address}</span>
                                </p>
                                <p className="personal_data_item">Phone number:
                                    <span className="personal_data_text">{phone}</span>
                                </p>

                            </div>
                        </div>

                    </>
                }
            </div>
        </>
    );
};

export default ManageUser;
