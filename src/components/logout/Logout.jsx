import React from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router'
import { useEffect } from 'react'
import {logout} from "../../thunks/auth-thunks";

const Logout = () => {
    const history = useHistory();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(logout());
        history.push("/login")
        return () => {
          return [];
        };
      }, [dispatch]);

    return (
        <div>
            Logout
        </div>
    )
}

export default Logout
