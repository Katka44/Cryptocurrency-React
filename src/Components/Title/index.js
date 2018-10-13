import React from 'react';
import PropTypes from 'prop-types';
import FadedLine from '../FadedLine';
import './Title.scss';

const Title = (props) => {
  const { size, text } = props;
  const title = size === 'h1' ? <h1>{text}</h1> : size === 'h2';

  return <div>
      {size === 'h1' || size === 'h2' ? title : <h3>{text}</h3> }
      {size === 'h1' ? <FadedLine size="L" /> : null}
    </div>;
};

Title.propTypes = {
  size: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default Title;
