import React from 'react'
import moment from 'moment';
const Comment = ({comment}) => {
    const { userName, body, lastModifiedDate } = comment.toJS();
    return (
        <div>
            <div class="media border p-3">
                <img src="https://www.w3schools.com/bootstrap4/img_avatar3.png"
                 width="48"
                 height="48"
                 alt={userName} className="mr-3 mt-3 rounded-circle w-60"/>
                <div className="media-body">
                    <h4>{userName} <small><i>Posted on {moment(lastModifiedDate).format("lll")}</i></small></h4>
                    <p> {body}</p>
                </div>
            </div>
        </div>
    )
}

export default Comment
