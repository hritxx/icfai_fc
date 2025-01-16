import React from "react";
import "./About.css";
import about_img from "/hero-image2.png";
import play_icon from "/play-icon.png";
import Title from "../Title/Title";

const About = ({ setPlayState }) => {
  return (
    <>
      <div className="about" id="about">
        <div className="about-left">
          <img src={about_img} alt="" className="about-img" />
          <img
            src={play_icon}
            alt=""
            className="play-icon"
            onClick={() => {
              setPlayState(true);
            }}
          />
        </div>
        <div className="about-right">
          <h3>About Club</h3>
          <h2>Nurturing Tomorrow's Future </h2>
          <p>
            In this work, a new algorithm is presented based on scale invariant
            feature transform adapted to the RGB color space. First, a top down
            search process is performed by comparing the ratio of matched
            key-points extracted via SIFT for every R, G and B channels of two
            video frames separated by a temporal sampling period N. Then, an
            algorithm is used to detect the shot boundaries. Finally, the moving
            average of frames in the boundaries is calculated to determine the
            type of the transition by using a threshold. Our method is applied
            to different types of video and shows satisfactory performance in
            detecting abrupt changes and gradual transitions, but it can be
            improved by using weighting coefficients to calculate the ratioRGB
            from the three ratios(R,G and B), depending on the type of the
            video. In the future works,we aim to include performance
            improvements and minimizing the computational cost without
            decreasing the accuracy.
          </p>
          <p>
            The low recall rate in sports video is may be due to the short shots
            that are missed between the sampled frames. In contrast, the
            precision rates in this kind of videos are more than 90%. It shows
            that the method is effective in detecting abrupt and gradual
            transitions.On the other side, in general, recall rates are low.
            This reveals that some frames belonging to different shots were
            regarded as similar. As a result, several shot boundaries are
            missed.
          </p>
          <p>
            To ensure that the background image fits the entirety of the
            section, even if stretched, you can use the background-size: cover;
            property in your CSS. This property scales the background image so
            that it covers the entire area of the section.
          </p>
        </div>
      </div>
    </>
  );
};

export default About;
