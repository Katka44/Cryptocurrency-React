import React from 'react';
import ColorCodesLayout from '../../Components/Layouts/ColorCodesLayout';
import ColorCode from '../../Components/ColorCode';

const ColorCodes = () => {
  const content = [
    {
      text: '-5%',
      className: 'minusFive',
    },
    {
      text: '-3%',
      className: 'minusThree',
    },
    {
      text: '-1%',
      className: 'minusOne',
    },
    {
      text: '0%',
      className: 'zero',
    },
    {
      text: '1%',
      className: 'plusOne',
    },
    {
      text: '3%',
      className: 'plusThree',
    },
    {
      text: '5%',
      className: 'plusFive',
    },
  ];

  return <ColorCodesLayout
    render={() => <ul>
      {
        content.map(item => <ColorCode
          key={item.className}
          text={item.text}
          className={item.className} />)
      }
    </ul>}/>;
};

export default ColorCodes;
