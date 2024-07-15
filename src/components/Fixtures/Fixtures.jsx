import React, { useRef } from "react";
import "./Fixtures.css";
import nextbtn from "/next-btn.png";
import backbtn from "/back-btn.png";
import Scorecard from "../Scorecard/Scorecard";

const Fixtures = ({ matches }) => {
  const slider = useRef();
  let tx = 0;

  const slideForward = () => {
    if (tx > -((matches.length - 1) * 25)) {
      tx -= 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  };

  const slideBackward = () => {
    if (tx < 0) {
      tx += 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  };

  return (
    <div className="paddings innerWidth flexCenter ">
      <img
        src={nextbtn}
        alt="Next"
        className="next-btn"
        onClick={slideForward}
      />
      <img
        src={backbtn}
        alt="Back"
        className="back-btn"
        onClick={slideBackward}
      />
      <div className="slider">
        <ul ref={slider}>
          {matches.map((match, index) => (
            <li key={index}>
              <div className="slide">
                <Scorecard match={match} />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Fixtures;
