import React from 'react'
import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useParams } from 'react-router'
import { getCourseById } from '../../actions/courseAction'
import { getSectionOfCourse } from '../../actions/sectionAction'
import ListComment from '../comment/listComment/ListComment'

const LearningSpace = () => {
    let { id } = useParams();
    const [source, setSouce] = useState('https://res.cloudinary.com/qscloud/video/upload/v1634697286/st-school/videos/C%C3%A0i_%C4%91%E1%BA%B7t_m%C3%B4i_tr%C6%B0%E1%BB%9Dng_t2h1sb.mp4');
    const course = useSelector(state => state.course.course);
    const listSection = useSelector(state => state.section.listSection);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getCourseById(id));
        dispatch(getSectionOfCourse(id));
        return () => {
            
        }
    }, [dispatch])

    return (
        <div>
            <div className="content-wrapper">
                <div className="video-wrapper">
                    <video width="320" height="240" controls>
                        <source src={source} 
                        type="video/mp4"/>
                        Your browser does not support the video tag.
                    </video>
                </div>
                <div className="comment-wrapper">
                    <ListComment/>
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
                                    <div className="course-component-item">Lesson 1</div>
                                    <div className="course-component-item">Lesson 2</div>
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
