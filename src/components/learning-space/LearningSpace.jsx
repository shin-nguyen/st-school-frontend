import React from 'react'
import { useState, useEffect, useRef, useCallback } from 'react'
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
import Overview from './overview/Overview'
import Checkbox from '@mui/material/Checkbox';
import "./learningSpace.css"
import { Link } from 'react-router-dom'
import { updateProgress, getOrderByCourseAndUser } from '../../services/order-services'
import NoteBox from './note/NoteBox'
import NoteList from './note/NoteList'
import { findIndex } from '../../utils/utils'
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import { generateTimeToString} from "../../utils/utils"
import LearningTool from './tool/LearningTool'
import { toastSuccess, toastError } from "../../utils/utils";
import botAvatar from "../../assets/images/bot.png"
import Avatar from '@mui/material/Avatar';
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';

const ListVideoItem = props => {

    const active = props.active ? 'active' : ''
    const index = props.index + 1

    return (
        <div className="list_video_item can-click" onClick={props.onClick}>
            <div className={`list_video_item-inner ${active}`}>
                <ListItem>
                    <ListItemAvatar>
                        {
                            props.progress ? <Checkbox disabled checked color="success"/> : <Checkbox />
                        }
                    </ListItemAvatar>
                    <ListItemText primary={'Lesson ' + index + ': ' + props.name} secondary={generateTimeToString(props.duration)} />
                </ListItem>
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
    const [choose, setChoose] = useState('overview');
    const player = useRef(null);
    const [videoState, setVideoState] = useState(null);
    const course = useSelector(state => state.course.course);
    const order = useSelector(state => state.order.order);
    const listVideo = useSelector(state => state.video.listVideo);
    const dispatch = useDispatch();

    const [trueState, setTrueState] = useState(null);

    const handleChooseVideo = (item, index) => {
        setVideoSouce(item.source);
        setActiveItem(index);
        dispatch(updateProgress({
            "courseId": id,
            "video": item
        }))
        dispatch(getOrderByCourseAndUser(id));
        setAutoPlay(true);
        setTrueState(!trueState)
    }

    const handleChooseItem = (item, index) => {
        setChoose(item.route)
        setActiveChoose(index)
    }

    const handleSeek = (time, item) => {
        console.log(item)
        console.log(time)
        const index = findIndex(listVideo, item?.id)
        console.log(index)
        if (index === -1) return
        setVideoSouce(item?.source);
        setActiveItem(index);
        setAutoPlay(true);
        player?.current.actions.seek(time);
        player?.current.actions.pause()
    }

    const handlePlay = () => {
        player?.current.actions.play()
    }

    const handlePause = () => {
        player?.current.actions.pause()
    }

    const isLearned = (order, video) => {
        return order.videos?.some(v => v.id === video.id);
    }

    useEffect(() => {
        player.current.subscribeToStateChange(setVideoState);
    }, [setVideoState]);

    useEffect(() => {
        const loadInfo = async () => {
            await dispatch(getCourseById(id));
            await dispatch(getVideosOfCourse(id));
            await dispatch(getOrderByCourseAndUser(id));
            if (videoSource === '' && listVideo !== null) {
                try {
                    setVideoSouce((listVideo[0].source));
                } catch {
                    setVideoSouce("");
                }
            }
        };
        console.log(order)
        loadInfo();
    }, [dispatch, videoSource]);

    return (
        <div className="learning-space body-content">
            <div className="content-wrapper">
                <div className="content-container">
                    <div className="video-wrapper">
                        <div className="topleft can-click">
                        <HtmlTooltip
                            title={
                            <React.Fragment>
                                <Typography color="inherit">Hi Boss, I'm your assistant - Shila</Typography>
                                {"Come to me whenever you need help!"}
                            </React.Fragment>
                            }
                        >
                            <Avatar
                                alt="Ala Chan"
                                src={botAvatar}
                                sx={{ width: 80, height: 80 }}
                            />
                        </HtmlTooltip>   
                        </div>
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
                        {
                            order?.isComplete ?
                                <div>
                                    <Link to={"/certificate/" + order?.id} >
                                        <ChoosebarItem
                                            title={"Get certificate"}
                                        />
                                    </Link>
                                </div> :
                                <div className='disabled'>
                                    <ChoosebarItem
                                        title={"Get certificate"}
                                        onClick={() => toastError("You must complete the course first!")}
                                    />
                                </div>       
                        }
                    </div>
                </div>
                {
                    choose === 'overview' ?
                        <div className="comment-wrapper">
                            <div className="list-comment">
                                <Overview course={course} listVideo={listVideo} />
                            </div>
                        </div> : ''
                }
                {
                    choose === 'comments' ?
                        <div className="comment-wrapper">
                            <div className="list-comment">
                                <Comment course={course} />
                            </div>
                        </div> : ''
                }
                {
                    choose === 'reviews' ?
                        <div className="comment-wrapper">
                            <div className="list-comment">
                                <ReviewCourse course={course} />
                            </div>
                        </div> : ''
                }
                {
                    choose === 'notes' ?
                        <div className="comment-wrapper">
                            <div className="list-comment">
                                <NoteBox
                                    index={activeItem}
                                    listVideo={listVideo}
                                    video={listVideo[activeItem]}
                                    course={course}
                                    time={videoState?.currentTime}
                                    onPlay={handlePlay}
                                    onPause={handlePause}
                                />
                                <NoteList
                                    course={course}
                                    listVideo={listVideo}
                                    onSeek={handleSeek}
                                />
                            </div>
                        </div> : ''
                }
                {
                    choose === 'tools' ?
                        <div className="comment-wrapper">
                            <div className="list-comment">
                                <LearningTool />
                            </div>
                        </div> : ''
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
                                duration={video.duration}
                                onClick={() => handleChooseVideo(video, index)}
                                active={index === activeItem}
                                progress={isLearned(order, video)}
                            />
                        ))
                    }
                    {
                        order.progress == 100 ?
                            <div className="list_video_item can-click">
                                <div className="final-exam-text">
                                    <Link to={"/do-quiz/" + course?.id}>
                                        <i class='bx bx-send'></i> Final Exam
                                    </Link>
                                </div>
                            </div>
                            :
                            <div className="disabled list_video_item can-click">
                                <div className="final-exam-text">
                                    <Link onClick={(event) => event.preventDefault()}>
                                        <i class='bx bxs-lock'></i> Final Exam
                                    </Link>
                                </div>
                            </div>
                    }
                </div>
            </div>
        </div>
    )
}

const HtmlTooltip = styled(({ className, ...props }) => (
    <Tooltip {...props} classes={{ popper: className }} />
  ))(({ theme }) => ({
    [`& .${tooltipClasses.tooltip}`]: {
      backgroundColor: '#f5f5f9',
      color: 'rgba(0, 0, 0, 0.87)',
      maxWidth: 270,
      fontSize: theme.typography.pxToRem(12),
      border: '1px solid #dadde9',
    },
  }));

export default LearningSpace
