import './layout.css'

import Sidebar from '../sidebar/Sidebar'
import Topnav from '../topnav/TopNav'
import Routes from '../Router'
import { BrowserRouter, Route } from 'react-router-dom'

const Layout = () => {
    return (
        <BrowserRouter>
            <Route render={(props) => (
                <div className={`layout`}>
                    <Sidebar {...props}/>
                    <div className="layout__content">
                        <Topnav/>
                        <div className="layout__content-main">
                            <Routes/>
                        </div>
                    </div>
                </div>
            )}/>
        </BrowserRouter>
    )
}

export default Layout
