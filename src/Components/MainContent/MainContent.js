import React from 'react';
import PropTypes from 'prop-types';
import Card from '../Card/Card';
import './MainContent.css';

const MainContent = (props) => {
  const { manipulatedData } = props;

  const tickers = manipulatedData.map(currency => <Card
    data={currency}
    key={currency.id}/>);

  return (
    <div>
      <ul className="tickers">{tickers}</ul>
    </div>
  );
};

MainContent.propTypes = {
  manipulatedData: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};

export default MainContent;
