import {React, useEffect} from 'react'
import AdminRoutes from '.././../routes/AdminRoutes'
import { BrowserRouter, Route } from 'react-router-dom'
import Sidebar from '../admin/component/sidebar/Sidebar'
import TopNav from '../admin/component/topnav/TopNav'

const Admin = () => {
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
