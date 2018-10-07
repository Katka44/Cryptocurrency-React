import React, { Component } from 'react';
import axios from 'axios';
import Title from '../../Components/Title';
import Buttons from '../Buttons';
import Message from '../../Components/Message';
import ColorCodes from '../ColorCodes';
import Loader from '../../Components/Loader';
import Tickers from '../../Components/Tickers';
import {
  handleFilterFunc, sortName, sortValue, displayCategory,
} from '../../handlers';

class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      data: [],
      manipulatedData: [],
      filter: '',
      sortBy: null,
      message: '',
    };
  }

  componentDidMount() {
    this.fetchCryptocurrencyData();
  }

  handleSort = (category) => {
    const { sortBy, data } = this.state;
    let order;
    if (sortBy === null || (sortBy.title !== category)) {
      order = 'ascending';
      const sortedArray = category === 'name' ? sortName(data, order) : sortValue(data, order, category);
      this.setState({
        sortBy: { title: category, order },
        manipulatedData: sortedArray,
        filter: '',
        message: `Data sorted by ${displayCategory(category)} in ${order} order.`,
      });
    }
    if (sortBy && sortBy.title === category && sortBy.order === 'ascending') {
      order = 'descending';
      const sortedArray = category === 'name' ? sortName(data, order) : sortValue(data, order, category);
      this.setState({
        sortBy: { title: category, order },
        manipulatedData: sortedArray,
        filter: '',
        message: `Data sorted by ${displayCategory(category)} in ${order} order.`,
      });
    }
    if (sortBy && sortBy.title === category && sortBy.order === 'descending') {
      const sortedArray = sortValue(data, 'ascending', 'rank');
      this.setState({
        sortBy: null,
        manipulatedData: sortedArray,
        message: '',
      });
    }
  };

  handleFilter = (newValue) => {
    const { data, filter } = this.state;
    const filteredData = handleFilterFunc(data, newValue);
    const message = filter ? 'Data filtered.' : '';
    this.setState({ message, manipulatedData: filteredData, sortBy: null });
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
    axios.get('https://api.coinmarketcap.com/v1/ticker/?limit=2500')
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
        <Buttons
          filter={filter}
          handleTextChange={this.handleTextChange}
          handleSort = {this.handleSort}/>
        <Message message={message}/>
        <ColorCodes />
        {loading ? <Loader /> : <Tickers
          manipulatedData = {manipulatedData}
          sortBy={sortBy}/>}
      </React.Fragment>
    );
  }
}

export default Main;
