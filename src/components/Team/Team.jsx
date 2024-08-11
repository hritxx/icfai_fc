import React from "react";
import { Link } from "react-router-dom";

import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "./Team.css";
import { sliderSettings } from "../../utils/common";

const Team = ({ data, role }) => {
  return (
    <div className="r-wrapper">
      <div className="paddings innerWidth r-container">
        <div className="flexColStart r-head">
          <span className="orangeText">Squad</span>
          <span className="primaryText">{role}</span>
        </div>
        <Swiper {...sliderSettings}>
          <SlideNextButton />
          {data.map((card, i) => (
            <SwiperSlide key={i}>
              <Link to={`/icfai_fc/playerProfile/${card.name}`}>
                <div className="flexColStart r-card">
                  <img src={card.image} alt="home" />
                  <span className="secondaryText r-price">
                    <span style={{ color: "orange" }}>⚽️ </span>
                    <span>{card.price}</span>
                  </span>
                  <span className="primaryText-2">{card.name}</span>
                  <span className="secondaryText">{card.detail}</span>
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Team;

const SlideNextButton = () => {
  const swiper = useSwiper();
  return (
    <div className="flexCenter r-buttons">
      <button onClick={() => swiper.slidePrev()} className="r-prevButton">
        &lt;
      </button>
      <button onClick={() => swiper.slideNext()} className="r-nextButton">
        &gt;
      </button>
    </div>
  );
};
