import React from 'react'
import Banner from './component/banner/Banner'
import TopBlogs from './component/top-blogs/TopBlogs'

const Home = () => {
    return (
        <div className="body-content">
            <Banner/>
            <TopBlogs/>
        </div>
    )
}

export default Home
