import React from 'react'
import { useParams } from 'react-router'
import { useEffect } from 'react';
import { getCourseById } from '../../../actions/courseAction';
import { useDispatch, useSelector } from 'react-redux';
import default_image from '../../../assets/images/loading.png'

import './courseDetail.css'

const CourseDetail = () => {
    let { id } = useParams();
    const dispatch = useDispatch();
    const course = useSelector(state => state.course.course);
    
    console.log(course)

    useEffect(() => {
        dispatch(getCourseById(id));
        return () => {
            return [];
        }
    },[dispatch, id]);

    return (
        <div className="body">
            <div className="content row">
                <div className="col-sm-6">
                    {
                        course.image ? 
                        <img src={"http://localhost:8080/images/"+course.image} alt="" className="course-detail-img"></img> :
                        <img src={default_image} alt="" className="course-detail-img"></img>
                    }
                </div>
                <div className="course-detail col-sm-6">
                    <h2>{course.name}</h2>  
                    <span>Price: </span>
                    <h4>${course.price}</h4>
                    <p>{course.description}</p>
                    <button className="btn btn-enroll">${course.price} Enroll</button>                     
                </div>
            </div>
        </div>
    )
}

export default CourseDetail
