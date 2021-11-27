import React from 'react'
import moment from 'moment';
import "./comment.css"
import defaultAvatar from "../../../assets/images/kai.jpg"

const Comment = ({comment}) => {
    const { content, createdTime,user } = comment;
    return (
        <div>
            <div class="comment-item media border p-3">
                <img src={user.avatar|| defaultAvatar}
                    alt={user.firstName} style={{maxWidth: 50}} className="rounded-circle"/>
                <div className="media-body">
                    <h5>{user.firstName + " " +user.lastName} 
                        <small>
                            <i>Posted on {createdTime}</i>
                        </small>
                    </h5>
                    <p> {content}</p>
                </div>
            </div>
        </div>
    )
}

export default Comment
