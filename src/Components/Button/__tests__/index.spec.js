import React from 'react';
import { shallow } from 'enzyme';
import Button from '../index';

describe('Button component', () => {
  const props = () => ({
    data: [],
    text: 'random text',
    handleClick: jest.fn(),
    category: '',
  });
  const wrapper = shallow(<Button {...props()}/>);

  it('should contain a button', () => {
    expect(wrapper.find('button')).toHaveLength(1);
  });
  it('should contain a button with correct className', () => {
    const className = 'Button';
    expect(wrapper.find('button').hasClass(className)).toEqual(true);
  });
  it('should contain a button with props.text as text', () => {
    const text = 'random text';
    expect(wrapper.find('.Button').text()).toEqual(text);
  });
  it('should call handleClick when button is clicked', () => {
    const mockHandleClick = jest.fn();
    wrapper.setProps({ handleClick: mockHandleClick });
    wrapper.find('button').simulate('click');
    expect(mockHandleClick).toHaveBeenCalled();
  });
});
