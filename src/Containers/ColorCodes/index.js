import React from 'react';
import ColorCodesLayout from '../../Components/Layouts/ColorCodesLayout';
import ColorCode from '../../Components/ColorCode';

const ColorCodes = () => {
  const render = [
    {
      text: '-5%',
      className: 'minus-five',
    },
    {
      text: '-3%',
      className: 'minus-three',
    },
    {
      text: '-1%',
      className: 'minus-one',
    },
    {
      text: '0%',
      className: 'zero',
    },
    {
      text: '1%',
      className: 'plus-one',
    },
    {
      text: '3%',
      className: 'plus-three',
    },
    {
      text: '5%',
      className: 'plus-five',
    },
  ];

  return <ColorCodesLayout
    render={() => <ul>
      {render.map(item => <ColorCode
        key={item.className}
        text={item.text}
        className={item.className} />)}
    </ul>}/>;
};

export default ColorCodes;
