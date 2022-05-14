import { toast } from 'react-toastify';

export const checkAccess = async () => {
    const role = localStorage.getItem("userRole");
    const isLogin = localStorage.getItem("isLoggedIn");
    if (isLogin && role === "ADMIN") {
        return true;
    }
    return false;
};


export const checkLogin = async () => {
    const isLogin = localStorage.getItem("isLoggedIn");
    if (isLogin) {
        return true;
    }
    return false;
};


export const findIndex = (list, id) => {
    let result = -1;
    list.forEach((item, index) => {
        if (item.id === id) {
            result = index;
        }
    });
    return result;
}

export const toastSuccess = (message) => {
    toast.success(message, { position: toast.POSITION.BOTTOM_RIGHT, theme: "dark" });
}

export const toastError = (message) => {
    toast.error(message, { position: toast.POSITION.BOTTOM_RIGHT, theme: "dark" });
}

export const generateTimeToString = (timeNumber) => {
    const minute = Math.floor(timeNumber / 60)
    const second = Math.floor((timeNumber % 60))
    return (minute + ":" + second).toString()
}

export const generateTimeToNumber = (timeString) => { // your input string
    const time = timeString.split(':'); // split it at the colons
    // minutes are worth 60 seconds. Hours are worth 60 minutes.
    if (time.size === 3)
        return (+time[0]) * 60 * 60 + (+time[1]) * 60 + (+time[2]); 

    return ((+time[0]) * 60 + (+time[1]));
}


