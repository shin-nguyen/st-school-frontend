import React from 'react'
import { Link } from 'react-router-dom'
import banner from "../../../../assets/images/banner.jpg"
import "./banner.css"

const Banner = () => {
    return (
        <div>
            <div className="banner-wrapper">
                <Link to="/courses">
                    <img src={banner} className="banner-img" alt="banner"/>
                </Link>  
            </div>
        </div>
    )
}

export default Banner
