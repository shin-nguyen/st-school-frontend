import axios from "axios";

const API_URL = "http://localhost:8080/user/";

const getCustomers = () => {
    return axios
      .get(API_URL + "customers")
      .catch((error) => {
        return error.response; 
      });
};

const addUser = (params) => {
  return axios
    .post(API_URL + "add", params)
    .catch((error) => {
      return error.response; 
    });
}

const editUser = (params) => {
  return axios
    .put(API_URL + "update", params)
    .catch((error) => {
      return error.response; 
    });
}


const UserServices = {
    getCustomers,
    addUser,
    editUser,
}

export default UserServices;