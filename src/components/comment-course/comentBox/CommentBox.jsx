import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { addComment } from "../../../services/comment-course-service"

const CommentBox = ({ courseId }) => {
    const dispatch = useDispatch();
    const isLoggedIn = useSelector((state) => state.user.isLoggedIn);
    const isLogin = localStorage.getItem("isLoggedIn");
    const [content, setContent] = useState("");

    const onFormSubmit = (event) => {
        event.preventDefault();
        const data = { course: { id: courseId }, content };
        if (content.length != 0) {
            dispatch(addComment(data));
        }
        setContent("");
    }

    return (
        <div className='comment-box'>
            {
                isLoggedIn || isLogin ?
                    <div className='col' span={18} align='start' style={{ alignItems: 'center' }} xs={24} sm={24} md={18}>
                        <div className="comment-area" style={{ display: 'flex', alignItems: 'center' }}>
                            <textarea
                                onChange={(event) => setContent(event.target.value)}
                                value={content}
                                className="form-control"
                                placeholder="Your Comment"
                                name="message"
                                rows="5"
                            />
                        </div>
                        <div className="comment-send">
                            <div className='btn btn-success' onClick={onFormSubmit}>Comment</div>
                        </div>
                    </div>
                    :
                    <div className="alert text-center alert-info">
                        <a href='/login'>Please login to comment</a>
                    </div>
            }
        </div>
    )
}

export default CommentBox
