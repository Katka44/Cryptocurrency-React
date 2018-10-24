import React from 'react';
import PropTypes from 'prop-types';

const ColorCodesLayout = (props) => {
  const { render } = props;
  return <div className="ColorCodesLayout">
    {render()}
  </div>;
};

ColorCodesLayout.propTypes = {
  render: PropTypes.func.isRequired,
};

export default ColorCodesLayout;
