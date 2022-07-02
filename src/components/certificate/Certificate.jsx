import { React, useEffect } from "react";
import html2canvas from "html2canvas";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router";
import jsPDF from "jspdf";
import { getOrderByCourseAndUser } from "../../services/order-services";
import CardCourse from "../course/card-course/CardCourse";
import "./certificate.css";

const Certificate = () => {
  let { certificateId } = useParams();
  const order = useSelector((state) => state.order.order);
  const course = order?.course;
  const user = order?.user;
  const dispatch = useDispatch();

  const exportPDF = () => {
    const input = document.getElementById("content");
    html2canvas(input).then((canvas) => {
      const imgData = canvas.toDataURL("img/png");
      const pdf = new jsPDF("p", "mm", "a3");
      pdf.addImage(imgData, "PNG", 1, 1);
      pdf.save("File.pdf");
    });
  };

  useEffect(() => {
    dispatch(getOrderByCourseAndUser(certificateId));
  }, [dispatch]);

  return (
    <div className="certificate-container">
      <div className="certificate-content" id="content">
        <div
          style={{
            fontSize: "33px",
            fontWeight: "900",
            marginBottom: "30px",
            letterSpacing: "10px",
            fontFamily: "fantasy",
          }}
        >
          ST School
        </div>
        <div
          style={{ fontSize: "17px", fontWeight: "600", marginBottom: "30px" }}
        >
          CERTIFICATE OF COMPLETION
        </div>
        <div
          style={{
            fontSize: "40px",
            fontWeight: "900",
            marginBottom: "10px",
            fontFamily: "fantasy",
          }}
        >
          {course?.name}
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            marginBottom: "60px",
          }}
        >
          <span style={{ fontSize: "16px", fontWeight: "500" }}>
            Instructors:&nbsp;
          </span>
          <span style={{ fontSize: "16px", fontWeight: "700" }}>
            {" "}
            {course?.lecturer}
          </span>
        </div>
        <div
          style={{
            fontSize: "42px",
            fontWeight: "800",
            marginBottom: "50px",
            letterSpacing: "5px",
            fontFamily: "fantasy",
          }}
        >
          {user?.firstName.normalize("NFD").replace(/[\u0300-\u036f]/g, "") +
            " " +
            user?.lastName.normalize("NFD").replace(/[\u0300-\u036f]/g, "")}
        </div>
        <div style={{ display: "flex", alignItems: "center" }}>
          <span>Date:&nbsp;</span>
          <span style={{ fontSize: "16px", fontWeight: "700" }}>
            {" "}
            {order?.createdTime}
          </span>
        </div>
        <div style={{ display: "flex", alignItems: "center" }}>
          <span>Length:&nbsp;</span>
          <span style={{ fontSize: "16px", fontWeight: "700" }}>
            {" "}
            {course?.duration} total hours
          </span>
        </div>
      </div>
      <div className="certificate-info">
        <div
          style={{
            fontSize: "20px",
            fontWeight: "700",
            marginBottom: "20px",
            marginTop: "-8px",
          }}
        >
          Certificate Recipient:
        </div>
        <div style={{ marginBottom: "20px" }}>
          <div className="all-review-info">
            <div style={{ display: "flex" }}>
              <div className="topnav__right-user__image">
                <img src={user?.avatar} alt={user?.firstName} />
              </div>
              &nbsp;&nbsp;&nbsp;
              <strong>{user?.firstName + " " + user?.lastName}</strong>
            </div>
          </div>
        </div>
        <div
          style={{ fontSize: "18px", fontWeight: "700", marginBottom: "15px" }}
        >
          About the course
        </div>
        <div className="certificate-course-info">
          <CardCourse course={course} isBought progress={order.progress} />
        </div>
        <div style={{ marginTop: "50px" }}>
          <div
            className="certificate-download-btn can-click"
            onClick={() => exportPDF()}
          >
            <i class="bx bxs-download">&nbsp;</i>Download
          </div>
        </div>
      </div>
    </div>
  );
};

export default Certificate;
