import React,{useEffect,useState } from "react";
import Comment from '../comment/Comment'
import CommentBox from '../comentBox/CommentBox'
import './ListComment.css'
import {fetchCommentById} from "../../../services/comment-service";
import {useDispatch, useSelector} from "react-redux";

  
const ListComment = ({ isAuthenticated, loading, blogId }) => {

  const dispatch = useDispatch();
  const comments= useSelector(state => state.comment.comments);

  useEffect(() => {
      dispatch(fetchCommentById(blogId));
  }, []);

    return (
      <div className="comment-list">
        <h5 className="text-muted mb-4">
          <span className="badge badge-success">{comments.length}</span>{" "}
          Comment {comments.length > 0 ? comments.length : ""}
        </h5>
  
        {comments.length > 0 && comments.map((comment, index) => (
          <Comment key={index} comment={comment} />
        ))}
        {
        isAuthenticated && 
        <CommentBox  blogId={blogId} />}
  
        {(!isAuthenticated) && !loading ? (
          <div className="alert text-center alert-info">
            <a href='/login'>Please login to comment</a>
          </div>
        ) : null}
      </div>
    );
  }
  

export default ListComment
