import React from 'react'
import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useParams } from 'react-router'
import { getCourseById } from '../../services/course-services'
// import { getSectionOfCourse } from '../../actions/sectionAction'
import ListComment from '../comment/listComment/ListComment'

import "../learningSpace/learningSpace.css"

const LearningSpace = () => {
    let { id } = useParams();
    const [videoSource, setVideoSouce] = useState('');
    const course = useSelector(state => state.course.course);
    const listSection = useSelector(state => state.section.listSection);
    const dispatch = useDispatch();

    const handleChooseVideo = (item) => {
        setVideoSouce(item.video);
        alert(videoSource);
    }

    useEffect(() => {
        dispatch(getCourseById(id));
        // dispatch(getSectionOfCourse(id));
    }, [dispatch, videoSource])

    return (
        <div>
            <div className="content-wrapper">
                <div className="video-wrapper">
                    <video width="100%" height="100%" controls>
                        <source src={videoSource} 
                        type="video/mp4"/>
                        Your browser does not support the video tag.
                    </video>
                </div>
                <div className="comment-wrapper">
                    <div className="comment-header">
                        <h4>N Comments</h4>
                        <div className="share-box">
                            <h5>Share</h5>
                            <i class='bx bxl-facebook-circle'></i>
                            <i class='bx bxl-whatsapp'></i>
                            <i class='bx bx-mail-send'></i>
                        </div>
                    </div>
                    <div className="list-comment">
                        <ListComment/>
                    </div>
                </div>
            </div>
            <div className="playlist-wrapper">
                <div className="playlist-header">
                    <p>{course.name}</p>
                </div>
                <div className="playlist-content">
                    {
                        listSection.map((item, index) => (
                            <div className="course-component" key={item.id}>
                                <div className="course-component-title" data-toggle="collapse" data-target={"#component"+ item.id}>
                                    {index+1 +'. '+ item.name}
                                </div>
                                <div id={"component"+ item.id} className="collapse">
                                        {
                                            item.lectures.map((lecture) => (
                                                <div className="course-component-item" onClick={() => handleChooseVideo(lecture)}>
                                                    {lecture.title}
                                                </div>
                                            ))
                                        }
                                </div>
                            </div> 
                        ))     
                    }           
                </div>
            </div>
        </div>
    )
}

export default LearningSpace
