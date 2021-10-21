import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {faUsers} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {Link} from "react-router-dom";

import {fetchAllUsersByQuery} from "../../../thunks/admin-thunks";
import Spinner from '../../../components/spinner/Spinner';

const UsersList  = () => {
    const dispatch = useDispatch();
    const users = useSelector((state) => state.admin.users);
    const loading = useSelector((state) => state.admin.isLoaded);

    useEffect(() => {
        dispatch(fetchAllUsersByQuery());
    }, [dispatch]);

    return (
        <div className="container">
            {loading ? <Spinner/> :
            <>
                <h4><FontAwesomeIcon className="ml-2 mr-2" icon={faUsers}/> List of all users</h4>
                <table className="table mt-4 border text-center">
                    <thead className="table-active">
                    <tr>
                        <th>id</th>
                        <th>First name</th>
                        <th>E-mail</th>
                        <th>Role</th>
                        <th>Provider</th>
                        <th></th>
                    </tr>
                    </thead>
                    <tbody>
                    {users.map((user) => {
                        return (
                            <tr key={user.id}>
                                <th>{user.id}</th>
                                <th>{user.firstName}</th>
                                <th>{user.email}</th>
                                <th>{user.roles[0]}</th>
                                <th>{user.provider}</th>
                                <th>
                                    <Link to={`/account/admin/users/${user.id}`}>Show more</Link>
                                </th>
                            </tr>
                        );
                    })}
                    </tbody>
                </table>
            </>
            }
        </div>
    );
};

export default UsersList;
