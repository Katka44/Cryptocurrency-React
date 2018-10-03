import React, { Component } from 'react';
import axios from 'axios';
import Title from '../../Components/Title/Title';
import ButtonsDiv from '../../Components/ButtonsDiv/ButtonsDiv';
import MessageDiv from '../../Components/MessageDiv/MessageDiv';
import ColorCodesDiv from '../../Components/ColorCodesDiv/ColorCodesDiv';
import MainContent from '../../Components/MainContent/MainContent';
import {
  handleFilterFunc, sortName, sortValue, displayCategory,
} from '../../handlers';

class Tickers extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      manipulatedData: [],
      filter: '',
      sortBy: {
        title: 'rank',
        order: 'ascending',
      },
      message: 'Data sorted by rank in ascending order.',
    };
  }

  componentDidMount() {
    this.fetchCryptocurrencyData();
  }

  handleSort = (category) => {
    const { sortBy, data } = this.state;
    const order = sortBy === null || (sortBy.title !== category) || (sortBy.title === category && sortBy.order === 'descending') ? 'ascending' : 'descending';
    const sortedArray = category === 'name' ? sortName(data, order) : sortValue(data, order, category);
    this.setState({
      sortBy: { title: category, order },
      manipulatedData: sortedArray,
      filter: '',
      message: `Data sorted by ${displayCategory(category)} in ${order} order.`,
    });
  };

  handleFilter = (newValue) => {
    const { data } = this.state;
    const filteredData = handleFilterFunc(data, newValue);
    this.setState({ message: 'Data filtered.', manipulatedData: filteredData });
  };

  handleTextChange = (e) => {
    const field = e.target.name;
    const newValue = e.target.value;
    this.setState({ [field]: newValue }, () => {
      this.handleFilter(newValue);
    });
  };

  fetchCryptocurrencyData() {
    axios.get('https://api.coinmarketcap.com/v1/ticker/?limit=1000')
      .then((response) => {
        const result = response.data;
        this.setState({ data: result, manipulatedData: result });
      })
      .catch((err) => { throw new Error(err); });
  }

  render() {
    const {
      data,
      manipulatedData,
      message,
      filter,
    } = this.state;

    return (
      <React.Fragment>
        <Title
          size="h3"
          text={`There are ${data.length} coins on the market`} />
        <ButtonsDiv
          filter={filter}
          handleTextChange={this.handleTextChange}
          handleSort = {this.handleSort}/>
        <MessageDiv message={message}/>
        <ColorCodesDiv />
        <MainContent
          manipulatedData = {manipulatedData}/>
      </React.Fragment>
    );
  }
}

export default Tickers;
