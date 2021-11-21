import React from 'react'
import moment from 'moment';
import "./comment.css"
import defaultAvatar from "../../../assets/images/kai.jpg"

const Comment = ({comment}) => {
    const { content, lastModifiedDate,user } = comment;
    return (
        <div>
            <div class="comment-item media border p-3">
                <img src={user.avatar|| defaultAvatar}
                    width="58"
                    height="58"
                    alt={user.firstName} className="rounded-circle"/>
                <div className="media-body">
                    <h5>{user.firstName + " " +user.lastName} 
                        <small>
                            <i>Posted on {comment.createdTime}</i>
                        </small>
                    </h5>
                    <p> {content}</p>
                </div>
            </div>
        </div>
    )
}

export default Comment
