import React from 'react';
import { shallow } from 'enzyme';
import CardContent from '../index';

describe('CardContent component', () => {
  const props = () => ({
    data: {},
    size: 'random size',
  });
  const wrapper = shallow(<CardContent {...props()}/>);

  it('should contain an li', () => {
    expect(wrapper.find('li')).toHaveLength(1);
  });
  it('should NOT contain a p if size is "size-zero"', () => {
    wrapper.setProps({ size: 'size-zero' });
    expect(wrapper.find('p')).toHaveLength(0);
  });
  it('should contain a p if size is in sizesWithText array', () => {
    wrapper.setProps({ size: 'size-hundred-billion' });
    expect(wrapper.find('p')).toHaveLength(1);
  });
  it('should contain a p with correct className if size is not "size-zero"', () => {
    const size = 'size-hundred-billion';
    wrapper.setProps({ size });
    const className = `Card-content Card-content--${size}`;
    expect(wrapper.find('li').find('p').hasClass(className)).toEqual(true);
  });
  it('should contain a p with props.data.symbol as text', () => {
    const size = 'size-hundred-billion';
    const data = {
      symbol: 'BTC',
      percent_change_24h: -0.5,
    };
    wrapper.setProps({ data, size });
    const result = `${data.symbol} ${data.percent_change_24h}%`;
    expect(wrapper.find('p').text()).toEqual(result);
  });
  it('should contain text with added + for positive values', () => {
    const data = {
      symbol: 'BTC',
      percent_change_24h: 0.5,
    };
    const size = 'size-hundred-billion';
    wrapper.setProps({ data, size });
    const result = `${data.symbol} +${data.percent_change_24h}%`;
    expect(wrapper.find('p').text()).toEqual(result);
  });
});
