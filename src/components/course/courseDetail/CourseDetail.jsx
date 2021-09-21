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
                        <button className="btn btn-enroll">${course.price} Enroll</button>                     
                    </div>
                </div>
            </div>
            <div className="course-detail-wrapper">
                <div className="course-detail-container">
                    <div className="course-deatail">
                        <span className="bold">Lesson total: </span>
                        <span className="mr-20">30</span>
                        <span className="bold">Time to complete: </span>
                        <span className="mr-20">Around 80 hours</span>
                        <span className="bold">Language: </span>
                        <span className="mr-20">English</span>
                    </div>
                    <hr />
                    <h4>Course Detail</h4>
                    <div className="course-component-container">
                        {
                            // course.map((item, index) => {
                                <div className="course-component" key={course.id}>
                                    <div className="course-component-title" data-toggle="collapse" data-target={"#component"+ course.id}>
                                        {1 +'. '+ course.name}
                                    </div>
                                    <div id={"component"+ course.id} className="collapse">
                                        <div className="course-component-item">Lesson 1</div>
                                        <div className="course-component-item">Lesson 2</div>
                                    </div>
                                </div> 
                            // })
                        }                   
                    </div>
                </div>
            </div>
        </div>
        
    )
}

export default CourseDetail
