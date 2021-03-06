import React, { useEffect, useState } from "react";
import "./EditQuiz.css";
import {
  Container,
  Typography,
  Button,
  Dialog,
  Grid,
  InputLabel,
  Select,
  MenuItem,
  ExpansionPanel,
  ExpansionPanelSummary,
  ExpansionPanelDetails,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  FormControlLabel,
  IconButton,
  DialogTitle,
  TextField,
  Snackbar,
} from "@material-ui/core";
import {
  Create,
  ExpandMore,
  Adjust,
  Delete,
  BarChart,
} from "@material-ui/icons";
import { Link } from "react-router-dom";
import Spinner from "../../../../../components/spinner/Spinner";
import TextInput from "../../../../../components/quizz/TextInput";
import { Alert } from "@material-ui/lab";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchQuiz,
  deleteQuestionInQuiz,
  addQuestionInQuiz,
  updateQuestionInQuiz
} from "../../../../../services/quiz-services";
import { getRecords } from "../../../../../services/record-service";
import { useParams } from "react-router";

function EditQuiz() {
  const dispatch = useDispatch();
  let { courseId } = useParams();
  const loading = useSelector((state) => state.quiz.isQuizLoading);
  const quiz = useSelector((state) => state.quiz.quiz);
  const records = useSelector((state) => state.record.records);

  const [serverError, setServerError] = useState(false);
  const [questionModal, setQuestionModal] = useState(false);

  const [newQuestion, setNewQuestion] = useState("");
  const [newQuestionError, setNewQuestionError] = useState(false);

  const [option1, setOption1] = useState("");
  const [option1Error, setOption1Error] = useState(false);
  const [option2, setOption2] = useState("");
  const [option2Error, setOption2Error] = useState(false);
  const [option3, setOption3] = useState("");
  const [option3Error, setOption3Error] = useState(false);
  const [option4, setOption4] = useState("");
  const [option4Error, setOption4Error] = useState(false);

  const [correctOption, setCorrectOption] = useState(-1);
  const [correctOptionError, setCorrectOptionError] = useState(false);

  const [update, setUpdate] = useState(false);
  const [updateId, setUpdateId] = useState(null);

  const [deleteQuestionModal, setDeleteQuestionModal] = useState(false);


  const [searchData, setSearchData] = useState(records);
  const [searchText, setSearchText] = useState("");
  const [sortBy, setSortBy] = useState(-1);

  //Close Modal Question In Quizz
  const onCloseHandle = () => {
    setQuestionModal(false);

    if (update) {
      setUpdate(false);
      setUpdateId(null);
      clearModal();
    }
  };
  //Change value text question
  const onQuestionChange = (event) => {
    setNewQuestion(event.target.value);
  };

  //Change value of answer - option
  const handleOptionChange1 = (event) => {
    setOption1(event.target.value);
  };
  const handleOptionChange2 = (event) => {
    setOption2(event.target.value);
  };
  const handleOptionChange3 = (event) => {
    setOption3(event.target.value);
  };
  const handleOptionChange4 = (event) => {
    setOption4(event.target.value);
  };
  const handleCorrectOption = (event) => {
    setCorrectOption(event.target.value);
  };

  //Reset Form
  const clearModal = () => {
    setNewQuestion("");
    setNewQuestionError(false);
    setOption1("");
    setOption1Error(false);
    setOption2("");
    setOption2Error(false);
    setOption3("");
    setOption3Error(false);
    setOption4("");
    setOption4Error(false);
    setCorrectOption(-1);
    setCorrectOptionError(false);
  };

  //Search Record By 'Search by name or score'
  const handleSearchChange = (event) => {
    let valueSearch = event.target.value;
    setSearchText(valueSearch);

    let newValue = records.filter(
      (record) =>
        record.user?.email
          .toLowerCase()
          .search(valueSearch.trim().toLowerCase()) !== -1 ||
        String(record.score) === valueSearch.trim().toLowerCase()
    );
    let sorted = sortByFunc(sortBy, newValue);
    setSearchData(sorted);
  };

  //On Change Sort By None - Recent - Score - Name
  const handleSortChange = (event) => {
    let valueSearch = event.target.value;
    setSortBy(valueSearch);
    let newValue = sortByFunc(valueSearch, searchData);
    setSearchData(newValue);
  };
  //Sort by score - name - recent
  const sortByFunc = (by, array) => {
    if (by === "score") {
      return array.sort(function (a, b) {
        return b.score - a.score;
      });
    } else if (by === "name") {
      return array.sort(function (a, b) {
        return a.user.firstName - b.user.firstName;
      });
    }
    //  else if (by === "recent") {
    //   return array.sort(function (a, b) {
    //     return b.time - a.time;
    //   });
    // } 
    else {
      return array;
    }
  };
  //Edit question
  const handleQuestionEditBtn = (question) => {
    setUpdate(true);
    setUpdateId(question.id);
    setNewQuestion(question.description);
    setOption1(question.options[0].text);
    setOption2(question.options[1].text);
    setOption3(question.options[2].text);
    setOption4(question.options[3].text);
    setCorrectOption(question.correct);
    setQuestionModal(true);
  };
  //Delete question
  const handleQuestionDeleteBtn = (question) => {
    setUpdateId(question.id);
    setDeleteQuestionModal(true);
  };
  //Close question delete
  const handleQuestionModalClose = () => {
    setUpdateId(null);
    setDeleteQuestionModal(false);
  };

  //Delete Question In Quiz With UpdateId
  const handleDeleteQuestion = () => {
    dispatch(deleteQuestionInQuiz(courseId, updateId));
    setUpdateId(null);
    setDeleteQuestionModal(false);
  };

  //Chuaw biet
  const handleQuestionUpdate = () => {
    // if (!validate()) return;
    let question = {
      id: updateId,
      options: [
        { text: option1 },
        { text: option2 },
        { text: option3 },
        { text: option4 },
      ],
      correct: correctOption,
      description: newQuestion
    };

    dispatch(updateQuestionInQuiz(courseId, question));
    onCloseHandle();
  };

  //Vailidate Null Option and Qu??tion
  const validate = () => {
    if (newQuestion.trim().length === 0) {
      setNewQuestionError(true);
      return false;
    }
    if (option1.trim().length === 0) {
      setOption1Error(true);
      return false;
    }
    if (option2.trim().length === 0) {
      setOption2Error(true);
      return false;
    }
    if (option3.trim().length === 0) {
      setOption3Error(true);
      return false;
    }
    if (option4.trim().length === 0) {
      setOption4Error(true);
      return false;
    }
    if (correctOption === -1) {
      setCorrectOptionError(true);
      return false;
    }
    return true;
  };

  //handleQuestionUpdate - handleQuestionSubmit
  const handleQuestionSubmit = () => {
    //TODO: Handle Validation
    if (!validate()) return;

    let question = {
      options: [
        { text: option1 },
        { text: option2 },
        { text: option3 },
        { text: option4 },
      ],
      correct: correctOption,
      description: newQuestion
    };

    dispatch(addQuestionInQuiz(courseId, question));
    clearModal();
    setQuestionModal(false);
  };

  const getQuizDetails = () => {
    dispatch(fetchQuiz(courseId));
    dispatch(getRecords(courseId));
  };

  useEffect(() => {
    getQuizDetails();
  }, [courseId]);

  if (loading) {
    return <Spinner />;
  } else {
    return (
      <Container className="edit-quiz-page">
        <Typography variant="h3" className="dash-head p-top edit-quiz-head">
          Edit Quiz
        </Typography>
        <div className="edit-btn-bar">
          <Button
            className="edit-details-btn"
            component={Link}
            to={`update-detail`}
          >
            <Create className="edit-icon" />
            Edit Details
          </Button>
        </div>
        <div className="quiz-details-sec">
          <Typography variant="h6" className="quiz-detail-param">
            Name: <span className="quiz-detail-text">{quiz.name}</span>
          </Typography>
          <Typography variant="h6" className="quiz-detail-param">
            Duration:{" "}
            <span className="quiz-detail-text">{quiz.duration} minutes</span>
          </Typography>
          <Typography variant="h6" className="quiz-detail-param">
            Type:{" "}
            <span className="quiz-detail-text">
              {quiz.status ? "Public" : "Private"}
            </span>
          </Typography>
          {quiz.status === false ? (
            <Typography variant="h6" className="quiz-detail-param">
              Quiz Code: <span className="quiz-detail-text">{quiz.code}</span>
            </Typography>
          ) : null}
        </div>
        <div className="quiz-questions-sec">
          <Typography variant="h4" className="quiz-questions-head">
            Questions
          </Typography>
          <div className="quiz-questions-display">
            <div className="add-question-bar">
              <Button
                className="add-question-btn"
                onClick={() => setQuestionModal(true)}
              >
                Add a question
              </Button>
            </div>
            {quiz.questions == null || quiz.questions.length === 0 ? (
              <p style={{ textAlign: "center" }}>No questions added yet!</p>
            ) : (
              <div className="questions-list-display">
                {quiz.questions.map((question) => (
                  <ExpansionPanel
                    elevation={3}
                    className="expansion"
                    key={question.id}
                  >
                    <ExpansionPanelSummary
                      className="question-summary"
                      expandIcon={<ExpandMore />}
                      aria-controls="question-content"
                      aria-label="Expand"
                    >
                      <FormControlLabel
                        style={{ marginRight: "0" }}
                        aria-label="Edit"
                        control={
                          <IconButton>
                            <Create />
                          </IconButton>
                        }
                        onClick={() => handleQuestionEditBtn(question)}
                      />
                      <FormControlLabel
                        aria-label="Edit"
                        control={
                          <IconButton>
                            <Delete />
                          </IconButton>
                        }
                        onClick={() => handleQuestionDeleteBtn(question)}
                      />
                      <Typography className="question-label">
                        {question.description}
                      </Typography>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                      <List component="nav" className="options-display">
                        {question.options.map((option) => (
                          <ListItem button key={option.text}>
                            <ListItemIcon>
                              <Adjust
                                style={{
                                  color:
                                    question.correct == option.text
                                      ? "green"
                                      : "black",
                                }}
                              />
                            </ListItemIcon>
                            <ListItemText
                              style={{
                                color:
                                  question.correct == option.text
                                    ? "green"
                                    : "black",
                              }}
                              primary={option.text}
                            />
                          </ListItem>
                        ))}
                      </List>
                    </ExpansionPanelDetails>
                  </ExpansionPanel>
                ))}
              </div>
            )}
          </div>
          <Typography variant="h4" className="quiz-questions-head m-top">
            Submissions
          </Typography>
          <div className="quiz-students-list">
            <div className="add-question-bar">
              {/* Thong ke */}
              <Button
                className="add-question-btn stats-btn"
                component={records.length !== 0 ? Link : Button}
                to={{
                  pathname: "/quiz-stats",
                  state: { records: records },
                }}
              >
                <BarChart />
                View Stats
              </Button>
            </div>
            {records.length === 0 ? (
              <p
                style={{
                  textAlign: "center",
                  margin: "0",
                  paddingTop: "3%",
                  paddingBottom: "3%",
                }}
              >
                No records yet!
              </p>
            ) : (
              <>
                <div className="search-bar">
                  <TextField
                    placeholder="Search by name or score"
                    type="text"
                    onChange={handleSearchChange}
                    className="search-input"
                    value={searchText}
                  />
                  <div style={{ marginLeft: "3%" }}>
                    <InputLabel id="sort-by">Sort by</InputLabel>
                    <Select
                      labelId="sort-by"
                      id="sort-select"
                      value={sortBy}
                      onChange={handleSortChange}
                    >
                      <MenuItem value={-1}>
                        <em>None</em>
                      </MenuItem>
                      {/* <MenuItem value="recent">Recent</MenuItem> */}
                      <MenuItem value="score">Score</MenuItem>
                      <MenuItem value="name">Name</MenuItem>
                    </Select>
                  </div>
                </div>
                <List aria-label="records list">
                  {searchData.map((response) => (
                    <ListItem
                      button
                      key={response.id}
                      component={Link}
                      to={{
                        pathname: `/studentResponse`,
                        state: { response: response },
                      }}
                    >
                      <ListItemText
                        primary={response.user.email}
                        secondary={`Scored: ${response.score}`}
                      />
                    </ListItem>
                  ))}
                </List>
              </>
            )}
          </div>
        </div>
        <Dialog
          open={questionModal}
          onClose={onCloseHandle}
          aria-labelledby="add-question-modal"
          PaperProps={{
            style: {
              backgroundColor: "white",
              color: "#333",
              minWidth: "50%",
            },
          }}
          style={{ width: "100%" }}
        >
          <div className="add-ques-heading">
            <Typography
              variant="h6"
              style={{ textAlign: "center", margin: "2% 5%" }}
            >
              New Question{" "}
            </Typography>
            {/* {!update ? (
              <IconButton onClick={handlePopover}>
                <Info className="add-info-icon" />
              </IconButton>
            ) : null} */}
          </div>
          {!update ? (
            <>
              <p className="manual-head">
                <span>Or manually add the question</span>
              </p>
            </>
          ) : null}
          <div className="new-question-form">
            <TextInput
              error={newQuestionError}
              helperText={newQuestionError ? "This cannot be empty" : null}
              className="new-ques-input"
              variant="outlined"
              label="Question Text"
              value={newQuestion}
              onChange={onQuestionChange}
            />
            <hr style={{ width: "100%", marginBottom: "3%" }} />
            <Grid container spacing={1}>
              <Grid item xs={12} sm={6}>
                <TextInput
                  error={option1Error}
                  helperText={option1Error ? "This cannot be empty" : null}
                  className="new-ques-input"
                  variant="outlined"
                  label="Option 1"
                  value={option1}
                  onChange={handleOptionChange1}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextInput
                  error={option2Error}
                  helperText={option2Error ? "This cannot be empty" : null}
                  className="new-ques-input"
                  variant="outlined"
                  label="Option 2"
                  value={option2}
                  onChange={handleOptionChange2}
                />
              </Grid>
            </Grid>
            <Grid container spacing={1}>
              <Grid item xs={12} sm={6}>
                <TextInput
                  error={option3Error}
                  helperText={option3Error ? "This cannot be empty" : null}
                  className="new-ques-input"
                  variant="outlined"
                  label="Option 3"
                  value={option3}
                  onChange={handleOptionChange3}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextInput
                  error={option4Error}
                  helperText={option4Error ? "This cannot be empty" : null}
                  className="new-ques-input"
                  variant="outlined"
                  label="Option 4"
                  value={option4}
                  onChange={handleOptionChange4}
                />
              </Grid>
            </Grid>
            <hr style={{ width: "100%", marginBottom: "3%" }} />
            <InputLabel id="correct-option">Correct Option</InputLabel>
            <Select
              error={correctOptionError}
              className="correct-answer-select"
              style={{ width: "50%" }}
              labelId="correct-option"
              value={correctOption}
              onChange={handleCorrectOption}
            >
              <MenuItem value={-1}>None</MenuItem>
              {option1.trim().length !== 0 ? (
                <MenuItem value={option1}>{option1}</MenuItem>
              ) : null}
              {option2.trim().length !== 0 ? (
                <MenuItem value={option2}>{option2}</MenuItem>
              ) : null}
              {option3.trim().length !== 0 ? (
                <MenuItem value={option3}>{option3}</MenuItem>
              ) : null}
              {option4.trim().length !== 0 ? (
                <MenuItem value={option4}>{option4}</MenuItem>
              ) : null}
            </Select>
            {!update ? (
              <Button
                className="add-question-submit"
                onClick={handleQuestionSubmit}
              >
                Add Question
              </Button>
            ) : (
              <Button
                className="add-question-submit"
                onClick={handleQuestionUpdate}
              >
                Update Question
              </Button>
            )}
          </div>
        </Dialog>
        <Dialog
          open={deleteQuestionModal}
          onClose={handleQuestionModalClose}
          aria-labelledby="delete-quiz-modal"
          PaperProps={{
            style: {
              backgroundColor: "white",
              color: "black",
              minWidth: "10%",
            },
          }}
        >
          <DialogTitle>
            Are you sure you want to delete this question?
          </DialogTitle>
          <div className="btn-div">
            <Button
              className="logout-btn m-right bg-red-btn"
              onClick={handleDeleteQuestion}
            >
              Yes
            </Button>
            <Button
              className="cancel-btn m-left"
              onClick={handleQuestionModalClose}
            >
              No
            </Button>
          </div>
        </Dialog>
        <Snackbar
          open={serverError}
          autoHideDuration={3000}
          onClose={() => setServerError(false)}
          anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
        >
          <Alert
            variant="filled"
            severity="error"
            onClose={() => setServerError(false)}
          >
            There was some problem with the server. Try again...
          </Alert>
        </Snackbar>
      </Container>
    );
  }
}

export default EditQuiz;
