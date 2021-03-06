import React from 'react'
import Navbar from '../components/navbar/Navbar'
import CourseDetail from '../components/course/course-detail/CourseDetail'
import Footer from '../components/footer/Footer'

const DetailPage = (props) => {
    return (
        <div>
            <Navbar {...props}/>
            <CourseDetail/>
            <hr />
            <Footer/>
        </div>
    )
}

export default DetailPage

