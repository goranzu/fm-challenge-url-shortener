import React from "react";
import StatCard from "./StatCard";
import { ReactComponent as BrandSVG } from "../assets/icons/icon-brand-recognition.svg";
import { ReactComponent as DetailSVG } from "../assets/icons/icon-detailed-records.svg";
import { ReactComponent as CustomSVG } from "../assets/icons/icon-fully-customizable.svg";

const cards = [
  {
    Icon: BrandSVG,
    heading: "Brand Recognition",
    text:
      "Boost your brand recognition with each click. Generic links don’t mean a thing. Branded links help instil confidence in your content.",
  },
  {
    Icon: DetailSVG,
    heading: "Brand Recognition",
    text:
      "Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.",
  },
  {
    Icon: CustomSVG,
    heading: "Fully Customizable",
    text:
      "Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.",
  },
];

function Statistics() {
  return (
    <section className="statistics">
      <div className="container flow">
        <h2>Advanced Statistics</h2>
        <p>
          {" "}
          Track how your links are performing across the web with our advanced
          statistics dashboard.
        </p>
        <div className="cards">
          {cards.map((card) => (
            <StatCard
              key={card.heading}
              Icon={card.Icon}
              heading={card.heading}
              text={card.text}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Statistics;
