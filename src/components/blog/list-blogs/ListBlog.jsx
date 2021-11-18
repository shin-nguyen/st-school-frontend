import CardBlog from "../card-blog/CardBlog";
import "./listBlog.css";

export default function Blogs({ blogs }) {
  return (
    <div className="blogs">
      {blogs.map((b) => (
        <CardBlog blog={b} />
      ))}
    </div>
  );
}
