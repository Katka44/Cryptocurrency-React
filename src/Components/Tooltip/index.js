import React from 'react';
import PropTypes from 'prop-types';
import { SizeMe } from 'react-sizeme';
import { left } from '../../handlers';

const Tooltip = (props) => {
  const tooltipGap = 100;
  const { hoveredObject, coordX, coordY } = props;
  return (
    <SizeMe>
      {({ size }) => <div
        style={{ top: coordY, left: left(size.width, coordX, tooltipGap) }}
        className="Tooltip animate">
        <p className="Tooltip__content">{hoveredObject.symbol}</p>
        <p className="Tooltip__content Tooltip__name">{hoveredObject.name}</p>
        <p className="Tooltip__content Tooltip__price">${hoveredObject.price_usd}</p>
        <p className="Tooltip__content">Rank: {hoveredObject.rank}</p>
        <p className="Tooltip__content">1h change: {hoveredObject.percent_change_1h}%</p>
        <p className="Tooltip__content">24h change: {hoveredObject.percent_change_24h}%</p>
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
