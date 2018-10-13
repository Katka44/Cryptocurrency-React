import React from 'react';
import PropTypes from 'prop-types';
import { addPlus } from '../../handlers';
import './CardContent.css';

const CardContent = (props) => {
  const { data, size } = props;

  // eslint-disable-next-line camelcase
  const { symbol, percent_change_24h } = data;
  return (
    <li>
      {size !== ' sizeZero' ? <p className="info">{symbol} {addPlus(percent_change_24h)}%</p> : null}
    </li>
  );
};

CardContent.propTypes = {
  data: PropTypes.shape({}).isRequired,
  size: PropTypes.string.isRequired,
};

export default CardContent;
