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
import { generateTimeToString, generateTimeToNumber } from "../../../utils/utils"

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
                        <p>{course.about}</p>
                        <Link to='/checkout'>
                            <button className="btn btn-enroll">${course.price} Enroll</button>       
                        </Link>              
                    </div>
                </div>
            </div>
            <div className="course-detail-wrapper">
                <div className="course-detail-container">
                    <div style={{fontSize: '17px',fontWeight: '600', marginBottom: '10px'}}>
                        <span>{course.about}</span>
                    </div>
                    <div style={{fontSize: '15px',fontWeight: '300', marginBottom: '5px'}}>
                        <span style={{fontWeight: '600'}}>Instructors:</span><span> {course.lecturer}</span>
                    </div>
                    <div className="course-info-detail">
                        <div style={{fontSize: '16px',fontWeight: '300'}}>
                            <span className="bold">{course.subTotal}</span>
                            <span className="mr-20"> students</span>
                        </div>  
                        <div style={{fontSize: '16px',fontWeight: '300', marginBottom: '10px'}}>
                            <span className="bold">{course.duration}</span>
                            <span className="mr-20"> hours</span>
                        </div>
                    </div>
                    <div className="course-info-detail">
                        <div style={{fontSize: '14px',fontWeight: '300'}}>
                            <span className="bold">Language: </span>
                            <span className="mr-20">{course.language}</span>
                        </div>  
                        <div style={{fontSize: '14px',fontWeight: '300'}}>
                            <span className="bold">Topic: </span>
                            <span className="mr-20">{course.topic}</span>
                        </div>
                    </div>
                    <div className="course-info-detail">
                        <div style={{fontSize: '14px',fontWeight: '300'}}>
                            <span className="bold">Last updated:</span>
                            <span className="mr-20"> {course.updateTime}</span>
                        </div>  
                    </div>
                    <hr />
                    <div className="">
                        <div className="course-detail-sub-title">
                            Course Content: {course.videoTotal} Videos
                        </div>
                        <div className="course-content">
                            {                       
                                listVideo.map((video, index) => (
                                    <div className='course-content-item'>
                                        <p>{index}.{video.name}</p>
                                        <p>{generateTimeToString(video.duration)}</p>
                                    </div>
                                ))      
                            }           
                        </div>               
                    </div>
                    <hr />
                    <div className="">
                        <div className="course-detail-sub-title">This course is for:</div>
                        <div className="course-detail-sub-content" dangerouslySetInnerHTML={{ __html: course.isFor }}></div>               
                    </div>
                    <hr />
                    <div className="">
                        <div className="course-detail-sub-title">Requirements:</div>
                        <div className="course-detail-sub-content" dangerouslySetInnerHTML={{ __html: course.requirements }}></div>               
                    </div>
                    <hr />
                    <div className="">
                        <div className="course-detail-sub-title">Description:</div>
                        <div className="course-detail-sub-content" dangerouslySetInnerHTML={{ __html: course.description }}></div>               
                    </div>
                    
                </div>
            </div>
            <div className='page-body'>
                <ReviewCourse/>
            </div>
        </div>
        
    )
}

export default CourseDetail
