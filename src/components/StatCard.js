import React from "react";
import PropTypes from "prop-types";

function StatCard({ Icon, heading, text }) {
  return (
    <article className="statcard flow">
      <Icon />
      <h2>{heading}</h2>
      <p>{text}</p>
    </article>
  );
}

StatCard.propTypes = {
  Icon: PropTypes.node.isRequired,
  heading: PropTypes.string.isRequired,
  text: PropTypes.string.isRequireds,
};

export default StatCard;
