import React,{useEffect} from "react";
import './allComment.css'
import {fetchCommentById} from "../../../services/comment-service";
import {useDispatch, useSelector} from "react-redux";
import defaultAvatar from "../../../assets/images/kai.jpg"

const AllComment = (props) => {
    const dispatch = useDispatch();
    const comments= useSelector(state => state.comment.comments);
    const commentsShow = comments.sort((a,b) => b.id - a.id);
    const {blog} = props
    console.log(blog)

    useEffect(() => {
        dispatch(fetchCommentById(blog.id));
    }, [blog]);

    return (
        <div class="all-comment">
             <h5 className="comment-total mb-4">
                <span className="">{comments.length + " comments"}</span>{" "}
                <i class='bx bx-sm bx-message-square-dots' ></i>
            </h5>
            {commentsShow.map((comment) => (
            <>
                <div className="comment" span={18} style={{ marginTop: "1rem" }} xs={24} sm={24} md={18}>
                    <div className="all-comment-info">
                        <div style={{ display: "flex" }}>
                            <div className="topnav__right-user__image">
                                <img src={comment.user.avatar || defaultAvatar} alt={comment.user.firstName} />
                            </div>
                            {
                                comment.user.id === blog.user.id ? (
                                    <strong>
                                        {comment.user.firstName +" "+comment.user.lastName} <span>Author</span>
                                        <div className="comment-time">{comment.createdTime}</div>
                                    </strong>
                                ) : (
                                    <strong>{comment.user.firstName +" "+comment.user.lastName}
                                    <div className="comment-time">{comment.createdTime}</div></strong>
                                )
                            }
                        </div>
                    </div>
                    <div className="all-comment-content">
                        {comment.content}
                    </div>
                    <div className="all-comment-more btn can-click" onClick={() => alert("Coming Soon...")}>
                        <div className="all-comment-more-chat can-click">
                            <p><i class='bx bxs-message-add'></i> Reply</p>
                        </div>
                    </div>
                </div>
            </>
        ))}
        </div>
    );
}

export default AllComment
