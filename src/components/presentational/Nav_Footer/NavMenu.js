import React from 'react';
import NavMenuWrapper from '../../../styles/navMenu_footer/navMenu';
import { Link } from 'react-router-dom';
import logo from '../../../images/cs_logo.png';
const NavMenu = function() {
  return (
    <NavMenuWrapper>
      <Link to="/" className="nav-logo">
        <img src={logo} alt="code seoul logo" />
      </Link>
      <div className="nav-links">
        <Link to="/events">Events</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/login">Login</Link>
      </div>
    </NavMenuWrapper>
  );
};

export default NavMenu;
