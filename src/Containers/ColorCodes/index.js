import React from 'react';
import PropTypes from 'prop-types';
import ColorCodesLayout from '../../Components/Layouts/ColorCodesLayout';
import ColorCode from '../../Components/ColorCode';

const ColorCodes = (props) => {
  const { isListView } = props;
  const render = [
    {
      text: '-5%',
      classNameCardView: 'minus-five-card',
      classNameListView: 'minus-five-list',
    },
    {
      text: '-3%',
      classNameCardView: 'minus-three-card',
      classNameListView: 'minus-three-list',

    },
    {
      text: '-1%',
      classNameCardView: 'minus-one-card',
      classNameListView: 'minus-one-list',
    },
    {
      text: '0%',
      classNameCardView: 'zero-card',
      classNameListView: 'zero-list',
    },
    {
      text: '1%',
      classNameCardView: 'plus-one-card',
      classNameListView: 'plus-one-list',
    },
    {
      text: '3%',
      classNameCardView: 'plus-three-card',
      classNameListView: 'plus-three-list',
    },
    {
      text: '5%',
      classNameCardView: 'plus-five-card',
      classNameListView: 'plus-five-list',
    },
  ];

  return <ColorCodesLayout
    render={() => <ul>
      {render.map(item => <ColorCode
        key={item.text}
        text={item.text}
        className={isListView ? item.classNameListView : item.classNameCardView}
        isListView={isListView}/>)}
    </ul>}/>;
};

ColorCodes.propTypes = {
  isListView: PropTypes.bool.isRequired,
};

export default ColorCodes;
