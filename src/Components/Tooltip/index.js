import React from 'react';
import PropTypes from 'prop-types';
import { SizeMe } from 'react-sizeme';
import { left } from '../../handlers';

const Tooltip = (props) => {
  const tooltipGap = 100;
  const { hoveredObject, coordX, coordY } = props;

  const render = [
    {
      className: 'Tooltip__content',
      child: `${hoveredObject.symbol}`,
    },
    {
      className: 'Tooltip__content Tooltip__name',
      child: `${hoveredObject.name}`,
    },
    {
      className: 'Tooltip__content Tooltip__price',
      child: `$${hoveredObject.price_usd}`,
    },
    {
      className: 'Tooltip__content',
      child: `Rank: ${hoveredObject.rank}`,
    },
    {
      className: 'Tooltip__content',
      child: `1h change: ${hoveredObject.percent_change_1h}%`,
    },
    {
      className: 'Tooltip__content',
      child: `24h change: ${hoveredObject.percent_change_24h}%`,
    },
    {
      className: 'Tooltip__content',
      child: `7d change: ${hoveredObject.percent_change_7d}%`,
    },
  ];
  return (
    <SizeMe>
      {({ size }) => <div
        style={{ top: coordY, left: left(size.width, coordX, tooltipGap) }}
        className="Tooltip animate">
        {render.map(element => <p
          key={`${element.className}${element.child}`}
          className={element.className}>{element.child}</p>)}
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
