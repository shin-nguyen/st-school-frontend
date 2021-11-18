import React from 'react'
import BlogWrapper from '../components/blog/blog-wrapper/BlogWrapper'
import Footer from '../components/footer/Footer'
import Navbar from '../components/navbar/Navbar'
import PageTitle from '../components/page-title/PageTitle'
 
const BlogPage = (props) => {
    return (
        <div>
            <Navbar {...props}/>
            <PageTitle title='Blogs'/>
            <BlogWrapper/>
            <Footer/>
        </div>
    )
}

export default BlogPage
