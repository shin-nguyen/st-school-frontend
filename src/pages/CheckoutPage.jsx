import {React, useEffect} from 'react'
import Navbar from '../components/navbar/Navbar'
import { useHistory } from "react-router";
import {useSelector} from "react-redux";
import Checkout from '../components/checkout/Checkout'
import Footer from '../components/footer/Footer'

const CheckoutPage = (props) => {
    const history = useHistory();
    const isLoggedIn = useSelector((state)=>state.user.isLoggedIn);

    useEffect(() => {
        const checkAccess = async () => {
            const isLogin = localStorage.getItem("isLoggedIn");
            if(!(isLoggedIn || isLogin)){
                history.push("/login")
            }
        };
      
        checkAccess();

        return () => {
           
        }
    }, [])

    return (
        <div>
            <Navbar {...props}/>
            <Checkout/>
            <Footer/>
        </div>
    )
}

export default CheckoutPage
