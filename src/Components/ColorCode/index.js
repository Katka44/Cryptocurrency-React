import React from 'react';
import PropTypes from 'prop-types';

const ColorCode = (props) => {
  const { text, className } = props;
  return <li
    className={`Color-code ${className}`}
    title="Color indicates 24h price change.">{text}</li>;
};

ColorCode.propTypes = {
  text: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
};

export default ColorCode;
