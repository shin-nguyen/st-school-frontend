import React from 'react'
import ListCourse from '../components/course/listCourse/ListCourse'
import Navbar from '../components/navbar/Navbar'

const MyCoursesPage = (props) => {
    return (
        <div>
            <Navbar {...props}/>
            <ListCourse
                isBought={true}
            />
        </div>
    )
}

export default MyCoursesPage
