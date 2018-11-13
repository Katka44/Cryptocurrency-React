import React from 'react';
import PropTypes from 'prop-types';

const Input = (props) => {
  const {
    placeholder,
    name,
    value,
    handleChange,
  } = props;

  return (
    <input
      className="Input"
      type="text"
      name={name}
      value={value}
      onChange={handleChange}
      placeholder={placeholder}/>
  );
};

Input.propTypes = {
  placeholder: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default Input;
