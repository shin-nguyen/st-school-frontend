import "./blog.css";
import { Link } from "react-router-dom";

export default function Blog({ blog }) {
  return (
    <div className="blog">
      {blog.image && <img className="blogImg" src={blog.image} alt="Img" />}
      <div className="blogInfo">
        <div className="blogCats">
           <span className="blogCat">{blog.title}</span>
        </div>
        <Link to={`/blog/${blog.id}`} className="link">
          <span className="blogTitle">{blog.summary}</span>
        </Link>
        <hr />
        <span className="blogDate">
          {new Date(blog.createdTime).toDateString()}
        </span>
      </div>
      
      {/* <p className="blogDesc">{blog.content}</p> */}
    </div>
  );
}
