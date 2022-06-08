import React, { useState, useEffect } from "react";
import {
  Grid,
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
  Dialog,
  DialogTitle,
  Button,
} from "@material-ui/core";
import "./Quiz.css";
import Spinner from "../../components/spinner/Spinner";
import SubmitLoading from "./SubmitLoading";
import countdown from "countdown";
import { useHistory } from "react-router-dom";
import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { fetchQuiz, submitQuiz } from "../../services/quiz-services";

const Quiz = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  let { quizId } = useParams();
  const loading = useSelector((state) => state.quiz.isQuizLoading);
  const quiz = useSelector((state) => state.quiz.quiz);

  const [currentStep, setStep] = useState(1);
  const [currentQuestion, setCurrentQuestion] = useState(0);

  const [currentAns, setCurrentAns] = useState([]);
  const [allChosenAns, setAllAns] = useState([]);

  const [duration, setDuration] = useState(-1);
  const [startTime, setStartTime] = useState(new Date());
  const [timeRemaining, setTimeRemaining] = useState("");
  const [submitLoading, setSubmitLoading] = useState(false);
  const [confirmModal, setConfirmModal] = useState(false);

  //Render Quiz -> Question -> Answer
  const setupQuestion = (questions) => {
    console.log(JSON.stringify(questions) + "New");
    let answerData = [];
    if (questions == undefined || questions.length == 0) {
      // I solve backend with condition question == 0 then status = false and not show
      return;
    }
    questions.map((question) => {
      let ansObj = {
        id: question.id,
        userSelect: null,
      };
      answerData.push(ansObj);
    });
    setAllAns(answerData);
  };

  const getQuizDetails = () => {
    dispatch(fetchQuiz(quizId));

    setDuration(quiz.duration);
    setupQuestion(quiz.questions);
    setStartTime(new Date());
  };

  useEffect(() => {
    if (quizId) {
      getQuizDetails();
    }
  }, [quiz.id]);

  const submitFormQuiz = () => {
    setSubmitLoading(true);

    let data = {
      id: quizId,
      questions: allChosenAns,
    };

    dispatch(submitQuiz(data, history));
  };

  const onCloseHandle = () => {
    setConfirmModal(false);
  };

  const handleSubmitBtn = () => {
    setConfirmModal(true);
  };

  const handleSubmit = (event) => {
    submitFormQuiz();
  };

  const timesUp = () => {
    // setLoading(true);
    // let url = "https://quizzie-api.herokuapp.com/quiz/finish";

    let data = {
      id: quizId,
      questions: allChosenAns,
    };
  };

  //Event event next Question and Load Current Ans Of Question
  const _next = () => {
    let currQues = currentQuestion + 1;
    setStep(currentStep + 1);
    setCurrentQuestion(currQues);
    setCurrentAns(allChosenAns[currQues].userSelect);
  };

  //Event event prevent Question and Load Current Ans Of Question
  const _prev = () => {
    let currQues = currentQuestion - 1;
    setStep(currentStep - 1);
    setCurrentQuestion(currQues);
    setCurrentAns(allChosenAns[currQues].userSelect);
  };

  //Button start with value 1 < current_step < length
  const previousButton = () => {
    if (currentStep !== 1) {
      return (
        <button className="quiz-btn prev-button" onClick={_prev}>
          <p>Previous</p>
        </button>
      );
    }
    return null;
  };

  ////Button next with value 1 < current_step < length and current_step == length => show button submit
  const nextButton = () => {
    if (currentStep < quiz.questions.length) {
      return (
        <button className="quiz-btn next-button" onClick={_next}>
          <p>Next</p>
        </button>
      );
    } else if (currentStep === quiz.questions.length) {
      return (
        <button className="quiz-btn submit-button" onClick={handleSubmitBtn}>
          <p>Submit</p>
        </button>
      );
    }
    return null;
  };

  //Change value answer of question
  const handleOptionChange = (event) => {
    setCurrentAns(event.target.value);

    let newState = allChosenAns;
    newState[currentQuestion].userSelect = event.target.value;

    setAllAns(newState);
    console.log(JSON.stringify(newState) + "Current - currentQuestion");
  };

  useEffect(() => {
    //Create end Time
    let endTime = Number(startTime) + duration * 60 * 1000;
    //still within the time allowed
    if (!loading && endTime > 0 && Number(endTime) < Number(Date.now())) {
      timesUp();
      return;
    } else {
      //What the hell >?
      //End Time => Count Down ?
      setTimeout(() => {
        setTimeRemaining(
          countdown(
            new Date(),
            new Date(Number(endTime)),
            countdown.MINUTES | countdown.SECONDS
          ).toString()
        );
      }, 1000);
    }
  });

  //Sumbit Quizz and go to page results
  if (submitLoading) {
    return <SubmitLoading />;
  } else {
    return loading ||
      quiz == null ||
      quiz.questions == null ||
      quiz.questions.length == 0 ? (
      <Spinner />
    ) : (
      <div className="quiz-page">
        <Grid container xs={12} spacing={5} className="quiz-container">
          <Grid item xs={10} md={8} lg={7} className="q-count">
            <h2 style={{ padding: 0 }}>
              QUESTION {currentStep} OF {quiz.questions.length}
            </h2>
          </Grid>
          <Grid item xs={10} md={8} lg={7} className="timer">
            <p style={{ margin: 0 }}>
              Time Remaining{" "}
              <h2 className="rem-time-display">{timeRemaining}</h2>
            </p>
          </Grid>

          <Grid
            item
            xs={10}
            md={8}
            lg={7}
            style={{
              margin: 0,
              padding: "2%",
              borderBottom: "3px solid #222",
              minHeight: "30vh",
              alignContent: "center",
              display: "flex",
              justifyContent: "center"
            }}
          >
            <div>
            <FormControl
              style={{ margin: "auto", width: "100%" }}
              component="fieldset"
            >
              <FormLabel className="label" component="legend">
                <p className="question">
                  {quiz.questions[currentQuestion].description}
                </p>
              </FormLabel>
              <RadioGroup
                aria-label="correct-choice"
                value={currentAns}
                onChange={handleOptionChange}
              >
                {quiz.questions[currentQuestion].options.map((option) => {
                  return (
                    <FormControlLabel
                      key={option._id}
                      value={option.text}
                      control={<Radio className="radio" />}
                      label={option.text}
                      style={{ margin: 0 }}
                    />
                  );
                })}
              </RadioGroup>
            </FormControl>
            </div>
            
          </Grid>

          {/* {Buttton Next And Pre Page} */}
          <Grid item xs={10} md={8} lg={7} className="button">
            <Grid item xs={6} className="button">
              {previousButton()}
            </Grid>
            <Grid item xs={6} className="button">
              {nextButton()}
            </Grid>
          </Grid>
        </Grid>

        {/* Open Modal Yes/No Submit Quiz */}
        <Dialog
          open={confirmModal}
          onClose={onCloseHandle}
          aria-labelledby="form-dialog-title"
          PaperProps={{
            style: {
              backgroundColor: "white",
              color: "#333",
              minWidth: "10%",
            },
          }}
        >
          <DialogTitle>Are you sure you want to submit the quiz?</DialogTitle>
          <div className="btn-div">
            <Button className="logout-btn m-right" onClick={handleSubmit}>
              Yes
            </Button>
            <Button className="cancel-btn m-left" onClick={onCloseHandle}>
              No
            </Button>
          </div>
        </Dialog>
      </div>
    );
  }
};

export default Quiz;
