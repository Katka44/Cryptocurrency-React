import React from 'react';
import PropTypes from 'prop-types';
import { addPlus } from '../../handlers';

const CardContent = (props) => {
  const { data, size } = props;

  // eslint-disable-next-line camelcase
  const { symbol, percent_change_24h } = data;
  return (
    <li>
      {size !== 'size-zero'
        ? <p className={`Card-content Card-content--${size}`}>{symbol} {addPlus(percent_change_24h)}%</p>
        : null}
    </li>
  );
};

CardContent.propTypes = {
  data: PropTypes.shape({}).isRequired,
  size: PropTypes.string.isRequired,
};

export default CardContent;
