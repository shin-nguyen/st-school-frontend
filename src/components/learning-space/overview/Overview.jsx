import React from 'react'
import { generateTimeToString, generateTimeToNumber } from "../../../utils/utils"
import "./overview.css"

const Overview = (props) => {
    const { course, listVideo } = props;
    return (
        <>
        <div className="course-detail">
            <div style={{ fontSize: '17px', fontWeight: '600', marginBottom: '10px' }}>
                <span>{course.about}</span>
            </div>
            <div style={{ fontSize: '15px', fontWeight: '300', marginBottom: '5px' }}>
                <span style={{ fontWeight: '600' }}>Instructors:</span><span> {course.lecturer}</span>
            </div>
            <div className="course-info-detail">
                <div style={{ fontSize: '16px', fontWeight: '300' }}>
                    <span className="bold">{course.subTotal}</span>
                    <span className="mr-20"> students</span>
                </div>
                <div style={{ fontSize: '16px', fontWeight: '300', marginBottom: '10px' }}>
                    <span className="bold">{course.duration}</span>
                    <span className="mr-20"> hours</span>
                </div>
            </div>
            <div className="course-info-detail">
                <div style={{ fontSize: '14px', fontWeight: '300' }}>
                    <span className="bold">Language: </span>
                    <span className="mr-20">{course.language}</span>
                </div>
                <div style={{ fontSize: '14px', fontWeight: '300' }}>
                    <span className="bold">Topic: </span>
                    <span className="mr-20">{course.topic}</span>
                </div>
            </div>
            <div className="course-info-detail">
                <div style={{ fontSize: '14px', fontWeight: '300' }}>
                    <span className="bold">Last updated:</span>
                    <span className="mr-20"> {course.updateTime}</span>
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
        </>
    )
}

export default Overview