import React from 'react'
import Registration from '../components/registration/Registration'
import Navbar from '../components/navbar/Navbar'

const RegistrationPage = (props) => {
    return (
        <div>
            <Navbar {...props}/>
            <Registration/>
        </div>
    )
}

export default RegistrationPage
