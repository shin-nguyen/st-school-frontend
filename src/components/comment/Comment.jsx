import React from 'react'
import ListComment from './list-comment/ListComment'
import CommentBox from './coment-box/CommentBox'

const Comment = (props) => {
    const blog = props?.blog
    const course = props?.course
    return (
        <div>
            <div className='comment-box'>
                {
                    course?
                    <h5 className="comment-total mb-4">
                        <span className="">{course.commentTotal + " comments"}</span>{" "}
                        <i class="bx bx-sm bx-message-square-dots"></i>
                    </h5> : null
                }
                <CommentBox
                    blog={blog}
                    course={course}
                />
                <ListComment
                    blog={blog}
                    course={course}
                />
            </div>
        </div>
    )
}

export default Comment
