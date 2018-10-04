import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import CardContent from '../CardContent';
import InfoDiv from '../Tooltip';
import { getPerformanceClass, getSizeClass } from '../../handlers';
import './CardLayout.css';

const CardLayout = (props) => {
  const {
    data,
    coordX,
    coordY,
    hoveredObject,
    setHover,
    resetHover,
    handleHover,
  } = props;
  const { percent_change_24h, market_cap_usd } = data;

  return (
    <div
      className={classNames('card', getPerformanceClass(percent_change_24h), getSizeClass(market_cap_usd))}
      onMouseEnter={() => setHover(data)}
      onMouseMove={e => handleHover(e)}
      onMouseLeave={resetHover} >
    <CardContent data={data} />
    {Object.keys(hoveredObject).length > 0 && hoveredObject.constructor === Object
      ? <InfoDiv
          hoveredObject={hoveredObject}
          coordX={coordX}
          coordY={coordY} />
      : null}
    </div>
  );
};

CardLayout.propTypes = {
  data: PropTypes.shape({}).isRequired,
  setHover: PropTypes.func.isRequired,
  resetHover: PropTypes.func.isRequired,
  handleHover: PropTypes.func.isRequired,
  hoveredObject: PropTypes.shape({}).isRequired,
  coordX: PropTypes.number.isRequired,
  coordY: PropTypes.number.isRequired,
};

export default CardLayout;
