import React, { useState } from "react";
import { AiFillFacebook, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import menuItems from "../data/menuItems";
import Logo from "../logo.svg";
import "./Navbar.css";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [navLinks, setNavLinks] = useState(menuItems);
  const [toggle, setToggle] = useState(false);

  const toggler = () => {
    setToggle(prev => !prev);
  }

  const usePathname = () => {
    const location = useLocation();
    return location.pathname;
  }

  const currentLocation = usePathname();

  return (
    <header>
      <div className="container">
        <nav className="nav flex">
          <img className="nav-logo" src={Logo} alt="Schnitze" />

          <ul className={`nav-links ${toggle ? "active" : ""}`}>
            {
              navLinks.map(navLink => <Link
                key={navLink.id}
                to={navLink.path}
              >
                <li
                  className={`nav-link ${(navLink.path === currentLocation) ? "active" : ""}`}
                  onClick={toggler}
                >
                  {navLink.location}
                </li>
              </Link>
              )
            }
          </ul>

          <div className="nav-social">
            <AiFillFacebook />
            <AiFillInstagram />
            <AiFillLinkedin />
          </div>

          <div className="nav-toggle" onClick={toggler}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;