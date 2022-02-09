import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import "./Navbar.css";

// - Import des icons:
import { GiHamburgerMenu } from "react-icons/gi";

function Navbar() {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [toggleMenu, setToggleMenu] = useState(false);

  const toggleNav = () => {
    setToggleMenu(!toggleMenu);
  };

  useEffect(() => {
    const changeWidth = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", changeWidth);

    return () => {
      window.removeEventListener("resize", changeWidth);
    };
  }, []);

  return (
    <div className="navbar">
      <div className="title">
        <div className="title-title">
          <div className="brand-title">CodeX</div>
        </div>
        <GiHamburgerMenu className="toggle-burger" onClick={toggleNav} />
      </div>
      {(toggleMenu || screenWidth > 600) && (
        <nav className="navbar-links">
          <ul>
            <li>
              <Link id="home" className="item" to="/Home" onClick={toggleNav}>
                Home
              </Link>
            </li>
            <li>
              <Link
                id="projet"
                className="item"
                to="/Projet"
                onClick={toggleNav}
              >
                Projet
              </Link>
            </li>
            <li>
              <Link
                id="contact"
                className="item"
                to="/Contact"
                onClick={toggleNav}
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </div>
  );
}

export default Navbar;
