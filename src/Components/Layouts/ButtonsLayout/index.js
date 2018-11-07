import React from 'react';
import PropTypes from 'prop-types';

const ButtonsLayout = (props) => {
  const { render } = props;

  return (
    <div className="ButtonsLayout">
      {render()}
    </div>
  );
};

ButtonsLayout.propTypes = {
  render: PropTypes.func.isRequired,
};

export default ButtonsLayout;
