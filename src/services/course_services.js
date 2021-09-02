import axios from "axios";

const API_URL = "http://localhost:8080/course/";

const getCourses = () => {
    return axios
      .get(API_URL + "courses")
      .catch((error) => {
        return error.response; 
      });
};

const addCourse = (params) => {
  return axios
    .post(API_URL + "add", params)
    .catch((error) => {
      return error.response; 
    });
}

const editCourse = (params) => {
  return axios
    .put(API_URL + "update", params)
    .catch((error) => {
      return error.response; 
    });
}

const deleteCourse = (id) => {
  return axios
    .delete(API_URL + id)
    .catch((error) =>{
      return error.response;
    })
}

const CourseServices = {
    getCourses,
    addCourse,
    editCourse,
    deleteCourse
}

export default CourseServices;