import {useEffect,useState } from "react";
// import { useLocation } from "react-router";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./singleBlog.css";
import {useDispatch, useSelector} from "react-redux";
import { useParams } from 'react-router'
import {fetchBlog,deleteBlog} from '../../../thunks/blog-thunks'
import {faEdit,faTrash} from "@fortawesome/free-solid-svg-icons";
import Modal from "../../../components/modal/Modal";

export default function SingleBlog(){
    const dispatch = useDispatch();
    const blog = useSelector((state) => state.blog.blog);
    const user = useSelector((state) => state.blog.user);
    const userEmail =   localStorage.getItem("email");
    const [modalActive, setModalActive] = useState(false);
    const [updateMode, setUpdateMode] = useState(false);
    const [title, setTitle] = useState(blog.title);
    const [desc, setDesc] = useState("");

    let { id } = useParams();
    useEffect(() => {
      if (id) {
          dispatch(fetchBlog(id));
      }
    }, []);

    const deleteBlogHandler = (id) => {
        dispatch(deleteBlog(id));
    };

    const showDeleteModalWindow = (blog) => {
        setModalActive(true);
    };

    


//   const handleUpdate = async () => {
//     try {
//       await axios.put(`/Blogs/${Blog._id}`, {
//         username: user.username,
//         title,
//         desc,
//       });
//       setUpdateMode(false)
//     } catch (err) {}
//   };

  return (

    <div className="singleBlog">
      <div className="singleBlogWrapper">
        {modalActive ?
                <Modal blog={blog}
                       deleteBlogHandler={deleteBlogHandler}
                       setModalActive={setModalActive}/> : null}

        {blog.image && (
          <img src={blog.image} alt="" className="singleBlogImg" />
        )}
        {updateMode ? (
          <input
            type="text"
            value={title}
            className="singleBlogTitleInput"
            autoFocus
            onChange={(e) => setTitle(e.target.value)}
          />
        ) : (
          <h1 className="singleBlogTitle">
            {blog.title}
            {
                console.log(userEmail)
            }
            {user.email === userEmail && (
              <div className="singleBlogEdit">
                <FontAwesomeIcon className="mr-3" icon={faEdit}/>
                <FontAwesomeIcon className="mr-3" icon={faTrash} onClick={deleteBlogHandler}/>
              </div>
            )}
          </h1>
        )} 
        <div className="singleBlogInfo">
          <span className="singleBlogAuthor">
            Author:
            <Link 
            to={`/?user=${user.email}`} 
            className="link">
              <b> {user.email}</b>
            </Link>
          </span>
          <span className="singleBlogDate">
            {new Date(blog.createdTime).toDateString()}
          </span>
        </div>
        {updateMode ? (
          <textarea
            className="singleBlogDescInput"
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
          />
        ) : (
          <p className="singleBlogDesc">{blog.content}</p>
        )} 
         {updateMode && (
          <button className="singleBlogButton" 
          // onClick={handleUpdate}
          >
            Update
          </button>
        )} 
      </div>
    </div>
  );
}
