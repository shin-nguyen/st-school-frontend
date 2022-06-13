import "./cardBlog.css";
import { Link } from "react-router-dom";
import moment from 'moment';

export default function Blog({ blog }) {
  return (
    <div>
      {blog.image && <img className="blogImg" src={blog.image} alt="Img" />}
      <div className="blogInfo">
        <div className="blogCats">
          {/* <span className="blogCat">{blog.summary}</span> */}
          <span className="blogCat">{blog.view} View </span>
        </div>
        <Link to={`/blog/${blog.id}`} className="link">
          <span className="blogTitle">{blog.title}</span>
        </Link>
        <span className="blogDate">
          {blog.createdTime}
        </span>
      </div>
    </div>
  );
}
