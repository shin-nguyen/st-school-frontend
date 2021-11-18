import React from 'react'
import moment from 'moment';
const Comment = ({comment}) => {
    const { content, lastModifiedDate,user } = comment;
    return (
        <div>
            <div class="media border p-3">
                <img src={user.avatar||"https://www.w3schools.com/bootstrap4/img_avatar3.png"}
                 width="48"
                 height="48"
                 alt={user.firstName} className="mr-3 mt-3 rounded-circle w-60"/>
                <div className="media-body">
                    <h4>{user.firstName} <small><i>Posted on {moment(lastModifiedDate).format("lll")}</i></small></h4>
                    <p> {content}</p>
                </div>
            </div>
        </div>
    )
}

export default Comment
