import { useEffect, Fragment } from "react";
import Navbar from "../../navbar/Navbar"
import Blogs from "../blogs/Blogs";
// import Sidebar from "../../components/sidebar/Sidebar";
import "./homeBlog.css";
import { Link } from 'react-router-dom'
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import {
  Button
} from 'reactstrap';

import {useDispatch, useSelector} from "react-redux";
import {fetchBlogsByQuery} from "../../../services/blog-service";

export default function HomeBlog(props) {
  const dispatch = useDispatch();
  const blogs= useSelector((state) => state.blog.blogs);

  useEffect(() => {
      dispatch(fetchBlogsByQuery());
  }, []);

  return (
    <Fragment>
      <Navbar {...props}/>
      <Button className={'write-btn'} color='info' tag={Link} to={"/blog/add"}>NEW BLOG</Button>
      <div className="home">
        <Blogs blogs={blogs} />
      </div>
    </Fragment>
  );
}
