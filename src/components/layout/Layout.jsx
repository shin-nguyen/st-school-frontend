import './layout.css'

import Routes from '.././../routes/Routes'
import { BrowserRouter, Route } from 'react-router-dom'

const Layout = () => {
    return (
        <BrowserRouter>
            <Route render={(props) => (
                <Routes/>
            )}/>
        </BrowserRouter>
    )
}

export default Layout
