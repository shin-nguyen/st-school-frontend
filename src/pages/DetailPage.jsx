import React from 'react'
import Brand from '../components/brand/Brand'
import Navbar from '../components/navbar/Navbar'
import CourseDetail from '../components/course/courseDetail/CourseDetail'
import Footer from '../components/footer/Footer'

const DetailPage = () => {
    return (
        <div>
            <Brand/>
            <Navbar/>
            <CourseDetail/>
            <hr />
            <Footer/>
        </div>
    )
}

export default DetailPage

