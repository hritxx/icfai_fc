import React from "react";
import { Carousel } from "react-bootstrap";
import { fixtures } from "../../utils/fixtures";

const FixtureSlider = () => {
  return (
    <Carousel>
      {fixtures.map((fixture, index) => (
        <Carousel.Item key={index}>
          <div className="scorecard">
            <div className="teams">
              <img src={fixture.homeTeam.logo} alt={fixture.homeTeam.name} />
              <span>{fixture.homeTeam.name}</span>
              <span>vs</span>
              <span>{fixture.awayTeam.name}</span>
              <img src={fixture.awayTeam.logo} alt={fixture.awayTeam.name} />
            </div>
            <div className="score">{fixture.score}</div>
            <div className="venue">{fixture.venue}</div>
          </div>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default FixtureSlider;
