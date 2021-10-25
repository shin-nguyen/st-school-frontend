import {useEffect} from 'react';
import {Route} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import BlogListComponent from "./BlogListComponent";
// import ScrollButton from "../../components/scrollButton/ScrollButton";
import {fetchBlogs} from "../../thunks/blog-thunks";
import Table from '../admin/component/table/Table'

const BlogList = () => {
    const dispatch = useDispatch();
    const blogs= useSelector((state) => state.blog.blogs);

    useEffect(() => {
        dispatch(fetchBlogs());
    }, []);

    const itemsPerPage = 4;
    const searchByData = [
        {label: 'Title', value: 'title'},
        {label: 'Description', value : 'description'},
        {label: 'Status', value: 'status'}
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
                <div className="card-header">
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