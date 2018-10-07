import React from 'react';
import PropTypes from 'prop-types';
import FadedLine from '../FadedLine';
import './Button.css';

const Button = (props) => {
  const {
    text,
    handleClick,
    category,
  } = props;

  return (
    <div className="button">
      <FadedLine />
      <button onClick={() => handleClick(category)} type="button">{text}</button>
      <FadedLine />
    </div>
  );
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
  category: PropTypes.string.isRequired,

};

export default Button;
