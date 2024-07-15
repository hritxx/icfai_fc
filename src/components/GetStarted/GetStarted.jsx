import React from "react";
import "./GetStarted.css";
const GetStarted = () => {
  return (
    <div id="get-started" className="g-wrapper">
      <div>
        <div className="flexColCenter inner-container">
          <span className="primaryText"></span>
          <span className="secondaryText">
            © Copyright 2024 The ICFAI Group. All Rights Reserved
            <br />
            <h1 color="red">Developed By Hriteek Roy</h1>
          </span>
          <button className="button" href>
            <a href="mailto:zainkeepscode@gmail.com">Send your queries</a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default GetStarted;
