import React, { useState, useEffect, useRef } from "react";
import { useHistory, useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import {
  getCourseById,
  resetCourse,
  addCourse,
  updateCourse,
} from "../../../../../services/course-services";
import listLanguage from "../../../../../assets/JsonData/language.json";
import listTopic from "../../../../../assets/JsonData/topic.json";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { TextField } from "../../../../formik/TextField";
import { SelectField } from "../../../../formik/SelectField";
import { TextArea } from "../../../../formik/TextArea";
import { Editor } from "@tinymce/tinymce-react";
import "./courseForm.css";

const FormTest = () => {
  let { id } = useParams();
  if (id == null) id = -1;

  const [title, setTitle] = useState("Add Course");
  const history = useHistory();
  const dispatch = useDispatch();
  const course = useSelector((state) => state.course.course);
  const descriptionRef = useRef("");
  const requirementsRef = useRef("");
  const isForRef = useRef("");

  const initialValues = {
    name: "",
    description: "",
    totalLength: "",
    language: "",
    price: "",
    file: "",
  };

  useEffect(() => {
    const loadCourseEdited = async () => {
      dispatch(resetCourse());
      if (id !== -1) {
        dispatch(getCourseById(id));
        setTitle("Edit Course");
      }
    };

    loadCourseEdited();
  }, [dispatch, id]);

  const handelBack = () => {
    history.push("/admin/courses");
  };

  const handleSubmit = (values) => {
    debugger
    let params = new FormData();

    const description = String(descriptionRef.current.getContent());
    const requirements = String(requirementsRef.current.getContent());
    const isFor = String(isForRef.current.getContent());

    let newCourse = {
      name: values.name,
      about: values.about,
      lecturer: values.lecturer,
      language: values.language,
      topic: values.topic,
      price: values.price,
      description: description,
      requirements: requirements,
      isFor: isFor,
    };

    params.append("file", values.file);

    if (id === -1) {
      console.log("ađdCourse");
      params.append("course", JSON.stringify(newCourse));
      dispatch(addCourse(params));
    } else {
      console.log("newCourse");
      newCourse = { ...newCourse, id: id };
      params.append("course", JSON.stringify(newCourse));
      dispatch(updateCourse(params));
    }

    handelBack();
  };

  const validate = Yup.object({
    name: Yup.string()
      // .max(15, "Must be 15 characters or less")
      .required("Required"),
    about: Yup.string()
      .min(6, "Must be at least 6 charaters")
      // .max(20, "Must be 20 characters or less")
      .required("Required"),
    lecturer: Yup.string().required("Required"),
    language: Yup.string()
      // .oneOf(
      //   ["English", "Vietnamese", "Japanese", "Chinese"],
      //   "Invalid Language"
      // )
      .required("Required"),
    topic: Yup.string()
      // .oneOf(
      //   ["English", "Vietnamese", "Japanese", "Chinese"],
      //   "Invalid Language"
      // )
      .required("Required"),
    price: Yup.number().required("Required").min(0, "Min is 0"),
  });

  return (
    <div className="form-course-wrapper">
      <Formik
        initialValues={title == "Edit Course" ? course : initialValues}
        validationSchema={validate}
        onSubmit={(values) => handleSubmit(values)}
        enableReinitialize
      >
        {(formik) => (
          <div>
            <h2 className="my-4 font-weight-bold .display-4">{title}</h2>
            <Form>
              <TextField label="Name" name="name" type="text" />
              <TextArea label="About" name="about" type="text" />
              <TextField label="Lecturer" name="lecturer" type="text" />
              <div className="course-info-group">
                <SelectField label="Topic" name="topic">
                  {listTopic.map((item) => (
                    <option key={item.id} value={item.name}>
                      {item.name}
                    </option>
                  ))}
                </SelectField>
                <SelectField label="Language" name="language">
                  {listLanguage.map((item) => (
                    <option key={item.id} value={item.name}>
                      {item.name}
                    </option>
                  ))}
                </SelectField>
                <TextField label="Price" name="price" type="number" />
                <div className="form-group">
                  <label>Image:</label>
                  <input
                    name="file"
                    type="file"
                    onChange={(event) =>
                      formik.setFieldValue("file", event.target.files[0])
                    }
                  />
                </div>
              </div>

              <div className="form-group">
                <label>Requirements:</label>
                <Editor
                  apiKey="cmlltcvw2ydrtenwdgwdwqqrvsje6foe8t5xtyaq6lo2ufki"
                  language='vi'
                  onInit={(evt, editor) => (requirementsRef.current = editor)}
                  initialValue={course.requirements}
                  init={{
                    menubar: "file edit view insert format tools table tc help",
                    plugins: [
                      "advlist autolink lists link image charmap print preview anchor",
                      "searchreplace visualblocks code fullscreen",
                      "insertdatetime media table paste code help wordcount",
                    ],
                    toolbar:
                      "undo redo | formatselect | " +
                      "bold italic backcolor | alignleft aligncenter " +
                      "alignright alignjustify | bullist numlist outdent indent | " +
                      "removeformat | help",
                    height: 300,
                    content_style:
                      "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
                  }}
                />
              </div>
              <div className="form-group">
                <label>Who this course is for:</label>
                <Editor
                  apiKey="cmlltcvw2ydrtenwdgwdwqqrvsje6foe8t5xtyaq6lo2ufki"
                  language='vi'
                  onInit={(evt, editor) => (isForRef.current = editor)}
                  initialValue={course.isFor}
                  init={{
                    menubar: "file edit view insert format tools table tc help",
                    plugins: [
                      "advlist autolink lists link image charmap print preview anchor",
                      "searchreplace visualblocks code fullscreen",
                      "insertdatetime media table paste code help wordcount",
                    ],
                    toolbar:
                      "undo redo | formatselect | " +
                      "bold italic backcolor | alignleft aligncenter " +
                      "alignright alignjustify | bullist numlist outdent indent | " +
                      "removeformat | help",
                    height: 200,
                    content_style:
                      "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
                  }}
                />
              </div>
              <div className="form-group">
                <label>Description:</label>
                <Editor
                  apiKey="cmlltcvw2ydrtenwdgwdwqqrvsje6foe8t5xtyaq6lo2ufki"
                  language='vi'
                  onInit={(evt, editor) => (descriptionRef.current = editor)}
                  initialValue={course.description}
                  init={{
                    menubar: "file edit view insert format tools table tc help",
                    plugins: [
                      "advlist autolink lists link image charmap print preview anchor",
                      "searchreplace visualblocks code fullscreen",
                      "insertdatetime media table paste code help wordcount",
                    ],
                    toolbar:
                      "undo redo | formatselect | " +
                      "bold italic backcolor | alignleft aligncenter " +
                      "alignright alignjustify | bullist numlist outdent indent | " +
                      "removeformat | help",
                    height: 500,
                    content_style:
                      "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
                  }}
                />
              </div>
              <button className="btn btn-success mt-3" type="submit">
                Save
              </button>
              <button
                className="btn btn-dark mt-3 ml-3"
                type="button"
                onClick={handelBack}
              >
                Close
              </button>
            </Form>
          </div>
        )}
      </Formik>
    </div>
  );
};

export default FormTest;
