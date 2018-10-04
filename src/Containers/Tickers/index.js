import React, { Component } from 'react';
import axios from 'axios';
import Title from '../../Components/Title';
import ButtonsDiv from '../../Components/Buttons';
import MessageDiv from '../../Components/Message';
import ColorCodesDiv from '../../Components/ColorCodes';
import Loader from '../../Components/Loader';
import MainContent from '../../Components/MainContent';
import {
  handleFilterFunc, sortName, sortValue, displayCategory,
} from '../../handlers';

class Tickers extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: false,
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
    this.setState({ message: 'Data filtered.', manipulatedData: filteredData, sortBy: null });
  };

  handleTextChange = (e) => {
    const field = e.target.name;
    const newValue = e.target.value;
    this.setState({ [field]: newValue }, () => {
      this.handleFilter(newValue);
    });
  };

  fetchCryptocurrencyData() {
    this.setState({ loading: true });
    axios.get('https://api.coinmarketcap.com/v1/ticker/?limit=1000')
      .then((response) => {
        const result = response.data;
        this.setState({ data: result, manipulatedData: result, loading: false });
      })
      .catch((err) => { throw new Error(err); });
  }

  render() {
    const {
      loading,
      data,
      manipulatedData,
      message,
      filter,
      sortBy,
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
        {loading ? <Loader /> : <MainContent
          manipulatedData = {manipulatedData}
          sortBy={sortBy}/>}
      </React.Fragment>
    );
  }
}

export default Tickers;
