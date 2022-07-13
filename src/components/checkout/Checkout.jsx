import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { PayPalButton } from "react-paypal-button-v2";
import { addOrder, addVnPay } from "../../services/order-services";
import { CLIENT_ID } from "../../constants/SystemConstants";
import "../checkout/checkout.css";
import { Link } from "react-router-dom";
import vnpay from "../../assets/images/VN-PAY.png"

const Checkout = () => {
  const course = useSelector((state) => state.course.course);
  const dispatch = useDispatch();
  const history = useHistory();

  const handleClick = () => {
    dispatch(
      addOrder({
        user: {
          id: 1,
        },
        course: course,
      })
    );
    history.push("/my-courses");
  };

  const handleVnPayClick = () => {
    dispatch(addVnPay(course.id, localStorage.getItem("email")));
  };

  const handelBack = () => {
      history.push("/course/" + course.id);
  };

  return (
    <div className="checkout-card-container">
      <div className="checkout-card row">
        <div className="order-detail col-sm-6">
          <h2>Checkout</h2>
          <div className="item-detail">
            <p>Order Details</p>
            <div className="order-detail-flex">
              <div className="item-image">
                <img src={course.image} alt="" className="item-image"></img>
              </div>
              <div>
                <div className="item-name">
                  <span>{course.name}</span>
                </div>
                <div className="item-about">
                  <span>{course.about}</span>
                </div>
                <div className="item-price">
                  <span>${course.price}</span>
                </div>
              </div>
            </div>
          </div>
          <button className="btn-cancel btn btn-danger" onClick={handelBack}>
            Cancel
          </button>
        </div>
        <div className="oder-summary col-sm-6">
          <div className="card-order-summary">
            <h4>Summary</h4>
            <div className="original-price-wrapper">
              <span>Original Price: </span>
              <div className="original-price">${course.price}</div>
            </div>
            <br />
            <div className="coupon-discounts-wrapper">
              <span>Coupon Discounts: </span>
              <div className="coupon-discounts">$0</div>
            </div>
            <br />
            <hr />
            <div className="total-wrapper fw-bold">
              <span>Total: </span>
              <div className="total">${course.price}</div>
            </div>
            <div>
              <span>By completing your purchase you agree to these </span>
              <Link className="fw-bold" to="/">
                Terms of Service.
              </Link>
            </div>
            <PayPalButton
              createOrder={(data, actions) => {
                return actions.order.create({
                  purchase_units: [
                    {
                      amount: {
                        currency_code: "USD",
                        value: course.price,
                        breakdown: {
                          item_total: {
                            currency_code: "USD",
                            value: course.price,
                          },
                        },
                      },
                      items: [
                        {
                          name: course.name,
                          description: course.about,
                          sku: course.id,
                          unit_amount: {
                            currency_code: "USD",
                            value: course.price,
                          },
                          quantity: "1",
                        },
                      ],
                    },
                  ],
                  // application_context: {
                  //   shipping_preference: "NO_SHIPPING" // default is "GET_FROM_FILE"
                  // }
                });
              }}
              onApprove={(data, actions) => {
                // Capture the funds from the transaction
                return actions.order.capture().then(function (details) {
                  // Show a success message to your buyer
                  dispatch(
                    addOrder({
                      user: {
                        id: 1,
                      },
                      course: course,
                    })
                  );
                  setTimeout(() => {
                    history.push("/my-courses");
                  }, 2500);
                });
              }}
              options={{
                clientId: CLIENT_ID,
              }}
            />
            {/* <a
              href={`${API_BASE_URL}/pay-vn/get-code?callback=https://st-school-client.herokuapp.com/learning/${
                course?.id
              }&vnp_IpAddr=13.160.92.202&vnp_OrderInfo=Payment&vnp_OrderType=1&course_Id=${
                course?.id
              }&email=${localStorage.getItem("email")}`}
              className="btn btn-success"
              style={{ width: "100%" }}
            >
              VN Pay
            </a> */}
            <div className="vnpay-btn can-click" onClick={handleVnPayClick}>
              <img src={vnpay} alt="" height={60} width={300} />
            </div>
            {/* <button
              className="btn btn-success"
              onClick={handleVnPayClick}
              style={{ width: "100%" }}
            >
              Vn Payyyy
              
            </button> */}
            <br />
            <hr />
            {/* <button
              className="btn btn-success"
              onClick={handleClick}
              style={{ width: "100%" }}
            >
              Enroll Free Now
            </button> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
