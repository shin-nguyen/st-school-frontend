import React from 'react'
import { useParams } from 'react-router'
import { useEffect } from 'react';
import { getCourseById } from '../../../services/course-services';
import { getVideosOfCourse } from '../../../services/video-services'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import default_image from '../../../assets/images/loading.png'
import './courseDetail.css'
import ReviewCourse from '../../review-course/ReviewCourse';

const CourseDetail = () => {
    let { id } = useParams();
    const dispatch = useDispatch();
    const course = useSelector(state => state.course.course);
    const listVideo = useSelector(state => state.video.listVideo)
    
    console.log(listVideo)

    useEffect(() => {
        dispatch(getCourseById(id));
        dispatch(getVideosOfCourse(id))
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
                    <div className="course-info col-sm-5">
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
                        <span className="bold">Language: </span>
                        <span className="mr-20">{course.language}</span>
                    </div>
                    <hr />

                    {/* <div className="btn btn-success" data-toggle="collapse" data-target="#component">
                        Detail
                    </div>
                    <div id="component" className="collapse">
                        <div className="course-detail-content">
                            {                       
                                listVideo.map((video, index) => (
                                    <p>{video.name}</p>
                                ))      
                            }           
                        </div>               
                    </div> */}
                    
                </div>
            </div>
            <div className='page-body'>
                <ReviewCourse/>
            </div>
        </div>
        
    )
}

export default CourseDetail
