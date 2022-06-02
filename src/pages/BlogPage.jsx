import BlogWrapper from '../components/blog/blog-wrapper/BlogWrapper'
import Footer from '../components/footer/Footer'
import {React, useState, useEffect} from 'react'
import Navbar from '../components/navbar/Navbar'
import PageTitle from '../components/page-title/PageTitle'
import SearchBar from '../components/share/search-bar/SearchBar';
import { useDispatch, useSelector } from "react-redux";
import {
  fetchBlogsByQuery,
} from "../services/blog-service";
 
const BlogPage = (props) => {
    const dispatch = useDispatch();
    const blogs = useSelector((state) => state.blog.blogs);

    const { search } = window.location;
    const query = new URLSearchParams(search).get('s');
    const [searchQuery, setSearchQuery] = useState(query || '');
    const filteredBlogs = filterBlogs(blogs, searchQuery);

    useEffect(() => {
        dispatch(fetchBlogsByQuery(true));
    }, [dispatch]);

    return (
        <div>
            <Navbar {...props}/>
            <PageTitle title='Blogs'/>
            <div style={{"position":"absolute","right":"13.5%","marginTop":"-60px","width":"20%"}}>
                    <SearchBar
                        searchQuery={searchQuery}
                        setSearchQuery={setSearchQuery}
                    />
            </div>
            <BlogWrapper 
                blogs={filteredBlogs}
            />
            <Footer/>
        </div>
    )
}


const filterBlogs = (blogs, query) => {
    if (!query) {
        return blogs;
    }

    return blogs.filter((blog) => {
        return blog.title?.toLowerCase().includes(query);
    });
};

export default BlogPage
