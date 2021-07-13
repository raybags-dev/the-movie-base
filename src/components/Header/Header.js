import React, { useState } from "react";

import "./Header.css";
import { Search, Notifications, ArrowDropDownCircle } from "@material-ui/icons";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  //   handle home page background top color change
  window.onscroll = () => {
    setIsScrolled(window.pageYOffset === 0 ? false : true);
    // cleanup function
    return () => (window.onscroll = null);
  };

  return (
    <div className={isScrolled ? "navbar scrolled" : "navbar"}>
      <div className="nav-container">
        <div className="nav-left">
          <img
            className="logo-img"
            src="https://github.com/raybags-web-dev/image_base/blob/master/images/logo1.png?raw=true"
            alt=""
          />
        </div>
        <div className="nav-right">
          <Search className="icon" />
          <span>KID</span>
          <Notifications className="icon" />
          <img
            className="profile-img"
            src="https://github.com/raybags-web-dev/image_base/blob/master/images/me3.jpg?raw=true"
            alt=""
          />

          <div className="profile">
            <ArrowDropDownCircle className="icon" />
            <div className="options">
              <span>settings</span>
              <span>logout</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;

// return (
//   <span onClick={() => window.scroll(0, 0)} className="header">
//     🎬 Entertainment Hub 🎥
//   </span>
// );
