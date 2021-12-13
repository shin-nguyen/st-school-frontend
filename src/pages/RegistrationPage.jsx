import React from 'react'
// import Registration from '../components/registration/Registration'
import Registration from '../components/registration/Registration1'
import Navbar from '../components/navbar/Navbar'
import Footer from '../components/footer/Footer'

const RegistrationPage = (props) => {
    return (
        <div>
            <Navbar {...props}/>
            <Registration/>
            <Footer/>
        </div>
    )
}

export default RegistrationPage
