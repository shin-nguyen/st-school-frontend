import {React, useEffect} from 'react'
import AdminRoutes from '.././../routes/AdminRoutes'
import { BrowserRouter, Route } from 'react-router-dom'
import Sidebar from '../admin/component/sidebar/Sidebar'
import TopNav from '../admin/component/topnav/TopNav'
import { useDispatch, useSelector } from 'react-redux'
import ThemeAction from "../../actions/theme-actions"

import "./admin.css"

const Admin = () => {
    const themeReducer = useSelector(state => state.theme)

    const dispatch = useDispatch()

    useEffect(() => {
        const themeClass = localStorage.getItem('themeMode', 'theme-mode-light')

        const colorClass = localStorage.getItem('colorMode', 'theme-mode-light')

        dispatch(ThemeAction.setMode(themeClass))

        dispatch(ThemeAction.setColor(colorClass))
    }, [dispatch])

    return (
        <div>
            {/* <BrowserRouter> */}
                <Route render={(props) => (
                    <div className={`admin-layout`}>
                        <Sidebar {...props}/>
                        <div className="admin-layout__content">
                            <TopNav/>
                            <div className="admin-layout__content-main">
                                <AdminRoutes/>
                            </div>
                        </div>
                    </div>
                )}/>
            {/* </BrowserRouter>    */}
        </div>
    )
}

export default Admin
