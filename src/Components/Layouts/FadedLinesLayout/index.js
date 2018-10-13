import React from 'react';
import PropTypes from 'prop-types';
import FadedLine from '../../FadedLine';

const FadedLinesLayout = (props) => {

  const { render } = props;
  return (
    <div className="FadedLinesLayout">
      <FadedLine />
      {render({})}
      <FadedLine />
    </div>
  );
};

FadedLinesLayout.propTypes = {
  render: PropTypes.func.isRequired,
};

export default FadedLinesLayout;
