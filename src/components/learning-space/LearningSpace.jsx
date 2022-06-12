import React from 'react'
import { useState, useEffect, useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useParams } from 'react-router'
import { getCourseById } from '../../services/course-services'
import { getVideosOfCourse } from '../../services/video-services'
import { Player } from 'video-react';
import Comment from "../comment/Comment";
import choosebar_items from '../../assets/JsonData/choosebar_routes.json'
import ReviewCourse from '../review-course/ReviewCourse'
import Overview from './overview/Overview'
import { Link } from 'react-router-dom'
import { updateProgress, getOrderByCourseAndUser } from '../../services/order-services'
import { isNewbie } from '../../services/user-service'
import NoteBox from './note/NoteBox'
import NoteList from './note/NoteList'
import { findIndex } from '../../utils/utils'
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import { generateTimeToString } from "../../utils/utils"
import LearningTool from './tool/LearningTool'
import { toastError } from "../../utils/utils";
import botAvatar from "../../assets/images/bot.png"
import Avatar from '@mui/material/Avatar';
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import Backdrop from '@mui/material/Backdrop';
import Step from './step/Step'
import audios from '../../assets/audios/audios'
import "../../../node_modules/video-react/dist/video-react.css";
import "./learningSpace.css"

const ListVideoItem = props => {

    const active = props.active ? 'active' : ''
    const index = props.index + 1

    return (
        <div className={"list_video_item can-click"} onClick={props.onClick}>
            <div className={props.activeStep ? " active-step" : `list_video_item-inner ${active}`}>
                <ListItem>
                    <ListItemAvatar>
                        {
                            props.progress ? <input className='largerCheckbox' type="checkbox" checked disabled /> :
                                <input className='largerCheckbox' type="checkbox" />
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
        <div className={"choosebar__item" + (props.isStep ? " active-step" : "")} onClick={props.onClick}>
            <div className={`choosebar__item-inner ${active}`}>
                <span>
                    {props.title}
                </span>
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

const LearningSpace = () => {
    let { id } = useParams();
    const dispatch = useDispatch();

    const course = useSelector(state => state.course.course);
    const order = useSelector(state => state.order.order);
    const listVideo = useSelector(state => state.video.listVideo);
    const isUserNewbie = useSelector(state => state.user.isNewbie);

    const [videoSource, setVideoSouce] = useState('');
    const [showPlaylist, setShowPlaylist] = useState(true);
    const [activeItem, setActiveItem] = useState(0);
    const [activeChoose, setActiveChoose] = useState(0);
    const [autoPlay, setAutoPlay] = useState(false);
    const [choose, setChoose] = useState('overview');

    const [step, setStep] = useState(0);

    const player = useRef(null);
    const [videoState, setVideoState] = useState(null);
    const [prevTime, setPrevTime] = useState(0);

    const audioRef = useRef();
    const [audioIndex, setAudioIndex] = useState(-1);
    const [isPlay, setPlay] = useState(false);

    const [open, setOpen] = React.useState(false);

    console.log(isUserNewbie)

    const handleLoadedData = () => {
        if (isPlay) audioRef.current.play();
    };

    const handleChooseVideo = (item, index) => {
        setVideoSouce(item.source);
        setActiveItem(index);
        dispatch(updateProgress({
            "courseId": id,
            "video": item
        }))
        dispatch(getOrderByCourseAndUser(id));
        setAutoPlay(true);
    }

    const handleChooseItem = (item, index) => {
        setChoose(item.route)
        setActiveChoose(index)
    }

    const handleSeek = (time, item) => {
        const index = findIndex(listVideo, item?.id)
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

    const handlePrevStep = () => {
        setAudioIndex((audioIndex - 1) % audios.length)

        if (!open) {
            setOpen(true)
        }

        if (!isPlay) {
            setPlay(true);
            audioRef.current.play();
        }

        if (step < 4 && !showPlaylist) {
            setShowPlaylist(true)
        }

        if (step > 1)
            setStep(step - 1)
        else {
            setStep(0)
            setPlay(false)
            setAudioIndex(-1)
            audioRef.current.pause();
        }

        if (step === 1) setOpen(false);
    }

    const handleNextStep = () => {
        setAudioIndex((audioIndex + 1) % audios.length)

        if (!open) {
            setOpen(true)
        }

        if (!isPlay) {
            setPlay(true);
            audioRef.current.play();
        }

        if (step < 4 && !showPlaylist) {
            setShowPlaylist(true)
        }

        if (step < 11)
            setStep(step + 1)
        else {
            setStep(0)
            setPlay(false)
            setAudioIndex(-1)
            audioRef.current.pause();
        }

        if (step === 11) setOpen(false);
    }

    const isLearned = (order, video) => {
        return order.videos?.some(v => v.id === video.id);
    }

    const checkLearning = () => {
        console.log("check")
        console.log(videoState?.currentTime)
        console.log(prevTime)
        if (!prevTime) {
            setPrevTime(videoState?.currentTime)
            return
        }

        if (videoState?.currentTime - prevTime > 10) {
            // alert("m tua nhanh qua roi do")
            console.log(videoState?.currentTime)
            console.log(prevTime)
            handleSeek(0)
        } else {
            setPrevTime(videoState?.currentTime)
        }
    };

    useEffect(() => {
        player.current.subscribeToStateChange(setVideoState);
    }, [setVideoState]);

    useEffect(() => {
        const loadInfo = async () => {
            await dispatch(getCourseById(id));
            await dispatch(getVideosOfCourse(id));
            await dispatch(getOrderByCourseAndUser(id));
            await dispatch(isNewbie());
        };
        debugger
        loadInfo();
        setTimeout(() => {
            if(isUserNewbie){
                setStep(1);
                setOpen(true);
                setAudioIndex((audioIndex + 1) % audios.length)
                setPlay(true);
                audioRef.current.play();
            }
        }, 1500);
        if (videoSource === '' && listVideo !== null) {
            try {
                setVideoSouce((listVideo[0].source));
            } catch {
                setVideoSouce("");
            }
        }
        // setInterval(function (){
        //     checkLearning()
        // },5000);
    }, [dispatch, videoSource]);

    return (
        <div className={"learning-space body-content" + (step !== 0 ? " disabled-background" : null)} >
            <div className={step === 1 ? ('step' + step) : "hidden"}>
                <Step 
                    step = {1}
                    message = {step1Message}
                    onNext = {handleNextStep}
                    onPrevious = {handlePrevStep}
                />
            </div>
            <div className={step === 11 ? ('step' + step) : "hidden"}>
                <Step 
                    step = {11}
                    message = {step11Message}
                    onNext = {handleNextStep}
                    onPrevious = {handlePrevStep}
                />
            </div>
            <div className="content-wrapper">
                <Backdrop
                    sx={{ color: '#fff', zIndex: 5}}
                    open={open}
                    onClick={() => {
                        setStep(0)
                        setOpen(false)
                        setPlay(false)
                        setAudioIndex(-1)
                        audioRef.current.pause();
                    }}
                >
                </Backdrop>
                <div className={"content-container" + (step === 5? " prioritized" : "")}>
                    <div className="video-wrapper">
                        <div className="topleft can-click" onClick={() => { handleNextStep() }}>
                            <HtmlTooltip
                                title={
                                    <React.Fragment>
                                        <Typography color="inherit">Hi Boss, I'm your assistant - XyXy</Typography>
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
                    <div className={step === 5 ? ('step' + step) : "hidden"}>
                        <Step 
                            step = {5}
                            message = {step5Message}
                            onNext = {handleNextStep}
                            onPrevious = {handlePrevStep}
                        />
                    </div>
                    <div className={step === 6 ? ('step' + step) : "hidden"}>
                        <Step 
                            step = {6}
                            message = {step6Message}
                            onNext = {handleNextStep}
                            onPrevious = {handlePrevStep}
                        />
                    </div>
                    <div className={step === 7 ? ('step' + step) : "hidden"}>
                        <Step 
                            step = {7}
                            message = {step7Message}
                            onNext = {handleNextStep}
                            onPrevious = {handlePrevStep}
                        />
                    </div>
                    <div className={step === 8 ? ('step' + step) : "hidden"}>
                        <Step 
                            step = {8}
                            message = {step8Message}
                            onNext = {handleNextStep}
                            onPrevious = {handlePrevStep}
                        />
                    </div>
                    <div className={step === 9 ? ('step' + step) : "hidden"}>
                        <Step 
                            step = {9}
                            message = {step9Message}
                            onNext = {handleNextStep}
                            onPrevious = {handlePrevStep}
                        />
                    </div>
                    <div className={step === 10 ? ('step' + step) : "hidden"}>
                        <Step 
                            step = {10}
                            message = {step10Message}
                            onNext = {handleNextStep}
                            onPrevious = {handlePrevStep}
                        />
                    </div>
                    <div className='choosebar-wrapper can-click'>
                        {
                            choosebar_items.map((item, index) => (
                                <ChoosebarItem
                                    title={item.display_name}
                                    icon={item.icon}
                                    active={index === activeChoose && step === 0}
                                    isStep={index + 5 === step}
                                    onClick={() => handleChooseItem(item, index)}
                                />
                            ))
                        }
                        {
                            order?.isComplete ?
                                <div className={(step === 10 ? " active-step" : "")}>
                                    <Link to={"/certificate/" + order?.id} >
                                        <ChoosebarItem
                                            title={"Get certificate"}
                                        />
                                    </Link>
                                </div> :
                                <Tooltip title="You must complete the course and have a final test score of more than 8 marks!">
                                    <div className={"disabled" + (step === 10 ? " active-step" : "")}>
                                        <ChoosebarItem
                                            title={"Get certificate"}
                                            onClick={() => toastError("You must complete the course and have a final test score of more than 8 marks!")}
                                        />
                                    </div>
                                </Tooltip>
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
            <div className={"playlist-wrapper show-" + showPlaylist + " " + (step === 2 || step === 3 || step === 4? " prioritized" : "")}>
                <div className="playlist-header">
                    <span>{course.name}</span>
                    <i className='bx bx-md bx-x-circle bx-burst-hover can-click mt_5-'
                        onClick={() => setShowPlaylist(!showPlaylist)}></i>
                </div>
                <div className={step === 2 ? ('step' + step) : "hidden"}>
                    <Step 
                        step = {2}
                        message = {step2Message}
                        onNext = {handleNextStep}
                        onPrevious = {handlePrevStep}
                    />
                </div>
                <div className={step === 3 ? ('step' + step) : "hidden"}>
                    <Step 
                        step = {3}
                        message = {step3Message}
                        onNext = {handleNextStep}
                        onPrevious = {handlePrevStep}
                    />
                </div>
                <div className={step === 4 ? ('step' + step) : "hidden"}>
                    <Step 
                        step = {4}
                        message = {step4Message}
                        onNext = {handleNextStep}
                        onPrevious = {handlePrevStep}
                    />
                </div>
                <div className={"playlist-content" + (step === 2 ? " active-step" : "")}>
                    {
                        listVideo.map((video, index) => (
                            <ListVideoItem
                                index={index}
                                name={video.name}
                                duration={video.duration}
                                onClick={() => handleChooseVideo(video, index)}
                                active={index === activeItem && step === 0}
                                activeStep={index === 0 && step === 3}
                                progress={isLearned(order, video)}
                            />
                        ))
                    }
                    {
                        order.progress == 100 ?
                            <div className={"list_video_item can-click" + (step === 4 ? " active-step" : "")}>
                                <div className="final-exam-text">
                                    <Link to={"/do-quiz/" + course?.id}>
                                        <i class='bx bx-send'></i> Final Exam
                                    </Link>
                                </div>
                            </div>
                            :
                            <div className={"disabled list_video_item can-click" + (step === 4 ? " active-step" : "")}>
                                <Tooltip title="You must complete the course first!">
                                    <div className="final-exam-text">
                                        <Link onClick={(event) => event.preventDefault()}>
                                            <i class='bx bxs-lock'></i> Final Exam
                                        </Link>
                                    </div>
                                </Tooltip>
                            </div>
                    }
                </div>
            </div>
            <audio
                ref={audioRef}
                src={audios[audioIndex]?.src}
                onLoadedData={handleLoadedData}
                onEnded={() => setPlay(false)}
            />
        </div>
    )
}

function isPropsAreEqual(prevNote, nextNote) {
    return prevNote.course === nextNote.course || prevNote.order === nextNote.order;
}

export default React.memo(LearningSpace, isPropsAreEqual)

const email = localStorage.getItem("email");
const step1Message = "Hi " + email + ". Welcome to ST-School! Before starting to study, let me take you on a tour to see what ST-School has to offer. ≧◠◡◠≦✌";
const step2Message = "Here is a list of all the lessons. You will very often interact here to transfer lessons and do homework >_<. You can also hide this list and open it when needed.";
const step3Message = "This is the first lesson for you, when you finish this lesson, I will tick 'Green tick' next to it to mark you have completed the lesson!";
const step4Message = "Let scroll to the bottom of the list. After you have finished all the lessons, you can take the final exam here.";
const step5Message = "All information about the course will be described here";
const step6Message = "This is where everyone can talk about the course. Let's learn together.";
const step7Message = "And don't forget to leave a review of the course here.";
const step8Message = "When studying, there will be many times when you want to take notes, at ST-School you won't need to waste paper and ink to do this.";
const step9Message = "Here are some ST-School tools to help you study better. Explore it, it will be very helpful.";
const step10Message = "Once you have completed the course and have a final test score of more than 8 marks, you can get a certificate of course completion here.";
const step11Message = "That is all. You can start studying already. Good luck with your studies. Bye.";
