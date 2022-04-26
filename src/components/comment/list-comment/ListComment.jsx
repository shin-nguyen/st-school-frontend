import React, { useEffect, useState } from "react";
import "./list-comment.css";
import {
    getCommentOfBlog,
    getCommentOfCourse,
} from "../../../services/comment-service";
import { useDispatch, useSelector } from "react-redux";
import defaultAvatar from "../../../assets/images/kai.jpg";

const AllComment = (props) => {
    const dispatch = useDispatch();
    const comments = useSelector((state) => state.comment.listComment);
    const commentsShow = comments?.sort((a, b) => b.id - a.id);
    const [repValue, setRepValue] = useState("");
    const [repCmt, setRepCmt] = useState({ key: "", status: false });
    const blog = props?.blog;
    const course = props?.course;

    const showRepComment = (id) => {
        setRepCmt({ key: id, status: !repCmt.status });
    };

    const handleRepComment = (value) => {
        if (1) {
            const comment = {

            };
            //   dispatch(repCommentProduct(id, comment));
            setRepValue("");
            setRepCmt({ key: "", status: false });
        } else alert("Đăng nhập đi bạn eiii");
    };

    useEffect(() => {
        const getComments = async () => {
            (await props.blog)
                ? dispatch(getCommentOfBlog(blog?.id))
                : dispatch(getCommentOfCourse(course?.id));
        };
        getComments();
    }, [props]);

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
                                    <strong>
                                        {comment.user?.firstName + " " + comment.user?.lastName}{" "}
                                        <span>Admin</span>
                                        <div className="comment-time">{comment.createdTime}</div>
                                    </strong>
                                ) : (
                                    <strong>
                                        {comment.user?.firstName + " " + comment.user?.lastName}
                                        <div className="comment-time">{comment.createdTime}</div>
                                    </strong>
                                )}
                            </div>
                        </div>
                        <div className="all-comment-content">{comment.content}</div>
                        <div
                            className="all-comment-more btn can-click"
                            onClick={() => showRepComment(comment?.id)}
                        >
                            <div className="all-comment-more-chat can-click">
                                <p>
                                    <i class="bx bxs-message-add"></i> Reply
                                </p>
                            </div>
                            {repCmt.status === true && repCmt.key === comment.id ? (
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
                                            placeholder="Xin mời để lại câu hỏi, CellphoneS sẽ trả lời trong 1h từ 8h - 22h mỗi ngày."
                                            rows={10}
                                            cols={3}
                                            vaule={repValue}
                                            onChange={(e) => setRepValue(e.target.value)}
                                        ></textarea>
                                    </div>

                                    <div className="comment-send">
                                        <button onClick={() => handleRepComment()}>Trả lời</button>
                                    </div>
                                </div>
                            ) : (
                                ""
                            )}
                        </div>
                    </div>
                </>
            ))}
        </div>
    );
};

export default AllComment;
