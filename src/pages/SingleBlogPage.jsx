import SingleBlog from "../components/blogHome/singleBlog/SingleBlog";
import Navbar from '../components/navbar/Navbar'

export default function Single(props) {
  return (
    <>
       <Navbar {...props}/>
      <div style={{display: "flex"}}>
        <SingleBlog/>
      </div>
    </>
  );
}
