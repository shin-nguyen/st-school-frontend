import React from 'react'
import { useParams } from 'react-router'
import { useState, useEffect } from 'react';
import {CourseServices} from '../../../services/services';

import './courseDetail.css'

const CourseDetail = () => {
    let { id } = useParams();
    const [course, setCourse] = useState([]);

    useEffect(() => {
        CourseServices.getCourse(id).then((response) => {
            if(response != null){
                setCourse(response.data);
                console.log(id)
            }
        })
    },[id]);

    return (
        <div className="body">
            <div className="content row">
                <div className="col-sm-6">
                    <img src={"http://localhost:8080/images/"+course.image} alt="" className="course-detail-img"></img>
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
