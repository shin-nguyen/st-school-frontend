import React from 'react'
import { useState, useEffect, useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useParams } from 'react-router'
import { getCourseById } from '../../services/course-services'
import { getVideosOfCourse } from '../../services/video-services'
import { Player } from 'video-react';
import "../../../node_modules/video-react/dist/video-react.css";
import Comment from "../comment/Comment";
import choosebar_items from '../../assets/JsonData/choosebar_routes.json'
import ReviewCourse from '../review-course/ReviewCourse'
import Note from './note/Note'

import "./learningSpace.css"
import { Link } from 'react-router-dom'

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

const ChoosebarItem = props => {

    const active = props.active ? 'active' : ''

    return (
        <div className="choosebar__item" onClick={props.onClick}>
            <div className={`choosebar__item-inner ${active}`}>
                <span>
                    {props.title}
                </span>
            </div>
        </div>
    )
}

const LearningSpace = () => {
    let { id } = useParams();
    const [videoSource, setVideoSouce] = useState('');
    const [showPlaylist, setShowPlaylist] = useState(true);
    const [activeItem, setActiveItem] = useState(0);
    const [activeChoose, setActiveChoose] = useState(0);
    const [autoPlay, setAutoPlay] = useState(false);
    const [choose, setChoose] = useState('');
    const player = useRef(null);
    const [videoState, setVideoState] = useState(null);

    const course = useSelector(state => state.course.course);
    const listVideo = useSelector(state => state.video.listVideo);
    const dispatch = useDispatch(); 

    const handleChooseVideo = (item, index) => {
        setAutoPlay(true);
        setVideoSouce(item.source);
        setActiveItem(index);
        console.log(player)
    }

    const handleChooseItem = (item, index) => {
        setChoose(item.route)
        setActiveChoose(index)
    }

    const handleSeek = (seconds) => {
        player?.current.actions.seek(seconds);
    }

    const handlePlay = () => {
        player?.current.actions.play()
    }

    const handlePause = () => {
        player?.current.actions.pause()
    }

    useEffect(() => {
        player.current.subscribeToStateChange(setVideoState);
    }, [setVideoState]);

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
        <div className="learning-space body-content">\
            <div className="content-wrapper">
                <div className="content-container">
                    <div className="video-wrapper">
                        <Player
                            playsInline
                            autoPlay={autoPlay}
                            poster={course.image}
                            src={videoSource}
                            ref={player}
                        />
                        <div className={"btn-show show-" + !showPlaylist}>
                            <i class="bx bx-lg bx-chevrons-left bx-fade-left-hover topright can-click"
                                onClick={() => setShowPlaylist(!showPlaylist)}></i>
                        </div>
                    </div>
                    <div className='choosebar-wrapper can-click row'>
                        {
                            choosebar_items.map((item, index) => (
                                <ChoosebarItem
                                    title={item.display_name}
                                    icon={item.icon}
                                    active={index === activeChoose}
                                    onClick={() => handleChooseItem(item, index)}
                                />
                            ))
                        }
                    </div>
                </div>
                {
                    choose === 'overview' ? 
                    <div className="comment-wrapper">
                        <div className="list-comment">
                            Overview
                        </div>
                    </div>: ''
                }
                {
                    choose === 'comments' ? 
                    <div className="comment-wrapper">
                        <div className="list-comment">
                            <Comment course={course} />
                        </div>
                    </div>: ''
                }
                {
                    choose === 'reviews' ? 
                    <div className="comment-wrapper">
                        <div className="list-comment">
                            <ReviewCourse course={course} />
                        </div>
                    </div>: ''
                }
                {
                    choose === 'notes' ? 
                    <div className="comment-wrapper">
                        <div className="list-comment">
                            <Note 
                                index = {activeItem} 
                                video = {listVideo[activeItem]} 
                                course = {course}
                                time = {videoState?.currentTime}
                                // onPlay = {handlePlay}
                                // onPause = {handlePause}
                                // onSeek = {handleSeek}
                            />
                        </div>
                    </div>: ''
                }
                {
                    choose === 'tools' ? 
                    <div className="comment-wrapper">
                        <div className="list-comment">
                            Tools
                        </div>
                    </div>: ''
                }
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
                    <div className ="list_video_item can-click">
                        <div className= "final-exam-text">
                            <Link to={"/do-quiz/" + course?.id}>
                                <i class='bx bx-send'></i> Final Exam
                            </Link>
                        </div>
                    </div>
                    <div className ="disabled list_video_item can-click">
                        <div className= "final-exam-text">
                            <Link onClick={ (event) => event.preventDefault()}>
                                <i class='bx bxs-lock'></i> Final Exam
                            </Link> 
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LearningSpace
