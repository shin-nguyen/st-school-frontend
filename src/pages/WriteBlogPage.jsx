import React from 'react'
import BlogForm from '../components/blog/blog-form/BlogForm'
import Navbar from '../components/navbar/Navbar'
import Footer from '../components/footer/Footer'
import PageTitle from '../components/page-title/PageTitle'

const WriteBlogPage = (props) => {
    return (
        <div>
            <Navbar {...props}/>
            <PageTitle title='Write Blog'/>
            <BlogForm/>
            <Footer/>
        </div>
    )
}

export default WriteBlogPage
