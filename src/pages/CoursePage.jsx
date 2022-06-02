import {React, useState} from 'react'
import Navbar from '../components/navbar/Navbar'
import ListCourse from '../components/course/list-course/ListCourse'
import Footer from '../components/footer/Footer'
import PageTitle from '../components/page-title/PageTitle'
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getAllCourse, getPurchasedCourses, getAllCourseByMe } from '../services/course-services';
import SearchBar from '../components/share/search-bar/SearchBar';

const CoursePage = (props) => {
    const dispatch = useDispatch()
    const listCourse = useSelector(state => state.course.listCourse)
    const isLoggedIn = localStorage.getItem("isLoggedIn")

    const { search } = window.location;
    const query = new URLSearchParams(search).get('s');
    const [searchQuery, setSearchQuery] = useState(query || '');
    const filteredCourses = filterCourses(listCourse, searchQuery);

    useEffect(() => {
        if (isLoggedIn) {
            dispatch(getAllCourseByMe());
        }
        else {
            dispatch(getAllCourse());
        }

        return () => {
            return []
        }
    }, [dispatch])

    return (
        <div>
            <Navbar {...props} />
            <PageTitle title='Courses' />  
            <div style={{"position":"absolute","right":"13.5%","marginTop":"-60px","width":"20%"}}>
                    <SearchBar
                        searchQuery={searchQuery}
                        setSearchQuery={setSearchQuery}
                    />
            </div>
            <ListCourse 
                listCourse={filteredCourses}
            />
            <Footer />
        </div>
    )
}

const filterCourses = (courses, query) => {
    if (!query) {
        return courses;
    }

    return courses.filter((course) => {
        const courseName = course.name.toLowerCase();
        const topic = course.topic.toLowerCase();
        return courseName.includes(query) || topic.includes(query);
    });
};

export default CoursePage
