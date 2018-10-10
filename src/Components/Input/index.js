import React from 'react';
import PropTypes from 'prop-types';
import FadedLine from '../FadedLine';
import './Input.css';

const Input = (props) => {
  const {
    placeholder,
    name,
    value,
    handleChange,
  } = props;

  return (
    <div className="input">
      <FadedLine />
      <input value={value} onChange={(e) => { handleChange(e); } } type="text" name={name} placeholder={placeholder}/>
      <FadedLine />
    </div>
  );
};

Input.propTypes = {
  placeholder: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default Input;
