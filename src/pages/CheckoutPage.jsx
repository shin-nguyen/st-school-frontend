import React from 'react'
import Navbar from '../components/navbar/Navbar'
import Checkout from '../components/checkout/Checkout'

const CheckoutPage = (props) => {
    return (
        <div>
            <Navbar {...props}/>
            <Checkout/>
        </div>
    )
}

export default CheckoutPage
