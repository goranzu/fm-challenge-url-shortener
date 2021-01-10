import React from "react";
import { ReactComponent as Logo } from "../assets/images/logo.svg";
import { ReactComponent as Menu } from "../assets/icons/menu.svg";

function Header() {
  return (
    <header className="header">
      <div className="container flex">
        <div className="logo">
          <Logo />
        </div>
        <nav hidden className="primary-nav">
          <div className="left">
            <ul role="list">
              <li>
                <a href="#fetures">Features</a>
              </li>
              <li>
                <a href="#pricing">Pricing</a>
              </li>
              <li>
                <a href="#resources">Resources</a>
              </li>
            </ul>
          </div>
          <div className="right">
            <ul role="list">
              <li>
                <button className="btn">Login</button>
              </li>
              <li>
                <button className="btn bg-green">Sign Up</button>
              </li>
            </ul>
          </div>
        </nav>
        <button className="btn">
          <span className="sr-only">Open mobile navigation</span>
          <Menu width="32px" height="32px" />
        </button>
      </div>
    </header>
  );
}

export default Header;
