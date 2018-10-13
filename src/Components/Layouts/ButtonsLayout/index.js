import React from 'react';
import PropTypes from 'prop-types';
import './ButtonsLayout.css';

const ButtonsLayout = (props) => {
  const { render } = props;

  return (
    <div className="buttonsDiv">
      {render({})}
    </div>
  );
};

ButtonsLayout.propTypes = {
  render: PropTypes.func.isRequired,
};

export default ButtonsLayout;
