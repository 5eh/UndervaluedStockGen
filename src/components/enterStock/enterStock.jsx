import React from "react";
import "./style.css";

const enterStock = () => {
  // Enter the Ticker, need to create {Ticker} form, {ID}, this needs to find the Exchange it's on, and the active stock price

  return (
    <>
      <div className="container">
        <div className="form__Styling">
          <form>
            <label>
              <input
                className="ticker__Input"
                type="Ticker"
                name="Ticker"
                maxlength="5"
                placeholder="$RTLR"
              />
            </label>
            <input
              className="ticker__Exchange"
              type="Exchange"
              name="Exchange"
              maxlength="5"
              placeholder="NASQ"
            />
          </form>
        </div>
      </div>
    </>
  );
};

export default enterStock;
