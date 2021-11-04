import React from 'react'
import Brand from '../components/brand/Brand'
import Navbar from '../components/navbar/Navbar'

const HomePage = (props) => {
    return (
        <div>
            <Navbar {...props}/>
            Home
        </div>
    )
}

export default HomePage

