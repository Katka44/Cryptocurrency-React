import React from 'react';
import PropTypes from 'prop-types';
import { addPlus } from '../../handlers';
import './CardContent.css';

const CardContent = (props) => {
  const { data } = props;
  const { symbol, percent_change_24h } = data;
  return (
    <li>
      <p className="info">{symbol} {addPlus(percent_change_24h)}%</p>
    </li>
  );
};

CardContent.propTypes = {
  data: PropTypes.shape({}).isRequired,
};

export default CardContent;
