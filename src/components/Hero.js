import React from "react";
import Illustration from "../assets/images/illustration-working.svg";

function Hero() {
  return (
    <section className="hero">
      <div className="container content flow">
        <div className="illustration">
          <img src={Illustration} alt="person working" />
        </div>
        <div className="container text-box flow">
          <h1>More than just shorter links</h1>
          <p>
            Build your brand’s recognition and get detailed insights on how your
            links are performing.
          </p>
          <button className="btn bg-green btn--pill">Get Started</button>
        </div>
      </div>
    </section>
  );
}

export default Hero;
