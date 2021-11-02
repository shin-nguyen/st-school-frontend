import React from 'react'
import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useParams } from 'react-router'
import { getCourseById } from '../../services/course-services'
import { getSectionOfCourse } from '../../services/section-services'
import ListComment from '../comment/listComment/ListComment'
import { Player } from 'video-react';
import "../../../node_modules/video-react/dist/video-react.css";

import "../learningSpace/learningSpace.css"

const LearningSpace = () => {
    let { id } = useParams();
    const [videoSource, setVideoSouce] = useState('');
    const [showPlaylist, setShowPlaylist] = useState(true);
    const [autoPlay, setAutoPlay] = useState(false);
    const course = useSelector(state => state.course.course);
    const listSection = useSelector(state => state.section.listSection);
    const dispatch = useDispatch();

    const handleChooseVideo = (item) => {
        console.log(item.video);
        setAutoPlay(true);
        setVideoSouce(item.video);
    }

    useEffect(() => {
        const loadInfo = async () => {
          await dispatch(getCourseById(id));
          await dispatch(getSectionOfCourse(id));
          if(videoSource===''){
              try{
                setVideoSouce(((listSection[0].lectures)[0]).video);
              } catch {

              }
          }
        };
    
        loadInfo();
        console.log(videoSource)
    
        return () => {
          return [];
        };
    }, [dispatch, videoSource]);

    return (
        <div className="learning-space">
            <div className="content-wrapper">
                <div className="video-wrapper">
                    <Player
                        playsInline
                        autoPlay={autoPlay}
                        poster={course.image}
                        src={videoSource}
                    />
                    <div className={"btn-show show-" + !showPlaylist}>
                        <i class="bx bx-lg bx-chevrons-left bx-fade-left-hover topright can-click" 
                            onClick={() => setShowPlaylist(!showPlaylist)}></i>
                    </div>
                </div>
                <div className="comment-wrapper">
                    <div className="comment-header">
                        <h4>N Comments</h4>
                        {/* <div className="share-box">
                            <i class='bx bx-sm bxl-facebook-circle mr-10 ml-10'></i>
                            <i class='bx bx-sm bxl-whatsapp mr-10'></i>
                            <i class='bx bx-sm bx-mail-send mr-10'></i>
                        </div> */}
                    </div>
                    <div className="list-comment">
                        <ListComment/>
                    </div>
                </div>
            </div>
            <div className={"playlist-wrapper show-"+ showPlaylist}>
                <div className="playlist-header">
                    <span>{course.name}</span>
                    <i className='bx bx-sm bx-x-circle bx-burst-hover can-click' 
                        onClick={() => setShowPlaylist(!showPlaylist)}></i>
                </div>
                <div className="playlist-content">
                    {
                        listSection.map((item, index) => (
                            <div className="course-componet can-click" key={item.id}>
                                <div className="course-component-title" data-toggle="collapse" data-target={"#component"+ item.id}>
                                    {"Part " + (index+1) +'. '+ item.name}
                                </div>
                                <div id={"component"+ item.id} className="collapse can-click">
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
