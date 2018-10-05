import React from 'react';
import PropTypes from 'prop-types';
import ButtonsLayout from '../../Components/Layouts/ButtonsLayout';
import Button from '../../Components/Button';
import Input from '../../Components/Input';

const Buttons = (props) => {
  const {
    filter,
    handleTextChange,
    handleSort,
  } = props;

  return (
    <ButtonsLayout
      render={() => <React.Fragment>
        <Button text="Sort By Name" handleClick={handleSort} category="name"/>
        <Button text="Sort By Price" handleClick={handleSort} category="price_usd"/>
        <Button text="Sort By Rank" handleClick={handleSort} category="rank"/>
        <Button text="Sort By Performance" handleClick={handleSort} category="percent_change_24h"/>
        <Input
          placeholder="Filter by name or ticker"
          name="filter"
          value={filter}
          handleChange={handleTextChange}/>
      </React.Fragment>}
      handleSort={handleSort}
      filter={filter}
      handleTextChange={handleTextChange}/>
  );
};

Buttons.propTypes = {
  filter: PropTypes.string.isRequired,
  handleTextChange: PropTypes.func.isRequired,
  handleSort: PropTypes.func.isRequired,

};

export default Buttons;
