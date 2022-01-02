import React, { useState, useEffect } from "react";
import "./CreateQuiz.css";
import {
  Container,
  Typography,
  Slider,
  Select,
  MenuItem,
  Button,
  Snackbar,
} from "@material-ui/core";
import TextInput from "../../../../../components/quizz/TextInput";
import Spinner from "../../../../../components/spinner/Spinner";

// import Loading from "../pages/Loading";
import { Alert } from "@material-ui/lab";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";

import { addQuiz } from "../../../../../services/quiz-services";

function CreateQuiz() {
  const [name, setName] = useState("");
  const [duration, setDuration] = useState(5);
  const [status, setStatus] = useState(false);

  const [loading, setLoading] = useState(false);

  const [error, setError] = useState(false);
  const dispatch = useDispatch();
  const history = useHistory();

  const onQuizNameChange = (event) => {
    setName(event.target.value);
  };

  const handleTimeChange = (e, val) => {
    setDuration(val);
  };

  const onTypeChange = (event) => {
    setStatus(event.target.value);
  };

  const handleSubmit = async () => {
    let data = {
      name: name,
      duration: duration,
      status: status,
    };

    dispatch(addQuiz(data, history));
  };

  if (loading) {
    return <Spinner />;
  } else {
    return (
      <Container className="create-quiz-page">
        <div className="create-form">
          <Typography variant="h4" className="create-head">
            Quiz Details
          </Typography>
          <div className="create-form-inputs">
            <TextInput
              variant="outlined"
              label="Quiz Name"
              value={name}
              onChange={onQuizNameChange}
              name="Quiz Name"
              className="form-input"
            />

            {/* <MuiPickersUtilsProvider utils={DateFnsUtils}>
              <Grid className="date-time-select" container spacing={3}>
                <Grid item xs={12} sm={6}>
                  <KeyboardDatePicker
                    disableToolbar
                    variant="inline"
                    format="MM/dd/yyyy"
                    margin="normal"
                    label="Select Quiz Date"
                    value={quizDate}
                    onChange={handleDateChange}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <KeyboardTimePicker
                    ampm={true}
                    format="hh:mm:ss aa"
                    views={["hours", "minutes", "seconds"]}
                    margin="normal"
                    label="Select Quiz Start Time"
                    value={quizDate}
                    onChange={handleDateChange}
                    keyboardIcon={<AccessAlarm />}
                  />
                </Grid>
              </Grid>
            </MuiPickersUtilsProvider> */}
            <p style={{ marginTop: "5%", marginBottom: "5%" }}>
              Quiz Time (in minutes):
            </p>
            <Slider
              defaultValue={5}
              aria-labelledby="quiz time slider"
              step={5}
              min={5}
              max={60}
              valueLabelDisplay="on"
              marks
              className="time-slider"
              value={duration}
              onChange={handleTimeChange}
            />
            <p>Select quiz type: </p>
            <Select
              value={status}
              onChange={onTypeChange}
              className="type-select"
            >
              <MenuItem value={true}>Public</MenuItem>
              <MenuItem value={false}>Private</MenuItem>
            </Select>

            <Button className="login-btn create-btn" onClick={handleSubmit}>
              Create Quiz
            </Button>
            <Typography variant="subtitle1" className="create-subtitle">
              NOTE: After creating the quiz, you can add questions by editing
              the quiz in YOUR QUIZZES section of the dashboard.
            </Typography>
          </div>
        </div>
        <Snackbar
          open={error}
          autoHideDuration={5000}
          onClose={() => setError(false)}
        >
          <Alert
            variant="filled"
            severity="error"
            onClose={() => setError(false)}
          >
            There was a problem. Please try again!
          </Alert>
        </Snackbar>
      </Container>
    );
  }
}

export default CreateQuiz;
