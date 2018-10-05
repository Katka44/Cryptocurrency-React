import React from 'react';
import ColorCodesLayout from '../../Components/Layouts/ColorCodesLayout';
import ColorCode from '../../Components/ColorCode';

const ColorCodes = () => (
  <ColorCodesLayout
    render={() => <ul title="Color indicates 24h price change.">
      <ColorCode text="-5%" className="minusFive" />
      <ColorCode text="-3%" className="minusThree" />
      <ColorCode text="-1%" className="minusOne" />
      <ColorCode text="0%" className="zero" />
      <ColorCode text="1%" className="plusOne" />
      <ColorCode text="3%" className="plusThree" />
      <ColorCode text="5%" className="plusFive" />
    </ul>}/>
);

export default ColorCodes;
