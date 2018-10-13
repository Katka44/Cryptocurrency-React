import React from 'react';
import PropTypes from 'prop-types';
import './ColorCodesLayout.scss';

const ColorCodesLayout = (props) => {
  const { render } = props;
  return <div className="colorCodesDiv">
    {render()}
  </div>;
};

ColorCodesLayout.propTypes = {
  render: PropTypes.func.isRequired,
};

export default ColorCodesLayout;
