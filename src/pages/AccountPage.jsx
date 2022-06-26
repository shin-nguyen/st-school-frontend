import React from "react";
import Account from "../components/account/Account";
import Footer from "../components/footer/Footer";
import Navbar from "../components/navbar/Navbar";

const AccountPage = (props) => {
  return (
    <div>
      <Navbar {...props} />
      <Account />
      <Footer />
    </div>
  );
};

export default AccountPage;
