import {React, useEffect} from 'react'
import Navbar from '../components/navbar/Navbar'
import { useHistory } from "react-router";
import {useSelector} from "react-redux";
import LearningSpace from '../components/learning-space/LearningSpace'
import Footer from '../components/footer/Footer'

const LearningPage = (props) => {
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
            <LearningSpace/>
            <Footer/>
        </div>
    )
}

export default LearningPage
