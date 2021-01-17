import React from "react";
import PropTypes from "prop-types";

function MobileNav({ hide }) {
  return (
    <div className="container bg-white">
      <nav className={`mobile-nav ${hide && "hidden"}`}>
        <ul role="list" className="flow">
          <li>
            <a href="#features">Features</a>
          </li>
          <li>
            <a href="#pricing">Pricing</a>
          </li>
          <li>
            <a href="#resources">Resources</a>
          </li>
          <li className="accent">
            <button className="btn">Login</button>
          </li>
          <li>
            <button className="btn bg-green btn--pill">Sign Up</button>
          </li>
        </ul>
      </nav>
    </div>
  );
}

MobileNav.propTypes = {
  hide: PropTypes.bool.isRequired,
};

export default MobileNav;
