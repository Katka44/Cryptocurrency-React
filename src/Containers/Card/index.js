import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CardLayout from '../../Components/Layouts/CardLayout';
import CardContent from '../../Components/CardContent';

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
    this.setState({ coordX: newX, coordY: newY });
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
    const { hoveredObject, coordX, coordY } = this.state;

    return (
      <CardLayout
        render={props => <CardContent {...props} />}
        data={data}
        hoveredObject={hoveredObject}
        coordX={coordX}
        coordY={coordY}
        setHover={this.setHover}
        resetHover={this.resetHover}
        handleHover={this.handleHover}/>
    );
  }
}

Card.propTypes = {
  data: PropTypes.shape({}).isRequired,
};

export default Card;
