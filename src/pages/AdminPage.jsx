import {React, useEffect, useState} from 'react'
import Admin from '../components/admin/Admin'
import { useHistory } from "react-router";
import {useSelector} from "react-redux";

const AdminPage = () => {
    const [access, setAccess] = useState(false)
    const history = useHistory();
    const isLoggedIn = useSelector((state)=>state.user.isLoggedIn);

    useEffect(() => {
        const checkAccess = async () => {
            const role = localStorage.getItem("userRole");
            const isLogin = localStorage.getItem("isLoggedIn");
            if(!(isLoggedIn || isLogin)){
                history.push("/login")   
            } else if(role !== "ADMIN"){
                alert("Bạn không có quyền truy cập tài nguyên này!");
                history.push("/")
            } else {
                setAccess(true);
            }     
        };
      
        checkAccess();

        return () => {
           
        }
    }, [])
    
    return (
        access ? <Admin/> : null
    )
}

export default AdminPage
