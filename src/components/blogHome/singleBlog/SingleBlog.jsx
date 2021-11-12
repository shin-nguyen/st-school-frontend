import {useEffect,useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./singleBlog.css";
import {useDispatch, useSelector} from "react-redux";
import { useParams } from 'react-router'
import {fetchBlog,updateBlog} from '../../../services/blog-service'
import {faEdit} from "@fortawesome/free-solid-svg-icons";
import renderHTML from 'react-render-html';
import { Editor } from 'react-draft-wysiwyg';
import htmlToDraft from 'html-to-draftjs';
import { EditorState, convertToRaw, ContentState } from 'draft-js';
import draftToHtml from 'draftjs-to-html';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import {
  Button
} from 'reactstrap';

const SingleBlog = () => {
    const dispatch = useDispatch();
    const blogData = useSelector(state => state.blog.blog);

    const [blog, setBlog] = useState(blogData);

    const {title, image, createdTime,user} = blog;
    const [content,setContent] = useState();

    const [editor,setEditor]  = useState(EditorState.createEmpty());

    // console.log(blog);

    const userEmail =   localStorage.getItem("email");
    const [updateMode, setUpdateMode] = useState(false);

    let { id } = useParams();
    useEffect(() => {
      if (id) {
          dispatch(fetchBlog(id));
         
      }
      setBlog(blogData);
      setContent(blogData.content)

      if (content){
        const contentBlock = htmlToDraft(blogData.content);
        const contentState = ContentState.createFromBlockArray(contentBlock.contentBlocks);
        setEditor(EditorState.createWithContent(contentState));
      }
    },[blogData.id])


    const onFormSubmit = (event) => {
        event.preventDefault();

        setContent(draftToHtml(convertToRaw(editor.getCurrentContent())));
        const blogEdit = {id,title, content};
        dispatch(updateBlog(blogEdit));
        console.log(blogEdit);

        setUpdateMode(false)

    };

    const handleInputChange = (event) => {
        const {name, value} = event.target;
        setBlog({...blog, [name]: value});
    };
  
  return (

    <div className="singleBlog">
      <div className="singleBlogWrapper">
        {/* {modalActive ?
                <Modal blog={blog}
                       deleteBlogHandler={deleteBlogHandler}
                       setModalActive={setModalActive}/> : null} */}

        {image && (
          <img src={image} alt="ImageBlog" className="singleBlogImg" />
        )}
        {updateMode ? (
          <input
            type="text"
            value={title}
            name="title"
            autoFocus
            className="singleBlogTitleInput"
            onChange={handleInputChange}
          />
        ) : (
          <h1 className="singleBlogTitle">
            {title}
            {user?.email === userEmail && 
            (
              <div className="singleBlogEdit" onClick={() => setUpdateMode(true)} >
                <FontAwesomeIcon className="mr-3" icon={faEdit}/>
              </div>
            )}
          </h1>
        )} 
        <div className="singleBlogInfo">
          <span className="singleBlogAuthor">
            Author:
            <Link 
            to={`/?user=${user?.email}`} 
            className="link">
              <b> {user?.email}</b>
            </Link>
          </span>
          <span className="singleBlogDate">
            {new Date(createdTime).toDateString()}
          </span>
        </div>
        {updateMode ? (
          <div className='text-editor'>
          <Editor
          editorState={editor}
          wrapperClassName="demo-wrapper"
          editorClassName="demo-editor"
          onEditorStateChange={ (editorState) => setEditor(editorState)}/>
          </div>
        ) : (
          <p className="singleBlogDesc">
            {renderHTML(content ===undefined?' ':content)}
          </p>
        )} 
        
      </div>
      {updateMode && (
           <div>
            <Button color='danger' className={'pull-left'} onClick={()=> setUpdateMode(false)}>Cancel</Button>
            <Button color='info' className={'pull-right'} onClick={onFormSubmit}>Update</Button>
          </div>
        )} 
    </div>
  );
}
export default SingleBlog;