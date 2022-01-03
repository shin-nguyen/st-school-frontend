import { toast } from 'react-toastify';

export const checkAccess = async () => {
    const role = localStorage.getItem("userRole");
    const isLogin = localStorage.getItem("isLoggedIn");
    if(isLogin && role === "ADMIN"){
        return true;
    }
    return false;
};


export const checkLogin = async () => {
    const isLogin = localStorage.getItem("isLoggedIn");
    if(isLogin){
        return true;
    }
    return false;
};


export const findIndex = (list, id) => {
    let result = -1;
    list.forEach ((item, index) => {
        if(item.id === id){
            result = index;
        }
    });
    return result;
}

export const toastSuccess = (message) => {
    toast.success(message, {position: toast.POSITION.BOTTOM_RIGHT, theme: "dark"});
}

export const toastError = (message) => {
    toast.error(message, {position: toast.POSITION.BOTTOM_RIGHT, theme: "dark"});
}


