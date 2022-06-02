import {React, useEffect, useState} from 'react'
import Navbar from '../components/navbar/Navbar'
import { useHistory } from "react-router";
import ListCourse from '../components/course/list-course/ListCourse'
import Footer from '../components/footer/Footer'
import PageTitle from '../components/page-title/PageTitle';
import { getOrderByUser } from '../services/order-services';
import { useSelector, useDispatch } from 'react-redux';
import SearchBar from '../components/share/search-bar/SearchBar';

const MyCoursesPage = (props) => {
    const history = useHistory();
    const dispatch = useDispatch()
    const isLoggedIn = useSelector((state)=>state.user.isLoggedIn);
    const listOrder = useSelector(state => state.order.listOrder)

    const { search } = window.location;
    const query = new URLSearchParams(search).get('s');
    const [searchQuery, setSearchQuery] = useState(query || '');
    const filteredOrders = filterCourses(listOrder, searchQuery);

    useEffect(() => {
        const checkAccess = async () => {
            const isLogin = localStorage.getItem("isLoggedIn");
            if(!(isLoggedIn || isLogin)){
                history.push("/login")
            }
        };
        
        checkAccess();
        dispatch(getOrderByUser());

        return () => {
           
        }
    }, [])

    return (
        <div>
            <Navbar {...props}/>
            <PageTitle title='My Courses'/>
            <div style={{"position":"absolute","right":"13.5%","marginTop":"-60px","width":"20%"}}>
                    <SearchBar
                        searchQuery={searchQuery}
                        setSearchQuery={setSearchQuery}
                    />
            </div>
            <ListCourse
                isBought={true}
                listOrder={filteredOrders}
            />
            <Footer/>
        </div>
    )
}

const filterCourses = (orders, query) => {
    if (!query) {
        return orders;
    }

    return orders.filter((order) => {
        const courseName = order?.course?.name.toLowerCase();
        const topic = order?.course?.topic.toLowerCase();
        return courseName.includes(query) || topic.includes(query);
    });
};

export default MyCoursesPage
