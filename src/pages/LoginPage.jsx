import React from "react";
import Navbar from "../components/navbar/Navbar";
import LoginForm from "../components/login/LoginForm";
import Footer from "../components/footer/Footer";

const LoginPage = (props) => {
  return (
    <div>
      <Navbar {...props} />
      <LoginForm />
      <Footer />
    </div>
  );
};

export default LoginPage;
