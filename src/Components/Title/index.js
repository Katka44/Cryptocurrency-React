import React from 'react';
import PropTypes from 'prop-types';
import FadedLine from '../FadedLine';

const Title = (props) => {
  const { size, text } = props;
  const title = size === 'h1' ? <h1 className={`Title__${size}`}>{text}</h1> : <h2 className={`Title__${size}`}>{text}</h2>;

  return <div>
      {size === 'h1' || size === 'h2' ? title : <h3 className={`Title__${size}`}>{text}</h3> }
      {size === 'h1' ? <FadedLine size="L" /> : null}
    </div>;
};

Title.propTypes = {
  size: PropTypes.oneOf(['h1', 'h2', 'h3']).isRequired,
  text: PropTypes.string.isRequired,
};

export default Title;
