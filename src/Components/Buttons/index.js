import React from 'react';
import PropTypes from 'prop-types';
import './Buttons.css';

const ButtonsDiv = (props) => {
  const {
    filter,
    handleTextChange,
    handleSort,
  } = props;

  return (
        <div className="buttonsDiv">
            <button onClick={() => handleSort('name')} type="button">Sort By Name</button>
            <button onClick={() => handleSort('price_usd')} type="button">Sort By Price</button>
            <button onClick={() => handleSort('rank')} type="button">Sort By Rank</button>
            <button onClick={() => handleSort('percent_change_24h')} type="button">Sort By Performance</button>
            <input value={filter} onChange={(e) => { handleTextChange(e); } } type="text" name="filter" placeholder="Filter by name or ticker"/>
        </div>
  );
};

ButtonsDiv.propTypes = {
  filter: PropTypes.string.isRequired,
  handleTextChange: PropTypes.func.isRequired,
  handleSort: PropTypes.func.isRequired,

};

export default ButtonsDiv;
