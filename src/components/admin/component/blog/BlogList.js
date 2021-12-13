import {useEffect} from 'react';
import {Route} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import BlogListComponent from "./BlogListComponent";
// import ScrollButton from "../../components/scrollButton/ScrollButton";
import {fetchBlogs,fetchBlogsByQuery} from "../../../../services/blog-service";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileExcel, faFilePdf, faFileCsv } from "@fortawesome/free-solid-svg-icons";
import { API_BASE_URL } from '../../../../constants/SystemConstants'
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

                     <a className="btn btn-outline-primary text-primary"
                        href={API_BASE_URL + '/blogs/export/excel'}>
                        <FontAwesomeIcon icon={faFileExcel} />&nbsp;Export to xls</a>
                    <a className="btn btn-outline-primary text-primary"
                        href={API_BASE_URL + '/blogs/export/csv'}>
                        <FontAwesomeIcon icon={faFileCsv}
                        />&nbsp;Export to csv
                    </a>
                    <a className="btn btn-outline-primary text-primary"
                        href={API_BASE_URL + '/blogs/export/pdf'}>
                        <FontAwesomeIcon icon={faFilePdf}
                        />&nbsp;Export to pdf
                    </a>

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
                    {/* data, itemsPerPage,startFrom,searchByData,tableHead */}
            </div>
        </div>
    );
};

export default BlogList;
