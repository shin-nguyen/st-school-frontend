import Banner from "./component/banner/Banner";
import { MessengerChat } from "react-messenger-chat-plugin";
import { React, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getTopHot, getTopNew } from "../../services/course-services";
import { getTopNewBlog, getTopView } from "../../services/blog-service";
import "react-multi-carousel/lib/styles.css";
import CardCourse from "../course/card-course/CardCourse";
import CardBlog from "../blog/card-blog/CardBlog";
import "./home.css";
import CarouselCustom from "./component/carousel/CarouselCustom";

const Home = () => {
  const dispatch = useDispatch();
  const listTopHot = useSelector((state) => state.course.topHot);
  const listTopNew = useSelector((state) => state.course.topNew);
  const listTopNewBlog = useSelector((state) => state.blog.topNewBlog);
  const listTopView = useSelector((state) => state.blog.topView);
  const isLoggedIn = localStorage.getItem("isLoggedIn");

  console.log(listTopNew);

  useEffect(() => {
    dispatch(getTopNew(isLoggedIn));
    dispatch(getTopHot(isLoggedIn));
    dispatch(getTopNewBlog());
    dispatch(getTopView());
  }, [dispatch]);

  return (
    <div className="body-content">
      <Banner />
      <br />
      <div className="page-body">
        <div>
          <p className="p-title">Hot Courses</p>
          <div>
            <CarouselCustom
              items={listTopHot.map((item) => (
                <div className="mr-20" key={item.id}>
                  <CardCourse course={item} goto={"/course/" + item.id} />
                </div>
              ))}
            />
          </div>
        </div>
        <br />
        <div>
          <p className="p-title">Newest Courses</p>
          <div>
            <CarouselCustom
              items={listTopNew.map((item) => (
                <div className="mr-20" key={item.id}>
                  <CardCourse course={item} goto={"/course/" + item.id} />
                </div>
              ))}
            />
          </div>
        </div>
        <br />
        <div>
          <p className="p-title">New Blogs</p>
          <div>
            <CarouselCustom
              items={listTopNewBlog.map((b) => (
                <div className="mr-20" key={b.id}>
                  <CardBlog blog={b} />
                </div>
              ))}
            />
          </div>
        </div>
        <br />
        <div>
          <p className="p-title">Top Blogs</p>
          <div>
            <CarouselCustom
              items={listTopView.map((b) => (
                <div className="mr-20" key={b.id}>
                  <CardBlog blog={b} />
                </div>
              ))}
            />
          </div>
        </div>
      </div>
      <MessengerChat pageId="102052712358008" appId="858821448148070" />
    </div>
  );
};

export default Home;
