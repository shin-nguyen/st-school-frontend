import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import {useDispatch} from "react-redux";
import { useHistory } from 'react-router'
import { addBlog } from '../../../services/blog-service'
import "./blogForm.css";
import { Editor } from "@tinymce/tinymce-react";
import { TINY_API_KEY } from "../../../constants/SystemConstants";
import {
  Button
} from 'reactstrap';

const BlogForm1 = () => {
    const editorRef = useRef(null);
    const history = useHistory()
    const dispatch = useDispatch();

    const [title, setTitle] = useState("");
    const [file, setFile] = useState(null);

  const onFormSubmit = (event) => {
    event.preventDefault();

    const blogContent = String(editorRef.current.getContent());

    let params = new FormData();
    params.append("title", title);
    params.append("content",blogContent);
    params.append("file", file);
    dispatch(addBlog(params,history));
  }

  return (
    <>
    <div className="page-body">
      {file && (
        <img className="writeImg" src={URL.createObjectURL(file)} alt="" />
      )}

      <form className="writeForm">
        <div className="writeFormGroup">
            <input
                type="text"
                placeholder="Title"
                className="writeInput"
                autoFocus={true}
                onChange={e=>setTitle(e.target.value)}
            />
            <div className="blog-form-action">
              <label htmlFor="fileInput" className="add-file-blog can-click">
                <i class='bx bx-lg bx-image-add'></i>
              </label>
              <input
                  type="file"
                  id="fileInput"
                  style={{ display: "none" }}
                  onChange={(e) => setFile(e.target.files[0])}
              />
            </div>
        </div>
        <div className="writeFormGroup">
 
        <div className='editor'>
            <Editor
                apiKey={TINY_API_KEY}
                language='vi'
                onInit={(evt, editor) => (editorRef.current = editor)}
                init={{
                    height: 700,
                    menubar: "file edit view insert format tools table tc help",
                    plugins: [
                    "advlist autolink lists link image charmap print preview anchor",
                    "searchreplace visualblocks code fullscreen",
                    "insertdatetime media table paste code help wordcount",
                    ],
                    toolbar:
                    "preview | fullscreen | undo redo | formatselect |" +
                    "bold italic backcolor | alignleft aligncenter " +
                    "alignright alignjustify | bullist numlist outdent indent | " +
                    "removeformat | help",
                    content_style:
                    "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
                }}
            />
          </div>
        </div>

        <div className="editor-button mb-20">
          <Button color='info' className="pull-left mr-20" onClick={onFormSubmit}>Save</Button>
          <Button color='danger' className="pull-right" tag={Link} to={"/blogs"}>Cancel</Button>
        </div>
      </form>
    </div>
    </>
  )
}

export default BlogForm1
