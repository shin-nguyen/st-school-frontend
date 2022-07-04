import "./cardBlog.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faHeart } from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { updateLoveBlog } from "../../../services/blog-service";

export default function Blog({ blog }) {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.user.isLoggedIn);

  const handleLoveClick = () => {
    const isLogin = localStorage.getItem("isLoggedIn");
    if (!(isLoggedIn || isLogin)) {
      return;
    }
    dispatch(updateLoveBlog(blog.id));
  };

  return (
    <div className="blog">
      {blog.image && <img className="blogImg" src={blog.image} alt="Img" />}

      <Link to={`/blog/${blog.id}`} className="link">
        <span className="blogTitle">{blog.title}</span>
      </Link>
      <div className="blogInfo">
        <div className="blogDate">{blog.createdTime}</div>

        <div className="blogLoveView">
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
  );
}
