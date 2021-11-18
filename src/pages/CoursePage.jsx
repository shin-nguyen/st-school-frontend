import React from 'react'
import Navbar from '../components/navbar/Navbar'
import ListCourse from '../components/course/listCourse/ListCourse'
import Footer from '../components/footer/Footer'

const CoursePage = (props) => {
    return (
        <div>
            <Navbar {...props}/>
            <div className="page-title">ALL COURSES</div>
            <ListCourse/>
            <Footer/>
        </div>
    )
}

export default CoursePage
