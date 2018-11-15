import React from 'react';
import { shallow } from 'enzyme';
import Tickers from '../index';

describe('Tickers component', () => {
  const props = () => ({
    manipulatedData: [],
    sortBy: null,
    isListView: false,
  });
  let wrapper;

  beforeEach(() => {
    jest.clearAllMocks();
    wrapper = shallow(<Tickers {...props()}/>);
  });
  it('should contain a div', () => {
    expect(wrapper.find('div')).toHaveLength(1);
  });
  it('should contain a ul if isListView is false', () => {
    expect(wrapper.find('ul')).toHaveLength(1);
  });
  it('should contain a ul with correct className', () => {
    const className = 'Tickers-grid';
    expect(wrapper.find('ul').hasClass(className)).toEqual(true);
  });
  it('should contain a ul with correct className', () => {
    const sortBy = { title: 'name', order: 'ascending' };
    wrapper.setProps({ sortBy });
    const className = 'Tickers-grid Tickers-grid--sorted';
    expect(wrapper.find('ul').hasClass(className)).toEqual(true);
  });
  /*
  it('should call renderCards if isListView is false', () => {
    console.log('wrapper', wrapper.debug());
    expect(wrapper.getElement().renderCards).toHaveBeenCalled();
  });
*/
});
