import React from 'react';
import PropTypes from 'prop-types';
import Tooltip from '../../Tooltip';
import { getPerformanceClass, getSizeClass } from '../../../handlers';
import './CardLayout.scss';

const CardLayout = (props) => {
  const {
    render,
    data,
    coordX,
    coordY,
    hoveredObject,
    setHover,
    resetHover,
    handleHover,
  } = props;

  // eslint-disable-next-line camelcase
  const { percent_change_24h, market_cap_usd } = data;
  const size = getSizeClass(market_cap_usd);
  const performance = getPerformanceClass(percent_change_24h);

  return (
    <div
      className={`card ${performance} ${size}`}
      onMouseEnter={() => setHover(data)}
      onMouseMove={e => handleHover(e)}
      onMouseLeave={resetHover} >
      {render({
        data,
        size,
      })}
      {Object.keys(hoveredObject).length > 0 && hoveredObject.constructor === Object
        ? <Tooltip
            hoveredObject={hoveredObject}
            coordX={coordX}
            coordY={coordY} />
        : null}
    </div>
  );
};

CardLayout.propTypes = {
  render: PropTypes.func.isRequired,
  data: PropTypes.shape({}).isRequired,
  coordX: PropTypes.number.isRequired,
  coordY: PropTypes.number.isRequired,
  hoveredObject: PropTypes.shape({}).isRequired,
  setHover: PropTypes.func.isRequired,
  resetHover: PropTypes.func.isRequired,
  handleHover: PropTypes.func.isRequired,
};

export default CardLayout;
