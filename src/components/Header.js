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
        <nav className="primary-nav flex">
          <div className="left">
            <ul role="list" className="flex">
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
            <ul role="list" className="flex">
              <li>
                <button className="btn btn--transparent">Login</button>
              </li>
              <li>
                <button className="btn bg-green btn--pill">Sign Up</button>
              </li>
            </ul>
          </div>
        </nav>
        <button className="btn open-nav">
          <span className="sr-only">Open mobile navigation</span>
          <Menu width="32px" height="32px" />
        </button>
      </div>
    </header>
  );
}

export default Header;
