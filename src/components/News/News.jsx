import React from "react";
import "./News.css"; // Import the CSS for styling

const News = ({ news }) => {
  return (
    <div className="paddings innerWidth flexCenter news-container">
      {news.map((item, index) => (
        <div className="news-card" key={index}>
          <img src={item.image} alt={item.title} className="news-image" />
          <h2 className="news-title">{item.title}</h2>
          <p className="news-description">{item.description}</p>
        </div>
      ))}
    </div>
  );
};

export default News;
