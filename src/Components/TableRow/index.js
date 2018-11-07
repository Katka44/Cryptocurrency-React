import React from 'react';
import PropTypes from 'prop-types';
import { getPerformanceClass, addListToString, addPlus } from '../../handlers';

const TableRow = (props) => {
  const {
    isHeader, rank, symbol, name, price, change1h, change24h,
  } = props;

  const performance = priceChange => addListToString(getPerformanceClass(priceChange));

  return <div className="TableRow">
    <p>{rank}</p>
    <p>{symbol}</p>
    <p>{name}</p>
    <p>{price}</p>
    <p className={isHeader ? '' : performance(change1h)}>{isHeader ? change1h : `${addPlus(change1h)}%`}</p>
    <p className={isHeader ? '' : performance(change24h)}>{isHeader ? change24h : `${addPlus(change24h)}%`}</p>
  </div>;
};

TableRow.propTypes = {
  isHeader: PropTypes.bool,
  rank: PropTypes.string.isRequired,
  symbol: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  change1h: PropTypes.string.isRequired,
  change24h: PropTypes.string.isRequired,
};

TableRow.defaultProps = {
  isHeader: false,
};

export default TableRow;
