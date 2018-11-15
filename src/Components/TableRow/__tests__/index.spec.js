import React from 'react';
import { shallow } from 'enzyme';
import TableRow from '../index';

describe('TableRow component', () => {
  const props = () => ({
    isHeader: false,
    rank: '1',
    symbol: 'BTC',
    name: 'Bitcoin',
    price: '6000',
    change1h: '0',
    change24h: '1',
    change7d: '2',
  });
  let wrapper;

  beforeEach(() => {
    jest.clearAllMocks();
    wrapper = shallow(<TableRow {...props()}/>);
  });

  it('should contain a div', () => {
    expect(wrapper.find('div')).toHaveLength(1);
  });
  it('should contain a div with correct className', () => {
    const className = 'TableRow';
    expect(wrapper.find('div').hasClass(className)).toEqual(true);
  });
  it('should contain 7 p tags', () => {
    expect(wrapper.find('p')).toHaveLength(7);
  });
  it('should contain a p tag with props.rank as text', () => {
    expect(wrapper.find('div').find('p').at(0).text()).toEqual('1');
  });
  it('should contain a p tag with props.symbol as text', () => {
    expect(wrapper.find('div').find('p').at(1).text()).toEqual('BTC');
  });
  it('should contain a p tag with props.name as text', () => {
    expect(wrapper.find('div').find('p').at(2).text()).toEqual('Bitcoin');
  });
  it('should contain a p tag with props.price as text', () => {
    expect(wrapper.find('div').find('p').at(3).text()).toEqual('6000');
  });
  it('should contain a p tag with `props.change1h + %` as text', () => {
    expect(wrapper.find('div').find('p').at(4).text()).toEqual('0%');
  });
  it('should contain a p tag with `props.change24h + %` as text', () => {
    expect(wrapper.find('div').find('p').at(5).text()).toEqual('+1%');
  });
  it('should contain a p tag with `props.change7d + %` as text', () => {
    expect(wrapper.find('div').find('p').at(6).text()).toEqual('+2%');
  });
  it('should contain a p tag with correct className if isHeader is true', () => {
    const isHeader = true;
    wrapper.setProps({ isHeader });
    const className = 'TableRow-content TableRow-change1h';
    expect(wrapper.find('div').find('p').at(4).hasClass(className)).toEqual(true);
  });
  it('should contain a p tag with correct className if isHeader is true', () => {
    const isHeader = true;
    wrapper.setProps({ isHeader });
    const className = 'TableRow-content';
    expect(wrapper.find('div').find('p').at(5).hasClass(className)).toEqual(true);
  });
  it('should contain a p tag with correct className if isHeader is true', () => {
    const isHeader = true;
    wrapper.setProps({ isHeader });
    const className = 'TableRow-content TableRow-change7d';
    expect(wrapper.find('div').find('p').at(6).hasClass(className)).toEqual(true);
  });
});
