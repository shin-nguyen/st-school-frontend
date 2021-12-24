import React from 'react'
import Account from '../components/account/Account'
import Account1 from '../components/account/Account1'
import Footer from '../components/footer/Footer'
import Navbar from '../components/navbar/Navbar'

const AccountPage = (props) => {
    return (
        <div>
            <Navbar {...props} />
            <Account/>
            {/* <Account1/> */}
            <Footer/>
        </div>
    )
}

export default AccountPage
