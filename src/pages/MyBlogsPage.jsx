import React from 'react'
import BlogWrapper from '../components/blog/blog-wrapper/BlogWrapper'
import Footer from '../components/footer/Footer'
import Navbar from '../components/navbar/Navbar'
import PageTitle from '../components/page-title/PageTitle'

const MyBlogsPage = (props) => {
    return (
        <div>
            <Navbar {...props}/>
            <PageTitle title='My Blogs'/>
            <BlogWrapper isStatus = "me"/>
            <Footer/>
        </div>
    )
}

export default MyBlogsPage
