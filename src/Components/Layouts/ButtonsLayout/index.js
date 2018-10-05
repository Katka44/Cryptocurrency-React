import React from 'react';
import PropTypes from 'prop-types';
import './ButtonsLayout.css';

const ButtonsLayout = (props) => {
  const {
    render,
    handleSort,
    filter,
    handleTextChange,
  } = props;

  return (
    <div className="buttonsDiv">
      {render({
        handleSort,
        filter,
        handleTextChange,
      })}
  </div>
  );
};

ButtonsLayout.propTypes = {
  render: PropTypes.func.isRequired,
  handleSort: PropTypes.func.isRequired,
  filter: PropTypes.string.isRequired,
  handleTextChange: PropTypes.func.isRequired,
};

export default ButtonsLayout;
