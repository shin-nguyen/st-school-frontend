import { React, useEffect } from "react";
import BlogForm from "../components/blog/blog-form/BlogForm1";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import PageTitle from "../components/page-title/PageTitle";
import { useHistory } from "react-router";
import { useSelector } from "react-redux";

const WriteBlogPage = (props) => {
  const history = useHistory();
  const isLoggedIn = useSelector((state) => state.user.isLoggedIn);

  useEffect(() => {
    const checkAccess = async () => {
      const isLogin = localStorage.getItem("isLoggedIn");
      if (!(isLoggedIn || isLogin)) {
        history.push("/login");
      }
    };

    checkAccess();

    return () => {};
  }, []);

  return (
    <div>
      <Navbar {...props} />
      <PageTitle title="Write Blog" />
      <BlogForm />
      <Footer />
    </div>
  );
};

export default WriteBlogPage;
