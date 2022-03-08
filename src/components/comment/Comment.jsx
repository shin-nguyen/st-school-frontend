import React from 'react'
import ListComment from './list-comment/ListComment'
import CommentBox from './coment-box/CommentBox'

const Comment = (props) => {
    const blog = props?.blog
    const course = props?.course
    console.log(props.blog)
    return (
        <div>
            <div className='comment-box'>
                <h5 className="text-muted mb-4">
                    {/* <span className="badge badge-success">{blog.comments.length}</span>{" "}
                    Comment {blog.comments.length > 0 ? comments.length : ""} */}
                </h5>
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
