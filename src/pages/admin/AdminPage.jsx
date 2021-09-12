import React from 'react'
import AdminRoutes from '.././../routes/AdminRoutes'
import { BrowserRouter, Route } from 'react-router-dom'
import Sidebar from '.././../components/sidebar/Sidebar'
import TopNav from '.././../components/topnav/TopNav'

const AdminPage = () => {
    return (
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
    )
}

export default AdminPage
