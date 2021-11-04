import { useEffect } from "react";
import Brand from "../../brand/Brand";
import Navbar from "../../navbar/Navbar"
import Blogs from "../blogs/Blogs";
// import Sidebar from "../../components/sidebar/Sidebar";
import "./homeBlog.css";

import {useDispatch, useSelector} from "react-redux";
import {fetchBlogsByQuery} from "../../../thunks/blog-thunks";

export default function HomeBlog() {
  const dispatch = useDispatch();
  const blogs= useSelector((state) => state.blog.blogs);

  useEffect(() => {
      dispatch(fetchBlogsByQuery());
  }, []);

  return (
    <>
      <Brand />
      <Navbar/>
      <div className="home">
        <Blogs blogs={blogs} />
      </div>
      
    </>
  );
}
