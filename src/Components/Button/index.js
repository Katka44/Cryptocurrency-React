import React from 'react';
import PropTypes from 'prop-types';
import './Button.css';

const Button = (props) => {
  const {
    text,
    handleClick,
    category,
  } = props;

  return (
    <button onClick={() => handleClick(category)} type="button">{text}</button>
  );
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
  category: PropTypes.string.isRequired,

};

export default Button;
