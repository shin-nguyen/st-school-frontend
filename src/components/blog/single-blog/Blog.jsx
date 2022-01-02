import {useEffect} from "react";
import { Link } from "react-router-dom";
import "./singleBlog.css";
import {useDispatch, useSelector} from "react-redux";
import { useParams } from 'react-router'
import {fetchBlog} from '../../../services/blog-service'
import Comment from "../../comment/comment-blog/CommentBlog";

const Blog = () => {
    const dispatch = useDispatch();
    const blog = useSelector(state => state.blog.blog);
    console.log(blog)

    let { id } = useParams();

    useEffect(() => {
      if (id) {
          dispatch(fetchBlog(id));
      }
    },[id])

  return (

    <div className="page-body">
      <div className="singleBlogWrapper">
        {blog.image && (
          <img src={blog.image} alt="ImageBlog" className="singleBlogImg" />
        )}
       
        <div className="singleBlogInfo">
          <span className="singleBlogAuthor">
            Author:
            <Link 
                // to={`/?user=${user?.email}`} 
                className="link">
              <b> {blog.user?.email}</b>
            </Link>
          </span>
          <span className="singleBlogDate">
            {blog.createdTime}
          </span>
        </div>
        <p className="blog-title">
            {blog.title}
        </p>
        <p className="singleBlogDesc">
            {/* {renderHTML(blog.content ===undefined ?' ': blog.content)} */}
            <div dangerouslySetInnerHTML={{ __html: blog.content }} />
         </p>
        
      </div>

      <hr/>

      {/* <ListComment
        isAuthenticated={localStorage.getItem("isLoggedIn") }
        loading={false}
        blogId={id}>
      </ListComment> */}
      <Comment blog= {blog}/>
    </div>
  );
}

export default Blog
