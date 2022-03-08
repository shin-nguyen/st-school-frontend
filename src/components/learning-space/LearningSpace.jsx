import React from 'react'
import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useParams } from 'react-router'
import { getCourseById } from '../../services/course-services'
import { getVideosOfCourse } from '../../services/video-services'
import { Player } from 'video-react';
import "../../../node_modules/video-react/dist/video-react.css";
import Comment from "../comment/Comment";

import "./learningSpace.css"

const ListVideoItem = props => {

    const active = props.active ? 'active' : ''

    return (
        <div className="list_video_item can-click" onClick={props.onClick}>
            <div className={`list_video_item-inner ${active}`}>
                Lesson {props.index + 1} : {props.name}
            </div>
        </div>
    )
}

const LearningSpace = () => {
    let { id } = useParams();
    const [videoSource, setVideoSouce] = useState('');
    const [showPlaylist, setShowPlaylist] = useState(true);
    const [activeItem, setActiveItem] = useState(0);
    const [autoPlay, setAutoPlay] = useState(false);
    const course = useSelector(state => state.course.course);
    const listVideo = useSelector(state => state.video.listVideo);
    const dispatch = useDispatch();

    console.log(listVideo)

    const handleChooseVideo = (item, index) => {
        setAutoPlay(true);
        setVideoSouce(item.source);
        setActiveItem(index);
    }

    useEffect(() => {
        const loadInfo = async () => {
            await dispatch(getCourseById(id));
            await dispatch(getVideosOfCourse(id));
            if (videoSource === '' && listVideo !== null) {
                try {
                    setVideoSouce((listVideo[0].source));
                } catch {
                    setVideoSouce("");
                }
            }
        };

        loadInfo();

        return () => {
            return [];
        };
    }, [dispatch, videoSource]);

    return (
        <div className="learning-space body-content">
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
                    <div className="list-comment">
                        <Comment course={course} />
                    </div>
                </div>
            </div>
            <div className={"playlist-wrapper show-" + showPlaylist}>
                <div className="playlist-header">
                    <span>{course.name}</span>
                    <i className='bx bx-md bx-x-circle bx-burst-hover can-click mt_5-'
                        onClick={() => setShowPlaylist(!showPlaylist)}></i>
                </div>
                <div className="playlist-content">
                    {
                        listVideo.map((video, index) => (
                            <ListVideoItem
                                index={index}
                                name={video.name}
                                onClick={() => handleChooseVideo(video, index)}
                                active={index === activeItem}
                            />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default LearningSpace
