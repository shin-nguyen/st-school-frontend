import React from 'react'
import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useParams } from 'react-router'
import { getCourseById } from '../../../../../services/course-services'
import { getVideosOfCourse } from '../../../../../services/video-services'
import { addVideo, deleteVideo } from '../../../../../services/video-services'
import { Link } from 'react-router-dom'
import Table from '../../table/Table'

import VideoForm from '../videoForm/VideoForm'

import "./courseDetail.css"

const CourseDetail = (props) => {
    let { id } = useParams();
    const course = useSelector(state => state.course.course);
    const listVideo = useSelector(state => state.video.listVideo);
    const dispatch = useDispatch();

    console.log(course)
    console.log(listVideo)

    const videoTableHead = [
        'STT',
        'Name',
        '',
    ]
    
    const renderHead = (item, index) => <th key={index}>{item}</th>
    
    const renderBody = (item, index) => (
        <tr key={index}>
            <td>{index + 1}</td>
            <td>{item.name}</td>
            <td>
                <button className="btn btn-danger mr-10" onClick={() => handleDelete(item)}>Delete</button>
            </td>
        </tr>
    )

    const handleDelete = (item) => {
        if(confirm('Are you sure to delete it ?')){ //eslint-disable-line
            dispatch(deleteVideo(item.id));
        } 
    }

    const handelSubmit = (values) => {

        let params = new FormData();
        console.log(values);
        params.append("name", values.name);
        params.append("file", values.file);
        params.append("course", JSON.stringify(course));
        dispatch(addVideo(params));       
    }

    useEffect(() => {
        const loadInfo = async () => {
          await dispatch(getCourseById(id));
          await dispatch(getVideosOfCourse(id));
        };
    
        loadInfo();
    
        return () => {
          return [];
        };
    }, [dispatch]);

    return (
        <div>
            <div className="course-name">
                {course.name}
            </div>
            <div className="row">
                <div className="col-sm-5 course-info mt-20">
                    <div className="info-control">
                        <label>Image:</label>
                        <img className="w-and-h-95 course-image" src={course.image} alt="" />
                    </div>
                    <div className="info-control">
                        <label>Description:</label>
                        <p>{course.description}</p>
                    </div>
                    <div className="info-control">
                        <label>Language:</label>
                        <p>{course.language}</p>
                    </div>
                    <div className="info-control">
                        <label>Price:</label>
                        <p>{course.price}</p>
                    </div>
                </div>
                <div className="col-sm-6 course-video-list">
                    <div className="list-title">
                        Video List
                    </div>
                    <button type="button" className="btn btn-primary btn-new topright" data-toggle="modal" data-target="#myModal">
                        New Video
                    </button>

                    <div className="modal fade" id="myModal">
                        <div className="modal-dialog">
                            <div className="modal-content">
                            
                                <div className="modal-header">
                                    <h4 className="modal-title">Add Video</h4>
                                    <button type="button" className="close" data-dismiss="modal">&times;</button>
                                </div>
                                
                                <div className="modal-body ">
                                    <VideoForm
                                        onSubmit = {(values)=> handelSubmit(values)}
                                    />
                                </div>
                            
                            </div>
                        </div>
                    </div>
                    <div className="list-video-wrapper">
                        <Table 
                                headData={videoTableHead}
                                renderHead={(item, index) => renderHead(item, index)}
                                bodyData={listVideo}
                                renderBody={(item, index) => renderBody(item, index)}
                        /> 
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CourseDetail
