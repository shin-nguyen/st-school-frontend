import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getReviewsOfCourse, addReview } from '../../services/review-service'
import ProgressBar from '../share/progress-bar/ProgressBar';
import { Rating } from '@mui/material';
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import defaultAvatar from "../../assets/images/kai.jpg";

import './review-course.css'

const ReviewCourse = (props) => {

    const defaultSize = 10;
    const defaultValueIncreased = 10;

    const { id } = useParams()
    const dispatch = useDispatch()

    const [star, setStar] = useState(0)
    const [showRate, setShowRate] = useState(false)
    const [showEvaluate, setShowEvalute] = useState(false)
    const [evaluate, setEvaluate] = useState('')
    const [averageRate, setAverageRate] = useState(0)

    // const {userInfo} = useSelector(state => state.userSignin)
    const listReview = useSelector(state => state.review.listReview)
    const [listSize, setListSize] = useState(defaultSize);
    const reviewsShow = listReview?.sort((a, b) => b.id - a.id).slice(0, listSize);

    const updateList = () => {
        listSize + defaultValueIncreased < listReview?.length ? setListSize(listSize + defaultValueIncreased) : setListSize(listReview.length)
    }

    const countReview = listReview.length

    const fiveStar = countReview > 0 ? Math.round(listReview.filter(x => x.rate === 5).length / countReview * 100) : 0
    const fourStar = countReview > 0 ? Math.round(listReview.filter(x => x.rate === 4).length / countReview * 100) : 0
    const threeStar = countReview > 0 ? Math.round(listReview.filter(x => x.rate === 3).length / countReview * 100) : 0
    const twoStar = countReview > 0 ? Math.round(listReview.filter(x => x.rate === 2).length / countReview * 100) : 0
    const oneStar = countReview > 0 ? Math.round(listReview.filter(x => x.rate === 1).length / countReview * 100) : 0

    const onFinish = () => {
        const review = {
            rate: star,
            content: evaluate,
            course: {
                id: id
            }
        }
        dispatch(addReview(review))
        setEvaluate('')
        setShowEvalute(false)
        setShowRate(false)
    }

    const setRate = (value) => {
        setStar(value)
        setShowEvalute(true)
    }

    useEffect(() => {
        dispatch(getReviewsOfCourse(id));
        setAverageRate(Math.round((listReview?.reduce((a, c) => a + c.rate, 0) / countReview)*10)/10)
        return () => {
            return [];
        }
    }, [dispatch, id, countReview]);

    return (
        <div className="">
            <div className='row'>
                <divc className='col' span={18} xs={24} sm={24} md={24} style={{ minWidth: '100%' }}>
                    <span className="rate-star-title">{listReview.length} Reviews</span>
                </divc>
            </div>
            <div className='row'>
                <div className='col' span={18} xs={24} sm={24} md={18}>
                    <div className='rate'>
                        <div className="rate-info">
                            <div className='row'>
                                <div className='col col-sm-3' span={7} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
                                    <p className="star-average" style={{ textTransform: 'uppercase', fontSize: '18px' }}>Average Rate</p>
                                    <p className="star-average-num" style={{ marginBottom: 0, fontSize: '25px', color: 'orange' }}>
                                        {isNaN(averageRate) ? 0 : averageRate}
                                        <StarOutlineIcon sx={{ color: 'orange' }} />
                                    </p>
                                </div>
                                <div className='col' span={10}>
                                    <li className="thongke">
                                        <div className="numstar">5
                                            <StarOutlineIcon sx={{ color: 'orange' }} />
                                        </div>
                                        <p className="percent" style={{ display: 'flex' }}><ProgressBar bgcolor="orange" progress={fiveStar} height={25} /></p>
                                    </li>
                                    <li className="thongke">
                                        <div className="numstar">4
                                            <StarOutlineIcon sx={{ color: 'orange' }} />
                                        </div>
                                        <p className="percent" style={{ display: 'flex' }}><ProgressBar bgcolor="orange" progress={fourStar} height={25} /></p>
                                    </li>
                                    <li className="thongke">
                                        <div className="numstar">3
                                            <StarOutlineIcon sx={{ color: 'orange' }} />
                                        </div>
                                        <p className="percent" style={{ display: 'flex' }}><ProgressBar bgcolor="orange" progress={threeStar} height={25} /></p>
                                    </li>
                                    <li className="thongke">
                                        <div className="numstar">2
                                            <StarOutlineIcon sx={{ color: 'orange' }} />
                                        </div>
                                        <p className="percent" style={{ display: 'flex' }}><ProgressBar bgcolor="orange" progress={twoStar} height={25} /></p>
                                    </li>
                                    <li className="thongke">
                                        <div className="numstar">1
                                            <StarOutlineIcon sx={{ color: 'orange' }} />
                                        </div>
                                        <p className="percent" style={{ display: 'flex' }}><ProgressBar bgcolor="orange" progress={oneStar} height={25} /></p>
                                    </li>
                                </div>
                                {
                                    <div className='col col-sm-3' span={7} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
                                        <button className='guidanhgia'
                                            onClick={() => {
                                                setShowRate(true)
                                            }
                                            }>
                                            Review Now
                                        </button>
                                    </div>
                                }
                            </div>
                        </div>
                        {
                            showRate ? (
                                <div className="rate-star" style={{ fontSize: '15px', fontWeight: 'bold', padding: '1rem 0' }}>
                                    Please choose the rate:
                                    <Rating
                                        name="simple-controlled"
                                        value={star}
                                        onChange={(event, value) => { setRate(value) }}
                                    />
                                </div>
                            ) : ''
                        }
                        {
                            showEvaluate ? (<div className="rate-send">
                                <p>Review: </p>
                                <textarea placeholder="Please enter review..." onChange={(e) => setEvaluate(e.target.value)}></textarea>
                                <button className='guidanhgia' onClick={() => onFinish()}> Send </button>
                            </div>) : ''
                        }

                    </div>
                </div>
            </div>

            <div className='row list-review' style={{ marginTop: '1rem' }}>
                {
                    reviewsShow.map(item => (
                        <>
                            <div
                                className="col comment"
                                span={18}
                                style={{ marginTop: "1rem" }}
                                xs={24}
                                sm={24}
                                md={18}
                            >
                                <div className="all-review-info">
                                    <div style={{ display: "flex" }}>
                                        <div className="topnav__right-user__image">
                                            <img
                                                src={item.user?.avatar || defaultAvatar}
                                                alt={item.user?.firstName}
                                            />
                                        </div>
                                        <strong>
                                                {item.user?.firstName + " " + item.user?.lastName}
                                                <div className="comment-time">{item.createdTime}</div>
                                                <div className="all-reply-content">
                                                    <Rating name="read-only" value={item.rate} readOnly /> <br/>
                                                    {
                                                        item.content?  <p className="review-content">{item.content}</p> : null
                                                    }
                                                </div>
                                        </strong>
                                    </div>
                                </div>
                            </div>
                        </>
                    ))
                }
            </div>
            <div className='loadmore-container'>
                {
                    listSize < listReview?.length ?
                        <div className='loadmore-btn can-click' onClick={() => updateList()}>
                            Load more
                        </div> : listSize >= defaultSize && defaultSize < listReview.length ?
                            <div className='loadmore-btn can-click' onClick={() => setListSize(defaultSize)}>
                                Hide
                            </div> : null
                }
            </div>
        </div>
    );
}

export default ReviewCourse;