/* Copy of createQuiz page */
import React, { useState, useEffect } from "react";
import "../quizForm/CreateQuiz.css";
import {
  Container,
  Typography,
  Slider,
  Select,
  MenuItem,
  Button,
} from "@material-ui/core";
import TextInput from "../text-input";
// import {
// 	KeyboardDatePicker,
// 	KeyboardTimePicker,
// 	MuiPickersUtilsProvider,
// } from "@material-ui/pickers";
// import DateFnsUtils from "@date-io/date-fns";
import Spinner from "../../../../../components/spinner/Spinner";
import { updateQuiz } from "../../../../../services/quiz-services";
import { fetchQuiz } from "../../../../../services/quiz-services";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router";
function UpdateQuizDetails() {
  const dispatch = useDispatch();
  const history = useHistory();

  let { quizId } = useParams();
  const quiz = useSelector((state) => state.quiz.quiz);
  const [quizName, setQuizName] = useState("");
  const [quizDate, setQuizDate] = useState(new Date());
  const [duration, setDuration] = useState(5);
  const [status, setStatus] = useState(false);

  const loading = useSelector((state) => state.quiz.isQuizLoading);
  // const [redirect, setRedirect] = useState(false);

  const onQuizNameChange = (event) => {
    setQuizName(event.target.value);
  };

  const handleDateChange = (date) => {
    setQuizDate(date);
  };

  const handleTimeChange = (e, val) => {
    setDuration(val);
  };

  const onTypeChange = (event) => {
    setStatus(event.target.value);
  };

  const handleSubmit = () => {
    let data = {
      id: quizId,
      name: quizName,
      duration: duration,
      status: status,
      // "scheduledFor": quizDate.getTime()
    };
    dispatch(updateQuiz(data, history));
  };

  const getQuizDetails = () => {
    dispatch(fetchQuiz(quizId));
    setQuizName(quiz.name);
    // setQuizDate(new Date(Number(details.scheduledFor)));
    setDuration(quiz.duration);
    setStatus(quiz.status);
  };

  useEffect(() => {
    getQuizDetails();
  }, [quizId]);

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
              value={quizName}
              onChange={onQuizNameChange}
              name="Quiz Name"
              className="form-input"
            />

            {/* <MuiPickersUtilsProvider utils={DateFnsUtils}>
							<Grid
								className="date-time-select"
								container
								spacing={3}
							>
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
										margin="normal"
										label="Select Quiz Start Time"
										value={quizDate}
										onChange={handleDateChange}
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
            <p style={{ color: "#777" }}>Select quiz type: </p>
            <Select
              value={status}
              onChange={onTypeChange}
              className="type-select"
            >
              <MenuItem value={true}>Public</MenuItem>
              <MenuItem value={false}>Private</MenuItem>
            </Select>
            <Button className="login-btn create-btn" onClick={handleSubmit}>
              Update Quiz
            </Button>
          </div>
        </div>
      </Container>
    );
  }
}

export default UpdateQuizDetails;
