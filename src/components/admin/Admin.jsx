import {React, useEffect} from 'react'
import AdminRoutes from '.././../routes/AdminRoutes'
import { BrowserRouter, Route } from 'react-router-dom'
import Sidebar from '../admin/component/sidebar/Sidebar'
import TopNav from '../admin/component/topnav/TopNav'

import { useHistory } from "react-router";
import {useSelector} from "react-redux";


const Admin = () => {
    const history = useHistory();
    const isLoggedIn = useSelector((state)=>state.user.isLoggedIn);

    useEffect(() => {
        const checkAccess = async () => {
            if(!(localStorage.getItem("userRole")==='ADMIN')){
                history.push("/login")
            }
        };
      
        // checkAccess();
        return () => {
           
        }
    }, [])

    return (
        <div>
            <BrowserRouter>
                <Route render={(props) => (
                    <div>
                        <Sidebar {...props}/>
                        <div className="layout__content">
                            <TopNav/>
                            <div className="layout__content-main">
                                <AdminRoutes/>
                            </div>
                        </div>
                    </div>
                )}/>
            </BrowserRouter>   
        </div>
    )
}

export default Admin
