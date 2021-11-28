import {useEffect} from 'react';
import {Route} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import BlogListComponent from "./BlogListComponent";
// import ScrollButton from "../../components/scrollButton/ScrollButton";
import {fetchBlogs,fetchBlogsByQuery} from "../../../../services/blog-service";

const BlogList = () => {
    const dispatch = useDispatch();
    const blogs= useSelector((state) => state.blog.blogs);

    useEffect(() => {
        dispatch(fetchBlogsByQuery(""));
    }, []);

    const itemsPerPage = 4;
    const searchByData = [
        {label: 'Title', value: 'title'},
        {label: 'Summary', value : 'summary'}
    ];

    const tableHead = [
        '',
        'Title',
        'Description',
        'Status',
        '',
    ]
    
    return (
        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
            <div className="card-table">
                <div className="card-table-header">
                     <h3 className="title">Blog List</h3>
                 </div>
            </div>
            <div className="card-body">
                <Route exact component={() =>
                    <BlogListComponent
                        data={blogs}
                        itemsPerPage={itemsPerPage}
                        searchByData={searchByData}
                        tableHead = {tableHead}
                        />}
                    />
            </div>
        </div>
    );
};

export default BlogList;