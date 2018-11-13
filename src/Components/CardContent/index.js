import React from 'react';
import PropTypes from 'prop-types';
import { addPlus } from '../../handlers';

const CardContent = (props) => {
  const { data, size } = props;

  // eslint-disable-next-line camelcase
  const { symbol, percent_change_24h } = data;

  const sizesWithText = () => ['size-hundred-billion', 'size-ten-billion', 'size-billion', 'size-hundred-million', 'size-ten-million'];

  return (
    <li>
      {sizesWithText().includes(size)
        ? <p
            className={`Card-content Card-content--${size}`}>
            {symbol} {addPlus(percent_change_24h)}%
          </p>
        : null}
    </li>
  );
};

CardContent.propTypes = {
  data: PropTypes.shape({}).isRequired,
  size: PropTypes.string.isRequired,
};

export default CardContent;
