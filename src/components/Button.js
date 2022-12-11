import React from "react";
import PropTypes from "prop-types";

const Button = ({ text, color, onSet }) => {
  return (
    <button
      className="btn"
      style={{ backgroundColor: color }}
      onClick={() => onSet()}
    >
      {text}
    </button>
  );
};

Button.propTypes = {
  text: PropTypes.string,
};

export default Button;
