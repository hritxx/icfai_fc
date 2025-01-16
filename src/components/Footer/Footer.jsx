import React from "react";
import "./Footer.css";
import twitterLogo from "/icons/x.jpg";
import instaLogo from "/icons/insta.png";
import fbLogo from "/icons/i3.png";

const Footer = () => {
  return (
    <div className="f-wrapper">
      <div className="paddings f-container flexCenter inner-container2">
        {/* left side */}
        <div className="flexColStart f-left">
          <img src="/logo.png" alt="" width={120} />
          {/* <span className="secondaryText">
            Our vision is to make all people <br />
            the best place to live for them.
          </span> */}
        </div>

        <div className="flexColStart f-right">
          <span className="primaryText">Campus Address</span>
          <span className="secondaryText">
            ICFAI University, Tripura Kamalghat, Mohanpur, West Tripura -
            799210, India.
          </span>
          <div className="flexCenter f-menu">
            <a
              href="https://www.facebook.com/icfaifc"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={fbLogo} alt="Facebook" className="social-icon" />
            </a>
            <a
              href="https://www.instagram.com/icfai.fc/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={instaLogo} alt="Instagram" className="social-icon" />
            </a>
            <a
              href="https://www.twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={twitterLogo} alt="Twitter" className="social-icon" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
