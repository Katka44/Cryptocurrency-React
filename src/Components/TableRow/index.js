import React from 'react';
import PropTypes from 'prop-types';
import { getPerformanceClass, addListToString, addPlus } from '../../handlers';

const TableRow = (props) => {
  const {
    isHeader, rank, symbol, name, price, change1h, change24h, change7d,
  } = props;

  const performance = priceChange => addListToString(getPerformanceClass(priceChange));

  return <div className="TableRow">
    <p className="TableRow-content TableRow-rank">{rank}</p>
    <p className="TableRow-content">{symbol}</p>
    <p className="TableRow-content TableRow-name">{name}</p>
    <p className="TableRow-content">{price}</p>
    <p className={isHeader
      ? 'TableRow-content TableRow-change1h'
      : `TableRow-content TableRow-change1h ${performance(change1h)}`}>
      {isHeader ? change1h : `${addPlus(change1h)}%`}
    </p>
    <p className={isHeader
      ? 'TableRow-content'
      : `TableRow-content ${performance(change24h)}`}>
      {isHeader ? change24h : `${addPlus(change24h)}%`}
    </p>
    <p className={isHeader
      ? 'TableRow-content TableRow-change7d'
      : `TableRow-content TableRow-change7d ${performance(change7d)}`}>
      {isHeader ? change7d : `${addPlus(change7d)}%`}
    </p>
  </div>;
};

TableRow.propTypes = {
  isHeader: PropTypes.bool,
  rank: PropTypes.string.isRequired,
  symbol: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  change1h: PropTypes.string,
  change24h: PropTypes.string,
  change7d: PropTypes.string,
};

TableRow.defaultProps = {
  isHeader: false,
  change1h: null,
  change24h: null,
  change7d: null,
};

export default TableRow;
