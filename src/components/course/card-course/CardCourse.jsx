import React from 'react'
import './cardCourse.css'
import { Link } from 'react-router-dom'
import default_image from '../../../assets/images/loading.png'
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';
import { styled } from '@mui/material/styles';
import { useState, useEffect, useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getOrderByCourseAndUser } from '../../../services/order-services';
import { Rating } from '@mui/material';

const Card = (props) => {
    const dispatch = useDispatch();
    const course = props?.course

    useEffect(() => {
        const loadInfo = async () => {
            if (props?.isBought) {
                await dispatch(getOrderByCourseAndUser(course?.id));
            }
        };

        loadInfo();
        return () => {
            return [];
        };
    }, [dispatch]);

    return (
        <div className={props.isBought ? "card mb-20 h-330" : "card mb-20 h-445"}>
            <Link to={props.goto}>
                {
                    course.image ?
                        <img className="card-img-top" src={course.image} alt="" /> :
                        <img className="card-img-top" src={default_image} alt="" />
                }
            </Link>
            <div className="card-body">
                <div className="card-title">
                    <Link to={props.goto}>
                        <span>{course.name}</span>
                    </Link>
                </div>
                <div className="card-info-container">
                    <div className='card-info-item'>
                        <span>{course.language}</span> |
                        <Link to={"/courses"}>
                            <span> {course.topic}</span> |
                        </Link>
                        <span> {course.subTotal} </span> subscribers
                    </div>
                </div>
                {
                    props.isBought ?
                        <div className="card-content">
                            <div className="card-content-item">
                                <span>{course.averageRate}</span><Rating readOnly name="read-only" size="small" value={course.averageRate} precision={0.5} />
                            </div>
                        </div> :
                        <div className="card-content">
                            <div className="card-content-header">
                                {course.about}
                            </div>
                            <div className="card-content-item">
                                <span>{course.averageRate}</span><Rating readOnly name="read-only" size="small" value={course.averageRate} precision={0.5} />
                            </div>
                        </div>
                }
            </div>
            {
                props.isBought ?
                    <div className="learning-progress-bar">
                        <div className='progress-bar'>
                            <BorderLinearProgress variant="determinate" value={props.progress} color="primary" />
                        </div>
                        <div className='progress-detail'>
                            {
                                props.progress === 0 ? <p>START COURSE</p> : <p>{props.progress}% Complete</p>
                            }
                            {/* <Rating name="read-only" value={props.rating} readOnly size = 'small'/> */}
                        </div>
                    </div>
                    :
                    <div className="card-footer">
                        <div className="card-extend ">
                            <p>Price: </p>
                            <span>${course.price}</span>
                        </div>
                        <div className="card-action">
                            <Link to={props.goto} className='card-icon bx bxs-right-arrow-circle' />
                        </div>
                    </div>
            }
        </div>
    )
}

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
    height: 10,
    borderRadius: 0,
    [`&.${linearProgressClasses.colorPrimary}`]: {
        backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
    },
    [`& .${linearProgressClasses.bar}`]: {
        borderRadius: 0,
        backgroundColor: theme.palette.mode === 'light' ? '#1a90ff' : '#308fe8',
    },
}));

export default Card
