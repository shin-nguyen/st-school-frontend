import { useState } from "react";
import { Link } from "react-router-dom";
import {useDispatch} from "react-redux";
import { useHistory } from 'react-router'
import { addBlog } from '../../../services/blog-service'
import "./blogForm.css";
import { Editor } from 'react-draft-wysiwyg';
import { EditorState, convertToRaw } from 'draft-js';
import draftToHtml from 'draftjs-to-html';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import {
  Button
} from 'reactstrap';

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
          <label htmlFor="fileInput" className="add-file-blog">
              <i class='bx bx-lg bx-image-add'></i>
          </label>
          <input
            type="file"
            id="fileInput"
            style={{ display: "none" }}
            onChange={(e) => setFile(e.target.files[0])}
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

        <div className="editor-button mb-20">
          <Button color='info' className="pull-left mr-20" onClick={onFormSubmit}>Save</Button>
          <Button color='danger' className="pull-right" tag={Link} to={"/blogs"}>Cancel</Button>
        </div>
      </form>
    </div>
    </>

  );
}
