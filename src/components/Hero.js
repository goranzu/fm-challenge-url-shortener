import React from "react";
import { ReactComponent as Illustration } from "../assets/images/illustration-working.svg";
import UrlBar from "./UrlBar";

function Hero() {
  return (
    <section className="hero">
      <div className="container">
        <div className="text-box flow">
          <h1>More than just shorter links</h1>
          <p>
            Build your brand’s recognition and get detailed insights on how your
            links are performing.
          </p>
          <button className="btn bg-green">Get Started</button>
        </div>
        <div className="illustration">
          <Illustration />
        </div>
        <UrlBar />
      </div>
    </section>
  );
}

export default Hero;
