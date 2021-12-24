import React from 'react';
import {useSelector} from "react-redux";
import Spinner from "../spinner/Spinner";

const AccountItem = () => {
    const usersData = useSelector(state => state.user.user);
    const loading = useSelector(state => state.user.isLoaded);
    console.log(loading);
    return (
        <>
            {loading ? <Spinner/> :
                <h4 style={{display: "flex", justifyContent: "center", marginBottom: "40px"}}>
                    Hello {usersData.firstName} {usersData.lastName}!
                </h4>
            }
        </>
    );
};

export default AccountItem;
