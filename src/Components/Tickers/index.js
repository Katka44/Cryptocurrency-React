import React from 'react';
import PropTypes from 'prop-types';
import Card from '../../Containers/Card';
import './Tickers.css';

const Tickers = (props) => {
  const { manipulatedData, sortBy } = props;

  const tickers = manipulatedData.map(currency => <Card
    data={currency}
    key={currency.id}/>);

  
  return (
    <div>
      <ul className={sortBy ? 'sorted tickers' : 'tickers'}>{tickers}</ul>
    </div>
  );
};

Tickers.propTypes = {
  manipulatedData: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  sortBy: PropTypes.shape({}),
};

Tickers.defaultProps = {
  sortBy: null,
};

export default Tickers;
