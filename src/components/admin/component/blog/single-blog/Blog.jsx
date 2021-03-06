import { useEffect } from "react";
import { Link } from "react-router-dom";
import "./singleBlog.css";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useHistory } from "react-router";
import {
  fetchBlog,
  updateBlogStatus,
} from "../../../../../services/blog-service";

const Blog = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const blog = useSelector((state) => state.blog.blog);

  let { id } = useParams();

  useEffect(() => {
    if (id) {
      dispatch(fetchBlog(id));
    }
  }, [id]);

  const onClickUpdate = () => {
    dispatch(updateBlogStatus(blog.id, history));
  };

  const handelBack = () => {
    history.push("/admin/blogs");
  };

  return (
    <div className="page-body">
      <div className="singleBlogWrapper">
        {blog.image && (
          <img src={blog.image} alt="ImageBlog" className="singleBlogImg" />
        )}

        <div className="singleBlogInfo">
          <span className="singleBlogAuthor">
            Author:
            <Link className="link">
              <b> {blog.user?.email}</b>
            </Link>
          </span>
          <span className="singleBlogDate">{blog.createdTime}</span>
        </div>
        <p className="blog-title">{blog.title}</p>
        <p className="singleBlogDesc">
          <div dangerouslySetInnerHTML={{ __html: blog.content }} />
        </p>
      </div>

      <hr />
      <div className=" float-right">
        <button className="btn btn-dark" onClick={onClickUpdate}>
          {blog.status == true ? "Lock" : "UnLock"}
        </button>
        <button className="btn btn-gray" onClick={handelBack}>
          &nbsp;Back
        </button>
      </div>
    </div>
  );
};

export default Blog;
