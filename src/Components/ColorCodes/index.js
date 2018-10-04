import React from 'react';
import './ColorCodes.css';

const ColorCodesDiv = () => (
  <div id="colorCodesDiv">
    <ul title="Color indicates 24h stock price change.">
      <li className="minusFive">-5%</li>
      <li className="minusThree">-3%</li>
      <li className="minusOne">-1%</li>
      <li className="zero">0%</li>
      <li className="plusOne">1%</li>
      <li className="plusThree">3%</li>
      <li className="plusFive">5%</li>
    </ul>
  </div>
);

export default ColorCodesDiv;
