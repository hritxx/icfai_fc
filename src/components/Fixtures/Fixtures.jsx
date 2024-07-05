import React, { useRef } from "react";
import "./Fixtures.css";
import nextbtn from "/next-btn.png";
import backbtn from "/back-btn.png";
import logo2 from "/logo.png";

const Fixtures = () => {
  const slider = useRef();
  let tx = 0;

  const slideForward = () => {
    if (tx > -50) {
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
    <div className="fixtures">
      <img src={nextbtn} alt="" className="next-btn" onClick={slideForward} />
      <img src={backbtn} alt="" className="back-btn" onClick={slideBackward} />

      <div className="slider">
        <ul ref={slider}>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={logo2} alt="" />
                <div>
                  <h3>Rahul Roy</h3>
                  <span>Teliamura</span>
                </div>
              </div>
              <p>
                The low recall rate in sports video is may be due to the short
                shots that are missed between the sampled frames. In contrast,
                the precision rates in this kind of videos are more than 90%.
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={logo2} alt="" />
                <div>
                  <h3>Dibakar Roy</h3>
                  <span>Kalyanpur</span>
                </div>
              </div>
              <p>
                The low recall rate in sports video is may be due to the short
                shots that are missed between the sampled frames. In contrast,
                the precision rates in this kind of videos are more than 90%.
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={logo2} alt="" />
                <div>
                  <h3></h3>
                  <span></span>
                </div>
              </div>
              <p>
                The low recall rate in sports video is may be due to the short
                shots that are missed between the sampled frames. In contrast,
                the precision rates in this kind of videos are more than 90%.
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={logo2} alt="" />
                <div>
                  <h3></h3>
                  <span></span>
                </div>
              </div>
              <p>
                The low recall rate in sports video is may be due to the short
                shots that are missed between the sampled frames. In contrast,
                the precision rates in this kind of videos are more than 90%.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Fixtures;
