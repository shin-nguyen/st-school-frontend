import Banner from './component/banner/Banner'
import MessengerCustomerChat from 'react-messenger-customer-chat';
import {React, useEffect, useState} from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { getTopHot, getTopNew } from '../../services/course-services';
import { getTopNewBlog, getTopView } from "../../services/blog-service";
import ListCourse from '../../components/course/list-course/ListCourse'
import ListBlog from "../blog/list-blogs/ListBlog";
import "./home.css"

const Home = () => {
    const dispatch = useDispatch()
    const listTopHot = useSelector(state => state.course.topHot)
    const listTopNew = useSelector(state => state.course.topNew)
    const listTopNewBlog = useSelector((state) => state.blog.topNewBlog);
    const listTopView = useSelector((state) => state.blog.topView);
    const isLoggedIn = localStorage.getItem("isLoggedIn")

    console.log(listTopNew)

    useEffect(() => {
        dispatch(getTopNew(isLoggedIn));
        dispatch(getTopHot(isLoggedIn));
        dispatch(getTopNewBlog());
        dispatch(getTopView());
    }, [dispatch])

    return (
        <div className="body-content">
            <Banner/>
            <br />
            <div className='page-body'>
                <div>
                    <p className='p-title'>Hot Courses</p>
                    <div>
                        <ListCourse 
                            listCourse={listTopHot}
                        />
                    </div>
                </div>
                <br />
                <div>
                    <p className='p-title'>Newest Courses</p>
                    <div>
                        <ListCourse 
                            listCourse={listTopNew}
                        />
                    </div>
                </div>
                <br />
                <div>
                    <p className='p-title'>New Blogs</p>
                    <div>
                        <ListBlog 
                            blogs={listTopNewBlog}
                        />
                    </div>
                </div>
                <br />
                <div>
                    <p className='p-title'>Top Blogs</p>
                    <div>
                        <ListBlog 
                            blogs={listTopView}
                        />
                    </div>
                </div>
            </div>
            <MessengerCustomerChat
                pageId="111158174768013"
                appId="1377288292701161"
                // language=""
                // htmlRef="<REF_STRING>"
            />,
        </div>
    )
}

export default Home
