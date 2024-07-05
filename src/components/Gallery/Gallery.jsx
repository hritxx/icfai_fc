import React from "react";
import "./Gallery.css";
import g1 from "/g1.png";
import g2 from "/g1.png";

const Gallery = () => {
  return (
    <div className="club">
      <div className="gallery">
        <img src={g1} alt="" />
        <img src={g2} alt="" />
        <img src={g1} alt="" />
        <img src={g2} alt="" />
      </div>
      <button className="button dark-btn">See More Here</button>
    </div>
  );
};

export default Gallery;
