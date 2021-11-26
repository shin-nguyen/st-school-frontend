import { useEffect, Fragment } from "react";
import ListBlog from "../list-blogs/ListBlog";
import "./blogWrapper.css";
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import {useDispatch, useSelector} from "react-redux";
import {fetchBlogsByQuery} from "../../../services/blog-service";

export default function BlogWrapper(props) {
  const dispatch = useDispatch();
  const blogs= useSelector((state) => state.blog.blogs);

  useEffect(() => {
      dispatch(fetchBlogsByQuery());
  }, []);

  return (
      <div className="page-body body-content">
        <ListBlog blogs={blogs} />
      </div>
  );
}
