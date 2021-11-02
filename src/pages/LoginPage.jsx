import React from 'react'
import Brand from '../components/brand/Brand'
import Navbar from '../components/navbar/Navbar'
import Login from '../components/login/Login'
import Footer from '../components/footer/Footer'

const LoginPage = (props) => {
    return (
        <div>
            <Navbar {...props}/>
            <Login/>
            {/* <Footer/> */}
        </div>
    )
}

export default LoginPage