import React, { useEffect, useState } from "react";
import "./list-comment.css";
import {
    getCommentOfBlog,
    getCommentOfCourse,
} from "../../../services/comment-service";
import { useDispatch, useSelector } from "react-redux";
import defaultAvatar from "../../../assets/images/kai.jpg";
import { replyComment } from "../../../services/comment-service";
import ListRepComment from "../list-rep-comment/ListRepComment";

const AllComment = (props) => {
    const dispatch = useDispatch();
    const comments = useSelector((state) => state.comment.listComment);
    const commentsShow = comments?.sort((a, b) => b.id - a.id);
    const [repValue, setRepValue] = useState("");
    const [repCmt, setRepCmt] = useState({ key: "", status: false });
    const blog = props?.blog;
    const course = props?.course;

    console.log("re-render")
    console.log(commentsShow)

    const showRepComment = (id) => {
        setRepCmt({ key: id, status: !repCmt.status });
    };

    const handleRepComment = (id) => {
        if (1) {
            if (repValue.trim() !== "") {
                const comment = {
                    "content": repValue
                }
                dispatch(replyComment(id, comment));
                setRepValue("");
            }
            // setRepCmt({ key: "", status: false });
        } else alert("Đăng nhập đi bạn eiii");
    };

    useEffect(() => {
        const getComments = async () => {
            (await props.blog)
                ? dispatch(getCommentOfBlog(blog?.id))
                : dispatch(getCommentOfCourse(course?.id));
        };
        getComments();
    }, []);

    return (
        <div class="all-comment">
            <h5 className="comment-total mb-4">
                <span className="">{comments.length + " comments"}</span>{" "}
                <i class="bx bx-sm bx-message-square-dots"></i>
            </h5>
            {commentsShow.map((comment) => (
                <>
                    <div
                        className="comment"
                        span={18}
                        style={{ marginTop: "1rem" }}
                        xs={24}
                        sm={24}
                        md={18}
                    >
                        <div className="all-comment-info">
                            <div style={{ display: "flex" }}>
                                <div className="topnav__right-user__image">
                                    <img
                                        src={comment.user.avatar || defaultAvatar}
                                        alt={comment.user.firstName}
                                    />
                                </div>
                                {blog ? (
                                    comment.user?.id === blog.user?.id ? (
                                        <strong>
                                            {comment.user?.firstName + " " + comment.user?.lastName}{" "}
                                            <span>Author</span>
                                            <div className="comment-time">{comment.createdTime}</div>
                                        </strong>
                                    ) : (
                                        <strong>
                                            {comment.user?.firstName + " " + comment.user?.lastName}
                                            <div className="comment-time">{comment.createdTime}</div>
                                        </strong>
                                    )
                                ) : comment.user?.roles[0] === "ADMIN" ? (
                                    <strong className="comment-container">
                                        {comment.user?.firstName + " " + comment.user?.lastName}{" "}
                                        <span>Admin</span>
                                        <div className="comment-time">{comment.createdTime}</div>
                                        <div className="all-comment-content">{comment.content}</div>
                                    </strong>
                                ) : (
                                    <strong  className="comment-container">
                                        {comment.user?.firstName + " " + comment.user?.lastName}
                                        <div className="comment-time">{comment.createdTime}</div>
                                        <div className="all-comment-content">{comment.content}</div>
                                    </strong>
                                )}
                            </div>
                        </div>
                        <div className="k">
                            <div className="all-comment-more-chat can-click" onClick={() => showRepComment(comment?.id)}>
                                {
                                    repCmt.status === true && repCmt.key === comment.id ?
                                    <p><i class='bx bxs-hide'></i> Hide</p> : 
                                    <p><i class="bx bxs-message-add"></i> {comment?.replies? comment?.replies?.length : 0} Reply</p>
                                }
                            </div>
                            <div className="comment-replies-container">
                                <div className="comment-replies-box">
                                    {
                                        repCmt.status === true && repCmt.key === comment.id ? (
                                            <div className="col"
                                                span={18}
                                                xs={24}
                                                md={18}
                                                align="start"
                                                style={{
                                                    alignItems: "center",
                                                    marginTop: "1rem",
                                                    marginBottom: "1rem",
                                                }}
                                            >
                                                <div
                                                    className="comment-area"
                                                    style={{ display: "flex", alignItems: "center" }}
                                                >
                                                    <textarea
                                                        placeholder="Enter the comment"
                                                        rows={10}
                                                        cols={3}
                                                        vaule={repValue}
                                                        onChange={(e) => setRepValue(e.target.value)}
                                                    ></textarea>
                                                </div>

                                                <div className="comment-send">
                                                    <button
                                                        onClick={() => handleRepComment(comment.id)}
                                                    >Reply</button>
                                                </div>
                                            </div>
                                        ) : (
                                            ""
                                        )
                                    }
                                </div>
                                <div className="comment-replies-list">
                                    {
                                        comment?.replies?.length > 0 && repCmt.status == true && repCmt.key == comment.id ? (
                                            <ListRepComment
                                                allrepcomment={comment?.replies}
                                                showRepComment={showRepComment}
                                                id={comment?.id}
                                                blog={blog}
                                                course={course}
                                            ></ListRepComment>
                                        ) : (
                                            ""
                                        )
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            ))}
        </div>
    );
};

function isPropsAreEqual(prevNote, nextNote) {
    return prevNote.course === nextNote.course;
}

export default React.memo(AllComment, isPropsAreEqual);
