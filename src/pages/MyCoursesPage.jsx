import {React, useEffect} from 'react'
import Navbar from '../components/navbar/Navbar'
import { useHistory } from "react-router";
import {useSelector} from "react-redux";
import ListCourse from '../components/course/list-course/ListCourse'
import Footer from '../components/footer/Footer'
import PageTitle from '../components/page-title/PageTitle';

const MyCoursesPage = (props) => {
    const history = useHistory();
    const isLoggedIn = useSelector((state)=>state.user.isLoggedIn);

    useEffect(() => {
        const checkAccess = async () => {
            const isLogin = localStorage.getItem("isLoggedIn");
            if(!(isLoggedIn || isLogin)){
                history.push("/login")
            }
        };
      
        checkAccess();

        return () => {
           
        }
    }, [])

    return (
        <div>
            <Navbar {...props}/>
            <PageTitle title='My Courses'/>
            <ListCourse
                isBought={true}
            />
            <Footer/>
        </div>
    )
}

export default MyCoursesPage
