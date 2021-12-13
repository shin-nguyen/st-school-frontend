import React from 'react'
import AllComment from '../all-comment/AllComment'
import CommentBox1 from '../comentBox/CommentBox1'

const CommentBlog = (props) => {
    const {blog} = props
    console.log(blog)
    return (
        <div>
            <div className='comment-box'>
                <h5 className="text-muted mb-4">
                    {/* <span className="badge badge-success">{blog.comments.length}</span>{" "}
                    Comment {blog.comments.length > 0 ? comments.length : ""} */}
                </h5>
                <CommentBox1 
                    blogId = {blog.id}
                />
                <AllComment 
                    blog = {blog}
                />
            </div>
        </div>
    )
}

export default CommentBlog
