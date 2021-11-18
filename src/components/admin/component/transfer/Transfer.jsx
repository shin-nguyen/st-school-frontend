import React from 'react'
import { useHistory } from 'react-router';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react'
import {logout} from "../../../../thunks/auth-thunks";

const Transfer = () => {
    const history = useHistory();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(logout());
        history.push("/admin")
        return () => {
          return [];
        };
      }, [dispatch]);

    return (
        <div>
            Tranfer
        </div>
    )
}

export default Transfer
