import { useEffect, Fragment } from "react";
import ListBlog from "../list-blogs/ListBlog";
import "./blogWrapper.css";
import {useDispatch, useSelector} from "react-redux";
import {fetchBlogsByQuery,fetchBlogsByMe} from "../../../services/blog-service";

export default function BlogWrapper({isStatus}) {
  const dispatch = useDispatch();
  const blogs= useSelector((state) => state.blog.blogs);
  const email = localStorage.getItem("email");
  useEffect(() => {
      if (isStatus==="me"){
        dispatch(fetchBlogsByMe(email));
      }else{
        dispatch(fetchBlogsByQuery(isStatus));
      }
  }, []);

  return (
      <div className="page-body body-content">
        <ListBlog blogs={blogs} />
      </div>
  );
}
