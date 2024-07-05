import React from "react";
import "./Title.css";

const Title = ({ subTitle, title, iddd }) => {
  return (
    <div className="title" id={iddd}>
      <p>{subTitle}</p>
      <h2>{title}</h2>
    </div>
  );
};

export default Title;
