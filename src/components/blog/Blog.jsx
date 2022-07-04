import { useEffect } from "react";
import "./blog.css";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { fetchBlog } from "../../services/blog-service";
import Comment from "../comment/Comment";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faHeart } from "@fortawesome/free-solid-svg-icons";
import { updateLoveBlog } from "../../services/blog-service";

const Blog = () => {
  const dispatch = useDispatch();
  const blog = useSelector((state) => state.blog.blog);
  const isLoggedIn = useSelector((state) => state.user.isLoggedIn);

  let { id } = useParams();

  useEffect(() => {
    if (id) {
      dispatch(fetchBlog(id));
    }
  }, [id]);

  const handleLoveClick = () => {
    const isLogin = localStorage.getItem("isLoggedIn");
    if (!(isLoggedIn || isLogin)) {
      return;
    }
    dispatch(updateLoveBlog(blog.id));
  };

  return (
    <div className="page-body">
      <div className="singleBlogWrapper">
        {blog.image && (
          <img src={blog.image} alt="ImageBlog" className="singleBlogImg" />
        )}

        <div className="singleBlogInfo">
          <span className="singleBlogAuthor">
            Author: <b> {blog.user?.email}</b>
          </span>
          <div className="blogInfo">
            <div className="blogLoveView">
              <div className="singleBlogDate">{blog.createdTime} | </div>

              <div className="blogLove">{blog.recordLove}</div>
              <FontAwesomeIcon
                className={"iconBlog"}
                style={blog && blog.love ? { color: "red" } : {}}
                icon={faHeart}
                onClick={handleLoveClick}
              />

              <div className="blogView">{blog.view}</div>
              <FontAwesomeIcon className="iconBlog" icon={faEye} />
            </div>
          </div>
        </div>
        <p className="blog-title">{blog.title}</p>
        <p className="singleBlogDesc">
          <div dangerouslySetInnerHTML={{ __html: blog.content }} />
        </p>
      </div>

      <hr />

      <Comment blog={blog} />
    </div>
  );
};

export default Blog;
