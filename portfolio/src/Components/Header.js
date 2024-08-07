import React, { useState } from "react";
import "./Header.css";
import { Link } from "react-router-dom";

function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <div className="header">
      <div className="header__name">
        <h1>Sarthak <span>Mahajan</span></h1>
      </div>

      <div className="header__nav-container">
        <div className="header__burger" onClick={toggleNav}>
          <div className={`bar ${isNavOpen ? "open" : ""}`}></div>
          <div className={`bar ${isNavOpen ? "open" : ""}`}></div>
          <div className={`bar ${isNavOpen ? "open" : ""}`}></div>
        </div>
        <div className={`header__nav ${isNavOpen ? "open" : ""}`}>
          <Link to="/"><h1>Home</h1></Link>
          <Link to='/about'><h1>About</h1></Link>
          <Link to='/education'><h1>Education</h1></Link>
          <h1>Skill</h1>
          <h1>Project</h1>
          <h1>Contact</h1>
        </div>
      </div>


    </div>
  );
}

export default Header;
