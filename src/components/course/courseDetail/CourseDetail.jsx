import React from 'react'
import { useParams } from 'react-router'
import { useEffect } from 'react';
import { getCourseById } from '../../../services/course-services';
import { getSectionOfCourse } from '../../../services/section-services'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import default_image from '../../../assets/images/loading.png'

import './courseDetail.css'

const CourseDetail = () => {
    let { id } = useParams();
    const dispatch = useDispatch();
    const course = useSelector(state => state.course.course);
    const sections = useSelector(state => state.section.listSection)
    
    console.log(course)
    console.log(sections)

    useEffect(() => {
        dispatch(getCourseById(id));
        dispatch(getSectionOfCourse(id))
        return () => {
            return [];
        }
    },[dispatch, id]);

    return (
        <div>
            <div className="course-info-wrapper">
                <div className="course-info-container row">
                    <div className="col-sm-6">
                        {
                            course.image ? 
                            <img src={course.image} alt="" className="course-info-img"></img> :
                            <img src={default_image} alt="" className="course-info-img"></img>
                        }
                    </div>
                    <div className="course-info col-sm-6">
                        <h2>{course.name}</h2>  
                        <span>Price: </span>
                        <h4>${course.price}</h4>
                        <p>{course.description}</p>
                        <Link to='/checkout'>
                            <button className="btn btn-enroll">${course.price} Enroll</button>       
                        </Link>              
                    </div>
                </div>
            </div>
            <div className="course-detail-wrapper">
                <div className="course-detail-container">
                    <div className="course-deatail">
                        <span className="bold">Lecture total: </span>
                        <span className="mr-20">10</span>
                        <span className="bold">Total length: </span>
                        <span className="mr-20">{course.totalLength}</span>
                        <span className="bold">Language: </span>
                        <span className="mr-20">{course.language}</span>
                    </div>
                    <hr />
                    <h4>Course Detail</h4>
                    <div className="course-component-container">
                        {
                            sections.map((item, index) => (
                                <div className="course-component" key={item.id}>
                                    <div className="course-component-title" data-toggle="collapse" data-target={"#component"+ item.id}>
                                        {index+1 +'. '+ item.name}
                                    </div>
                                    <div id={"component"+ item.id} className="collapse">
                                            {
                                                item.lectures.map((lecture) => (
                                                    <div className="course-component-item">{lecture.title}</div>
                                                ))
                                            }
                                    </div>
                                </div> 
                            ))
                        }                   
                    </div>
                </div>
            </div>
        </div>
        
    )
}

export default CourseDetail
