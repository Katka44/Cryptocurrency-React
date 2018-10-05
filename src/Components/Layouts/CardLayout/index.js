import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import InfoDiv from '../../Tooltip';
import { getPerformanceClass, getSizeClass } from '../../../handlers';
import './CardLayout.css';

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
  const { percent_change_24h, market_cap_usd } = data;
  const size = getSizeClass(market_cap_usd);

  return (
    <div
      className={classNames('card', getPerformanceClass(percent_change_24h), size)}
      onMouseEnter={() => setHover(data)}
      onMouseMove={e => handleHover(e)}
      onMouseLeave={resetHover} >
      {render({
        data,
        size,
      })}
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
