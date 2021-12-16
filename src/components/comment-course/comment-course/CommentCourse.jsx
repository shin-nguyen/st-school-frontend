import React from 'react'
import AllComment from '../all-comment/AllComment'
import CommentBox from '../comentBox/CommentBox'

const CommentCourse = (props) => {
    const { course } = props
    console.log(course)
    return (
        <div>
            <div className='comment-box'>
                <h5 className="text-muted mb-4">
                    {/* <span className="badge badge-success">{blog.comments.length}</span>{" "}
                    Comment {blog.comments.length > 0 ? comments.length : ""} */}
                </h5>
                <CommentBox
                    courseId={course.id}
                />
                <AllComment
                    course={course}
                />
            </div>
        </div>
    )
}

export default CommentCourse
