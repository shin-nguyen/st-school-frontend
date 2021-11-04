import {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {Link} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEdit, faList, faTrash} from "@fortawesome/free-solid-svg-icons";
// import {LazyLoadImage} from "react-lazy-load-image-component";

import usePagination from "../../components/pagination/usePagination";
import Modal from "../../components/modal/Modal";
import SearchForm from "../searchForm/SearchForm.js";
import PaginationItem from "../../components/pagination/PaginationItem";
// import StarRating from "../../../component/StarRating/StarRating";
import {deleteBlog} from "../../thunks/blog-thunks";
import Spinner from '../../components/spinner/Spinner';


const BlogListComponent = ({data, itemsPerPage,startFrom,searchByData,tableHead}) => {
    const dispatch = useDispatch();
    const loading= useSelector((state) => state.blog.isBlogLoading);
    const [modalActive, setModalActive] = useState(false);
    const [blogInfo, setBlogInfo] = useState();
    
    const {
        slicedData,
        pagination,
        prevPage,
        nextPage,
        changePage,
        setFilteredData,
        setSearching
    } = usePagination({itemsPerPage, data, startFrom});

    useEffect(() => {
        setModalActive(false);
    }, [data]);

    const deleteBlogHandler = (id) => {
        dispatch(deleteBlog(id));
    };

    const showDeleteModalWindow = (blog) => {
        setModalActive(true);
        setBlogInfo(blog);
    };

    const renderHead = (item, index) => <th key={index}>{item}</th>
    return (
        <>
            {modalActive ?
                <Modal blog={blogInfo}
                       deleteBlogHandler={deleteBlogHandler}
                       setModalActive={setModalActive}/> : null}
            <br/>
            <SearchForm
                data={data}
                searchByData={searchByData}
                setFilteredData={setFilteredData}
                setSearching={setSearching}/>

            {/* <div className="mt-3">
                <PaginationItem
                    pagination={pagination}
                    prevPage={prevPage}
                    changePage={changePage}
                    nextPage={nextPage}/>
            </div> */}
            {loading ? <Spinner/> :
            <>
                <table className="table table-hover">
                    <thead>
                        <tr>
                            {
                                tableHead.map((item, index) => renderHead(item, index))
                            }
                        </tr>
                    </thead>
                <tbody>
                        {slicedData.map((blog,index) => {
                            return (
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{blog.title}</td>
                                <td className="mw-445">{blog.summary}</td>
                                <td>{blog.status}</td>
                                <td>
                                    <Link to={`/admin/blogs/${blog.id}`}>
                                        <button className="btn-a btn btn-success mr-10">Edit</button>
                                    </Link>
                                    <button className="btn btn-danger mr-10" 
                                             onClick={() => showDeleteModalWindow(blog)}>Delete</button>
                                </td>
                            </tr>
                            );
                        })}
                </tbody>

                </table>
                <PaginationItem
                    pagination={pagination}
                    prevPage={prevPage}
                    changePage={changePage}
                    nextPage={nextPage}/>
            </>
            }
        </>
    );
};

export default BlogListComponent;
