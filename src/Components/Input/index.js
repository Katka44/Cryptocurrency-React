import React from 'react';
import PropTypes from 'prop-types';
import './Input.scss';

const Input = (props) => {
  const {
    placeholder,
    name,
    value,
    handleChange,
  } = props;

  return (
    <input value={value} onChange={(e) => { handleChange(e); } } type="text" name={name} placeholder={placeholder}/>
  );
};

Input.propTypes = {
  placeholder: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default Input;
