import React from 'react';
import PropTypes from 'prop-types';
import FadedLine from '../FadedLine';
import './Button.css';

const Button = (props) => {
  const {
    data,
    text,
    handleClick,
    category,
  } = props;

  return (
    <div className="button">
      <FadedLine />
      <button onClick={() => handleClick(data, category)} type="button">{text}</button>
      <FadedLine />
    </div>
  );
};

Button.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({})),
  text: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
  category: PropTypes.string.isRequired,
};

Button.defaultProps = {
  data: null,
};

export default Button;
