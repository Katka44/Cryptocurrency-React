import React from 'react';
import PropTypes from 'prop-types';
import './ColorCode.scss';

const ColorCode = (props) => {
  const { text, className } = props;
  return <li
    className={className}
    title="Color indicates 24h price change.">{text}</li>;
};

ColorCode.propTypes = {
  text: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
};

export default ColorCode;
