import React from 'react'
import Logout from '../components/logout/Logout'
import Navbar from '../components/navbar/Navbar'

const LogoutPage = (props) => {
    return (
        <div>
            <Navbar {...props}/>
            <Logout/>
        </div>
    )
}

export default LogoutPage
