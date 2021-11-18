import Blog from "../blog/Blog";
import "./blogs.css";

export default function Blogs({ blogs }) {
  return (
    
    <div className="blogs">
      {blogs.map((b) => (
        <Blog blog={b} />
      ))}
    </div>
  );
}
