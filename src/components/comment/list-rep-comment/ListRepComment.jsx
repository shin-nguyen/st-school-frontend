import React from 'react'
import defaultAvatar from "../../../assets/images/kai.jpg";

const ListRepComment = (props) => {
  const {allrepcomment, showRepComment, id, blog, course} = props;
  const commentsShow = allrepcomment?.sort((a, b) => b.id - a.id);
  return (
    <div>
      {commentsShow?.map((comment) => (
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
                    <div className="all-comment-content">{comment.content}</div>
                  </strong>
                ) : (
                  <strong>
                    {comment.user?.firstName + " " + comment.user?.lastName}
                    <div className="comment-time">{comment.createdTime}</div>
                    <div className="all-comment-content">{comment.content}</div>
                  </strong>
                )}
              </div>
            </div>
          </div>
        </>
    ))}
    </div>)
  } 

export default ListRepComment