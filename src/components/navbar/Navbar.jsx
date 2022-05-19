import React from "react";
import "./style.css";

const Navbar = () => {
  return (
    <>
      <div className="navbar__spacing container stroke">
        <div class="row row-no-gutters">
          <div class="technicals col-xs-6 col-md-4">TECHNICALS</div>
          <div class="fundamentals col-xs-6 col-md-4">FUNDAMENTALS</div>
          <div class="news col-xs-6 col-md-4">NEWS</div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
