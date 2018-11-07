import React from 'react';
import PropTypes from 'prop-types';
import Card from '../../Containers/Card';
import TableRow from '../TableRow';
import { addPlus } from '../../handlers';

const Tickers = (props) => {
  const renderCards = (data) => {
    const render = data.map(currency => <Card
      data={currency}
      key={currency.id}/>);
    return render;
  };

  const renderTable = (data) => {
    const render = <div className="Tickers-table">
      <TableRow
        isHeader
        rank="Rank"
        symbol="Symbol"
        name="Name"
        price="Price"
        change1h="1hr change"
        change24h="24hr change"/>
      {data.map(currency => <TableRow
        rank={currency.rank}
        symbol={currency.symbol}
        name={currency.name}
        price={`$${currency.price_usd}`}
        change1h={currency.percent_change_1h}
        change24h={currency.percent_change_24h}/>)}
    </div>;
    return render;
  };

  const { manipulatedData, sortBy, isListView } = props;
  return (
    <div>
      {isListView
        ? renderTable(manipulatedData)
        : <ul className={sortBy ? 'Tickers-grid Tickers-grid--sorted' : 'Tickers-grid'}>{renderCards(manipulatedData)}</ul>}
    </div>
  );
};

Tickers.propTypes = {
  manipulatedData: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  sortBy: PropTypes.shape({}),
  isListView: PropTypes.bool.isRequired,
};

Tickers.defaultProps = {
  sortBy: null,
};

export default Tickers;
