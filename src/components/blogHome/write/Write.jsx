import { useState } from "react";
import { Link } from "react-router-dom";
import {useDispatch} from "react-redux";
import { useHistory } from 'react-router'
import { addBlog } from '../../../services/blog-service'
import "./write.css";
import Navbar from '../../../components/navbar/Navbar'
import { Editor } from 'react-draft-wysiwyg';
import htmlToDraft from 'html-to-draftjs';
import { EditorState, convertToRaw, ContentState } from 'draft-js';
import draftToHtml from 'draftjs-to-html';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import {
  Button
} from 'reactstrap';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPlus} from "@fortawesome/free-solid-svg-icons";

export default function Write(props) {

  const history = useHistory()
  const dispatch = useDispatch();

  const [title, setTitle] = useState("");
  const [file, setFile] = useState(null);
  const [editor,setEditor]  = useState(EditorState.createEmpty());


  const onFormSubmit = (event) => {
    event.preventDefault();

    let params = new FormData();
    params.append("title", title);
    params.append("content", draftToHtml(convertToRaw(editor.getCurrentContent())));
    console.log(draftToHtml(convertToRaw(editor.getCurrentContent())));
    params.append("file", file);
    dispatch(addBlog(params,history));
  
  }

  return (
    <>
      <Navbar {...props}/>
    <div className="write">
      {file && (
        <img className="writeImg" src={URL.createObjectURL(file)} alt="" />
      )}

      <form className="writeForm">
        <div className="writeFormGroup">
          <label htmlFor="fileInput">
            <FontAwesomeIcon className="mr-2" icon={faPlus}/>
          </label>
          <input
            type="file"
            id="fileInput"
            style={{ display: "none" }}
            onChange={(e) => setFile(e.target.files[0])}
          />
          <input
            type="text"
            placeholder="Title"
            className="writeInput"
            autoFocus={true}
            onChange={e=>setTitle(e.target.value)}
          />
        </div>
        <div className="writeFormGroup">

          
        <div className='text-editor'>
          <Editor
          editorState={editor}
          wrapperClassName="demo-wrapper"
          editorClassName="demo-editor"
          onEditorStateChange={ (editorState) => setEditor(editorState)}/>
          </div>
        </div>


        <div className="editor-button">
          <Button color='info' className="pull-left" onClick={onFormSubmit}>Save</Button>
          <Button color='danger' className="pull-right" tag={Link} to={"/blogs"}>Cancel</Button>
        </div>
      </form>
    </div>
    </>

  );
}
