import React from 'react';
import PropTypes from 'prop-types';

const ColorCode = (props) => {
  const { text, className, isListView } = props;
  return <li
    className={`Color-code ${className}`}
    title={isListView ? 'Color indicates price change.' : 'Color indicates 24h price change.'}>{text}</li>;
};

ColorCode.propTypes = {
  text: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
  isListView: PropTypes.bool.isRequired,
};

export default ColorCode;
