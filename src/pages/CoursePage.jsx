import React from 'react'
import Navbar from '../components/navbar/Navbar'
import ListCourse from '../components/course/listCourse/ListCourse'
 
const CoursePage = (props) => {
    return (
        <div>
            <Navbar {...props}/>
            <ListCourse/>
        </div>
    )
}

export default CoursePage
