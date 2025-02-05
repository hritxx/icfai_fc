import React, { useState, useEffect } from "react";
import "./Header.css";
import { BiMenuAltRight } from "react-icons/bi";
import { getMenuStyles } from "../../utils/common";

import OutsideClickHandler from "react-outside-click-handler";

const Header = () => {
  const [menuOpened, setMenuOpened] = useState(false);

  // Ensure the menu is closed when the component mounts or screen size changes
  useEffect(() => {
    const handleResize = () => {
      setMenuOpened(false);
    };

    window.addEventListener("resize", handleResize);

    // Close the menu on mount
    setMenuOpened(false);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <section className="h-wrapper">
      <div className="flexCenter h-container inner-container2">
        {/* logo */}

        <img src="logo2.png" alt="logo" width={100} />

        {/* menu */}
        <OutsideClickHandler
          onOutsideClick={() => {
            setMenuOpened(false);
          }}
        >
          <div className="flexCenter h-menu" style={getMenuStyles(menuOpened)}>
            <a href="#about-us">About Us</a>
            <a href="#team">Team</a>
            <a href="#fixtures">Fixtures</a>
            <a href="#sponsers">Sponsers</a>
            <a href="#recent-news">Recent News</a>
            <a href="#gallery">Gallery</a>
            <a href="#contact-us">Contact Us</a>

            <button className="button">
              <a href="mailto:admissions@iutripura.edu.in">Connect</a>
            </button>
          </div>
        </OutsideClickHandler>

        {/* for medium and small screens */}
        <div
          className="menu-icon"
          onClick={() => setMenuOpened((prev) => !prev)}
        >
          <BiMenuAltRight size={30} />
        </div>
      </div>
    </section>
  );
};

export default Header;
