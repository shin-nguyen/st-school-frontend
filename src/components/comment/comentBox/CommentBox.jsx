import React, { Component } from 'react';
import './CommentBox.css';
import { useHistory } from 'react-router'
import {useDispatch} from "react-redux";
import { useState } from "react";
import {addComment} from "../../../services/comment-service"
import defaultAvatar from "../../../assets/images/kai.jpg"


const  CommentBox = ({blogId})  => {
    const dispatch = useDispatch();
    const history = useHistory()

    const [content, setContent] = useState("");

    const onFormSubmit = (event) => {
        event.preventDefault();
        const data = {blog : {id :blogId} , content};
        dispatch(addComment(data));
        setContent("");
    }


    return (
      <React.Fragment>
        <div className="media mb-10">
          <img
            className="mr-3 bg-light rounded"
            style={{maxWidth: 50}}
            src={defaultAvatar}
            alt="test"
          />

          <div className="comment-body">
            <textarea
              onChange={(event) => setContent(event.target.value)}
              value={content}
              className="form-control"
              placeholder="Your Comment"
              name="message"
              rows="5"
            />
            <hr />

            <div className="comment-button">
              <button onClick={onFormSubmit} className="btn btn-primary float-right">
                Comment &#10148;
             </button>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
}

export default CommentBox;