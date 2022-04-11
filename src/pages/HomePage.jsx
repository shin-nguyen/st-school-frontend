import {React, useEffect} from 'react'
import Navbar from '../components/navbar/Navbar'
import Footer from '../components/footer/Footer'

import Home from '../components/home/Home';

const HomePage = (props) => {
   
    return (
        <div>
            <Navbar {...props}/>
            <Home/>
            <Footer/>
        </div>
    )
}

export default HomePage

