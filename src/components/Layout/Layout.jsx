import React from "react";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";
import EnterStock from "../enterStock/enterStock";

const Layout = () => {
  return (
    <>
      <Navbar />
      <EnterStock />
      <Footer />
    </>
  );
};

export default Layout;
