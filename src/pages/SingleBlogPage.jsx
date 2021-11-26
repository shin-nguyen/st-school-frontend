import Blog from "../components/blog/single-blog/Blog";
import Navbar from '../components/navbar/Navbar'

export default function Single(props) {
  return (
    <>
      <Navbar {...props}/>
      <div style={{display: "flex"}}>
        <Blog/>
      </div>
    </>
  );
}
