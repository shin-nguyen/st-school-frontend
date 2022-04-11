import Navbar from "../components/navbar/Navbar";
import ResultPage from "../components/result/ResultPage.js";

export default function SingleResultPagePage(props) {
  return (
    <>
      <Navbar {...props} />
      <div style={{ display: "flex" }}>
        <ResultPage />
      </div>
    </>
  );
}
