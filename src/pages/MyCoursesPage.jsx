import React from 'react'
import Brand from '../components/brand/Brand'
import ListCourse from '../components/course/listCourse/ListCourse'
import Navbar from '../components/navbar/Navbar'

const MyCoursesPage = () => {
    return (
        <div>
            <Brand/>
            <Navbar/>
            <ListCourse
                isBought={true}
            />
        </div>
    )
}

export default MyCoursesPage
