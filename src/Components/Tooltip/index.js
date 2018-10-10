import React from 'react';
import PropTypes from 'prop-types';
import { SizeMe } from 'react-sizeme';
import { left } from '../../handlers';
import './Tooltip.css';

const Tooltip = (props) => {
  const tooltipGap = 100;
  const { hoveredObject, coordX, coordY } = props;
  return (
    <SizeMe>
      {({ size }) => <div
        style={{ top: coordY, left: left(size.width, coordX, tooltipGap) }}
        className="infoDiv animate" >
          <p>{hoveredObject.symbol}</p>
          <p className="infoName">{hoveredObject.name}</p>
          <p className="infoPrice">${hoveredObject.price_usd}</p>
          <p>Rank: {hoveredObject.rank}</p>
          <p>1h change: {hoveredObject.percent_change_1h}%</p>
          <p>24h change: {hoveredObject.percent_change_24h}%</p>
      </div>}
    </SizeMe>
  );
};

Tooltip.propTypes = {
  hoveredObject: PropTypes.shape({}),
  coordX: PropTypes.number,
  coordY: PropTypes.number,
};

Tooltip.defaultProps = {
  hoveredObject: null,
  coordX: null,
  coordY: null,
};

export default Tooltip;
