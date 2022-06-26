import "./learning-tool.css";
import { Formik, Form } from "formik";
import { TextField } from "../../formik/TextField";
import React, { useState } from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import { createEvent } from "../../../services/job-service";
import { useDispatch } from "react-redux";
// import TextField1 from '@mui/material/TextField';
// import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
// import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
// import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';

const LearningTool = (props) => {
  const dispatch = useDispatch();
  const [isCreateEvent, setIsCreateEvent] = useState(false);
  const [radioValue, setRadioValue] = useState("email");

  const initialValues = {
    title: "",
    content: "",
    time: "",
    email: "",
    phone: "",
  };

  const handleSubmit = (values) => {
    console.log(values.time);
    const data =
      radioValue === "email"
        ? {
            email: values.email,
            body: values.content,
            subject: "Things I wanna say to my Future self",
            dateTime: values.time,
            timeZone: "Asia/Ho_Chi_Minh",
          }
        : {
            phone: values.phone,
            message: values.content,
            dateTime: values.time,
            timeZone: "Asia/Ho_Chi_Minh",
          };

    dispatch(createEvent(data));
    setIsCreateEvent(!isCreateEvent);
  };

  return (
    <div className="learning-tool-container">
      <div className="learning-tool-title">
        <div
          style={{
            fontSize: "1.5rem",
            fontWeight: "700",
            marginBottom: "30px",
          }}
        >
          Learning reminders
        </div>
        <div
          style={{
            fontSize: "1.2rem",
            fontWeight: "700",
            marginBottom: "10px",
          }}
        >
          Calendar events
        </div>
        <div style={{ marginBottom: "40px" }}>
          Learning a little each day adds up. Research shows that students who
          make learning a habit are more likely to reach their goals. Set time
          aside to learn and get reminders using your learning scheduler.
        </div>
      </div>
      <div className={"show-" + !isCreateEvent}>
        <button
          className="learning-tool-schedule-btn"
          onClick={() => setIsCreateEvent(!isCreateEvent)}
        >
          <span style={{ marginRight: "10px" }}>Schedule learning time</span>{" "}
          <i class="bx bx-sm bx-alarm-add"></i>
        </button>
      </div>
      <div className={"learning-tool-schedule-content show-" + isCreateEvent}>
        <Formik
          initialValues={initialValues}
          // validationSchema={validate}
          onSubmit={(values) => handleSubmit(values)}
          enableReinitialize
        >
          {(formik) => (
            <div>
              <h2 className="my-4 font-weight-bold .display-4">
                Create an event
              </h2>
              <Form>
                <TextField label="Title" name="title" type="text" />
                <TextField label="Content" name="content" type="text" />
                <TextField label="Time" name="time" type="datetime-local" />
                {/* <LocalizationProvider dateAdapter={AdapterDateFns}>
                  <DateTimePicker
                    renderInput={(props) => <TextField1 {...props} />}
                    label="Date Time"
                    // value={value}
                    onChange={(event) =>
                      formik.setFieldValue("time", event.target.value)
                    }
                  />
                </LocalizationProvider> */}
                <FormControl>
                  <FormLabel id="demo-radio-buttons-group-label">
                    <div
                      style={{
                        fontSize: "1rem",
                        fontWeight: "700",
                        marginTop: "10px",
                      }}
                    >
                      Notifice By
                    </div>
                  </FormLabel>
                  <RadioGroup
                    row
                    aria-labelledby="demo-radio-buttons-group-label"
                    defaultValue="email"
                    name="radio-buttons-group"
                    onChange={(event) => {
                      setRadioValue(event.target.value);
                    }}
                  >
                    <FormControlLabel
                      value="email"
                      control={<Radio />}
                      label="Email"
                    />
                    <FormControlLabel
                      value="phone"
                      control={<Radio />}
                      label="Phone"
                    />
                  </RadioGroup>
                </FormControl>
                <div className={"show-" + (radioValue === "email")}>
                  <TextField label="By Email" name="email" type="text" />
                </div>
                <div className={"show-" + (radioValue === "phone")}>
                  <TextField label="By Phone" name="phone" type="text" />
                </div>
                <button className="btn btn-success mt-3" type="submit">
                  Create
                </button>
                <button
                  className="btn btn-danger mt-3 ml-3"
                  type="button"
                  onClick={() => setIsCreateEvent(!isCreateEvent)}
                >
                  Close
                </button>
              </Form>
              {/* <div className="learning-tool-action-btn">
                  <div className='learning-tool-confirm-btn'>
                    <button className="btn btn-success" type="submit">
                      Create
                    </button>
                  </div>
                  <div className='learning-tool-cancel-btn' onClick={() => setIsCreateEvent(!isCreateEvent)}>
                    <button className="btn btn-danger">
                      Cancle
                    </button>
                  </div>
                </div> */}
            </div>
          )}
        </Formik>

        {/* <div className='learning-tool-schedule-header'>
          <p>Create an event</p>
          <div>Name</div>
          <div>Time to learn</div>
        </div>
        <div className='learning-tool-schedule-frequency'>
          <div>Frequency</div>
          <div className='learning-tool-schedule-frequency-item'>
            <div>Once</div>
            <div>Daily</div>
            <div>Weekly</div>
            <div>Monthly</div>
          </div>
        </div>
        <div className='learning-tool-schedule-time'>
          <div>Time</div>
          <div>
            <div>Time</div>
          </div>
        </div>
        <div className='learning-tool-schedule-remider'>
          <div>Reminder</div>
          <div className='learning-tool-schedule-remider-item'>
            <div>Email</div>
            <div>30</div>
            <div>Before</div>
          </div>
        </div>
        <div className='learning-tool-confirm-btn'>Save</div>
        <div className='learning-tool-cancel-btn'>Cancle</div> */}
      </div>
    </div>
  );
};

export default LearningTool;
