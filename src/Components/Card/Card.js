import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import InfoDiv from '../InfoDiv/InfoDiv';
import { addPlus, getPerformanceClass, getSizeClass } from '../../handlers';
import './Card.css';

class Card extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hoveredObject: {},
      coordX: 0,
      coordY: 0,
    };
  }

  updateCoords = (newX, newY) => {
    this.setState({ coordX: newX, coordY: newY }, () => {
    });
  }

  setHover = (object) => {
    this.setState({ hoveredObject: object });
  }

  resetHover = () => {
    this.setState({ hoveredObject: {} });
  }

  handleHover = (e) => {
    this.updateCoords(e.pageX, e.pageY);
  }

  render() {
    const { data } = this.props;
    const { symbol, percent_change_24h, market_cap_usd } = data;
    const { hoveredObject, coordX, coordY } = this.state;

    return (
      <div
        className={classNames('card', getPerformanceClass(percent_change_24h), getSizeClass(market_cap_usd))}
        onMouseEnter={() => this.setHover(data)}
        onMouseMove={e => this.handleHover(e)}
        onMouseLeave={this.resetHover} >
      <li>
        <p className="info">{symbol} {addPlus(percent_change_24h)}%</p>
      </li>

      {Object.keys(hoveredObject).length > 0 && hoveredObject.constructor === Object
        ? <InfoDiv
            hoveredObject={hoveredObject}
            coordX={coordX}
            coordY={coordY} />
        : <p /> }
      </div>
    );
  }
}

Card.propTypes = {
  data: PropTypes.shape({}).isRequired,
};

export default Card;
