import React from "react";
import { ReactComponent as Logo } from "../assets/images/logo.svg";
import { ReactComponent as Facebook } from "../assets/icons/icon-facebook.svg";
import { ReactComponent as Twitter } from "../assets/icons/icon-twitter.svg";
import { ReactComponent as Pintrest } from "../assets/icons/icon-pinterest.svg";
import { ReactComponent as Instagram } from "../assets/icons/icon-instagram.svg";

const navLists = [
  {
    header: "features",
    links: ["URL Shortening", "Branded Links", "Analytics"],
  },
  {
    header: "resources",
    links: ["Blog", "Developers", "Support"],
  },
  {
    header: "company",
    links: ["About", "Our Team", "Careers", "Contact"],
  },
];

const mediaLinks = [Facebook, Twitter, Pintrest, Instagram];

function Footer() {
  function createNavLinks() {
    return navLists.map((list) => (
      <div key={list.header} className={`${list.header}-list flex flow`}>
        <p className="list-header">{list.header}</p>
        {list.links.map((link) => (
          <button key={link} className="btn-link">
            {link}
          </button>
        ))}
      </div>
    ));
  }
  return (
    <footer className="footer">
      <div className="container flow">
        <div className="logo">
          <Logo />
        </div>
        <nav className="secondary-nav flow">{createNavLinks()}</nav>
        <div className="social-media">
          {mediaLinks.map((Icon, index) => (
            <Icon key={index} />
          ))}
        </div>
        <div className="attribution">
          Challenge by{" "}
          <a
            rel="noreferrer"
            href="https://www.frontendmentor.io?ref=challenge"
            target="_blank"
          >
            Frontend Mentor
          </a>
          . Coded by <a href="https://www.github.com">Goran Tenic</a>.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
