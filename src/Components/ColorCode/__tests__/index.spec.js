import React from 'react';
import { shallow } from 'enzyme';
import ColorCode from '../index';

describe('ColorCode component', () => {
  const props = {
    text: '-5',
    className: '',
    isListView: false,
  };
  let wrapper;
  beforeEach(() => {
    jest.clearAllMocks();
    wrapper = shallow(<ColorCode {...props}/>);
  });
  it('should contain a li', () => {
    expect(wrapper.find('li')).toHaveLength(1);
  });
  it('should contain a li with correct classNames', () => {
    const className = 'Color-code';
    expect(wrapper.find('li').hasClass(`${className} ${props.className}`)).toEqual(true);
  });
  it('should contain a li with props.text as child element', () => {
    expect(wrapper.find('li').text()).toEqual(props.text);
  });
  it('should contain a li with correct title attribute', () => {
    const mockIsListView = true;
    wrapper.setProps({ isListView: mockIsListView });
    const title = 'Color indicates price change.';
    expect(wrapper.find('li').props()).toHaveProperty('title', title);
  });
  it('should contain a li with correct title attribute', () => {
    const mockIsListView = false;
    wrapper.setProps({ isListView: mockIsListView });
    const title = 'Color indicates 24h price change.';
    expect(wrapper.find('li').props()).toHaveProperty('title', title);
  });

});
