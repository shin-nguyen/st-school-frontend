import React from 'react'
import Navbar from '../components/navbar/Navbar'
import ListCourse from '../components/course/list-course/ListCourse'
import Footer from '../components/footer/Footer'
import PageTitle from '../components/page-title/PageTitle'

const CoursePage = (props) => {
    return (
        <div>
            <Navbar {...props}/>
            <PageTitle title='Courses'/>
            <ListCourse/>
            <Footer/>
        </div>
    )
}

export default CoursePage
