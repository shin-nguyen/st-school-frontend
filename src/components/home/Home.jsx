import React from 'react'
import Banner from './component/banner/Banner'
import Welcome from './component/welcome/Welcome'

const Home = () => {
    return (
        <div className="body-content">
            <Banner/>
            <Welcome/>
        </div>
    )
}

export default Home
