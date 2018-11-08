import React from 'react';
import PropTypes from 'prop-types';

const Icon = (props) => {
  const {
    className,
    title,
    onClick,
  } = props;

  return (
    <i
      className={className}
      title={title}
      onClick={onClick}/>
  );
};

Icon.propTypes = {
  className: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Icon;
