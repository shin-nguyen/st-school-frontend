import { React } from "react";
import ListBlog from "../list-blogs/ListBlog";
import "./blogWrapper.css";

export default function BlogWrapper(props) {
  const blogs = props.blogs
  return (
    <div className="page-body body-content">
      <ListBlog blogs={blogs} />
    </div>
  );
}
