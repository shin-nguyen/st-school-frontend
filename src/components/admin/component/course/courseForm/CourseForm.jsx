import React, { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import {
  getCourseById,
  resetCourse,
  addCourse,
  updateCourse,
} from "../../../../../services/course-services";
import listLanguage from "../../../../../assets/JsonData/language.json";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { TextField } from "../../formik/TextField";
import { SelectField } from "../../formik/SelectField";

const FormTest = () => {
  let { id } = useParams();
  if (id == null) id = -1;

  const [title, setTitle] = useState("Add Course");

  const history = useHistory();
  const dispatch = useDispatch();
  const course = useSelector((state) => state.course.course);

  const initialValues = {
    name: "",
    description: "",
    totalLength: "",
    language: "",
    price: "",
    file: ""
  }

  useEffect(() => {
    const loadCourseEdited = async () => {
      await dispatch(resetCourse());
      if (id !== -1) {
        await dispatch(getCourseById(id));
        setTitle("Edit Course");
      }
    };

    loadCourseEdited();

    return () => {
      return [];
    };
  }, [dispatch, id]);

  // useEffect(()=>{
  //   if(id !== -1){
  //       console.log("Get course edited: ")
  //       console.log(course);
  //   }
  // },[course, id]);

  const handelBack = () => {
    history.push("/admin/courses");
  };

  const handleSubmit = (values) => {
    let params = new FormData();
    console.log(values);
    params.append("name", values.name);
    params.append("description", values.description);
    params.append("totalLength", values.totalLength);
    params.append("language", values.language);
    params.append("price", values.price);
    params.append("file", values.file);

    if(id === -1){
      dispatch(addCourse(params));
      console.log("add");
    }
    else {
      params.append("id", id)
      dispatch(updateCourse(params));
      console.log("update");
    }

    handelBack();
  };

  const validate = Yup.object({
    name: Yup.string()
      // .max(15, "Must be 15 characters or less")
      .required("Required"),
    description: Yup.string()
      .min(6, "Must be at least 6 charaters")
      // .max(20, "Must be 20 characters or less")
      .required("Required"),
    totalLength: Yup.string()
      .required("Required"),
    language: Yup.string()
      .oneOf(
        ["English", "Vietnamese", "Japanese", "Chinese"],
        "Invalid Language"
      )
      .required("Required"),
    price: Yup.string()
      .required("Required"),
    file: Yup.string()
      .required("Required"),
  });

  return (
    <Formik
      initialValues={course||initialValues}
      validationSchema={validate}
      onSubmit={(values) => handleSubmit(values)}
      enableReinitialize
    >
      {(formik) => (
        <div>
          <h2 className="my-4 font-weight-bold .display-4">{title}</h2>
          <Form>
            <TextField label="Name" name="name" type="text" />
            <TextField label="Desctiption" name="description" type="text" />
            <TextField label="Total Length" name="totalLength" type="text" />
            <SelectField label="Language" name="language">
              {
                listLanguage.map((item) => (
                  <option key={item.id} value={item.name}>{item.name}</option>
                ))
              }
            </SelectField>
            <TextField label="Price" name="price" type="number" />
            <div className="form-group">
              <label>Image:</label>
              <input 
                name="file" 
                type="file" 
                onChange={(event) => 
                  formik.setFieldValue("file", event.target.files[0]
                )}
            />
            </div>
            <button className="btn btn-success mt-3" type="submit">
              Save
            </button>
            {/* <button className="btn btn-danger mt-3 ml-3" onClick={()=> {history.push("/admin")}}>
              Reset
            </button> */}
            <button className="btn btn-dark mt-3 ml-3" type="button"  onClick={handelBack}>
              Close
            </button>
          </Form>
        </div>
      )}
    </Formik>
  );
};

export default FormTest;
