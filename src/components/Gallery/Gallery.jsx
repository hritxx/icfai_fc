import React from "react";
import "./Gallery.css";
import g1 from "/Gallery/gal4.jpg";
import g2 from "/Gallery/gal1.jpg";
import g3 from "/Gallery/gal2.jpg";
import g4 from "/Gallery/gal3.jpg";

const Gallery = () => {
  return (
    <div className="club ">
      <div className="gallery paddings innerWidth flexCenter">
        <img src={g1} alt="" />
        <img src={g2} alt="" />
        <img src={g3} alt="" />
        <img src={g4} alt="" />
        <img src={g2} alt="" />
        <img src={g3} alt="" />
        <img src={g4} alt="" />
      </div>
      <button className="button dark-btn">
        <a href="https://www.facebook.com/icfaifc">Explore More</a>
      </button>
    </div>
  );
};

export default Gallery;
