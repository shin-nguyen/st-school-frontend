import React from 'react'
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { TextField } from "../../formik/TextField";


const VideoForm = (props) => {

    const validate = Yup.object({
        name: Yup.string()
            .max(30, "Must be 30 characters or less")
            .required("Required"),
        file: Yup.mixed()
            // .test('fileSize', 'File too large', (value) => value === null || (value && value.size <= FILE_SIZE))
            // .test(
            //   'fileFormat',
            //   'Unsupported file type',
            //   (value) => value === null || (value && SUPPORTED_FORMATS.includes(value.type))
            // )
            .required("Required")
    });
    
    return (
        <div>
            <Formik
                initialValues = {
                    {
                        name: "",
                        file: ""
                    }
                }
                validationSchema={validate}
                onSubmit={(values) => props.onSubmit(values)}
            >
            {(formik) => (
                <div>
                    <Form>
                        <TextField label="Name" name="name" type="text" />
                        <div className="form-group">
                            <label>Sourse:</label>
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
                    </Form>
                </div>
            )}
            </Formik>
        </div>
    )
}

export default VideoForm
