import React from 'react';
import PropTypes from 'prop-types';
import Card from '../../Containers/Card';
import './MainContent.css';

const MainContent = (props) => {
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

MainContent.propTypes = {
  manipulatedData: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  sortBy: PropTypes.shape({}),
};

MainContent.defaultProps = {
  sortBy: null,
};

export default MainContent;
