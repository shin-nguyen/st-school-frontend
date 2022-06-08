import Quiz from "../components/quizz/Quiz.jsx";
import Navbar from '../components/navbar/Navbar'

export default function SingleQuizPage(props) {
  return (
    <>
      <Navbar {...props}/>
      <div style={{display: "flex",justifyContent:"center"}}>
        <Quiz/>
      </div>
    </>
  );
}
