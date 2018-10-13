import React from 'react';
import PropTypes from 'prop-types';
import ButtonsLayout from '../../Components/Layouts/ButtonsLayout';
import FadedLinesLayout from '../../Components/Layouts/FadedLinesLayout';
import Button from '../../Components/Button';
import Input from '../../Components/Input';

const Buttons = (props) => {
  const {
    data,
    filter,
    handleTextChange,
    handleSort,
  } = props;

  const content = [
    {
      text: 'Sort By Name',
      category: 'name',
    },
    {
      text: 'Sort By Price',
      category: 'price_usd',
    },
    {
      text: 'Sort By Rank',
      category: 'rank',
    },
    {
      text: 'Sort By Performance',
      category: 'percent_change_24h',
    },
  ];

  return (
    <ButtonsLayout
      render={() => <React.Fragment>
        {content.map(item => <FadedLinesLayout
          key={item.category}
          render={() => <Button
            data={data}
            text={item.text}
            handleClick={handleSort}
            category={item.category}/>}
          />)}
        <FadedLinesLayout
          render={() => <Input
            placeholder="Filter by name or ticker"
            name="filter"
            value={filter}
            handleChange={handleTextChange}/>}
          />
      </React.Fragment>}/>
  );
};

Buttons.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({})),
  filter: PropTypes.string.isRequired,
  handleTextChange: PropTypes.func.isRequired,
  handleSort: PropTypes.func.isRequired,
};

Buttons.defaultProps = {
  data: null,
};

export default Buttons;
