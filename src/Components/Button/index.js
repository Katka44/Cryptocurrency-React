import React from 'react';
import PropTypes from 'prop-types';

const Button = (props) => {
  const {
    data,
    text,
    handleClick,
    category,
  } = props;

  return (
    <button
      className="Button"
      onClick={() => handleClick(data, category)}
      type="button">{text}</button>
  );
};

Button.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({})),
  text: PropTypes.string,
  handleClick: PropTypes.func.isRequired,
  category: PropTypes.string,
};

Button.defaultProps = {
  data: null,
  text: null,
  category: null,
};

export default Button;
