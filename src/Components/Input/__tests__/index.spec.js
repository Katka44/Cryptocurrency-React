import React from 'react';
import { shallow } from 'enzyme';
import Input from '../index';

describe('Input component', () => {
  const props = () => ({
    placeholder: '',
    name: '',
    value: '',
    handleChange: jest.fn(),
  });
  const wrapper = shallow(<Input {...props()}/>);

  it('should contain an input', () => {
    expect(wrapper.find('input')).toHaveLength(1);
  });
  it('should contain an input with correct className', () => {
    const className = 'Input';
    expect(wrapper.find('input').hasClass(className)).toEqual(true);
  });
  it('should contain an input with correct name attribute', () => {
    const name = 'random name';
    wrapper.setProps({ name });
    expect(wrapper.find('input').props()).toHaveProperty('name', name);
  });
  it('should contain an input with correct value attribute', () => {
    const value = 'random value';
    wrapper.setProps({ value });
    expect(wrapper.find('input').props()).toHaveProperty('value', value);
  });
  it('should contain an input with correct placeholder attribute', () => {
    const placeholder = 'random placeholder';
    wrapper.setProps({ placeholder });
    expect(wrapper.find('input').props()).toHaveProperty('placeholder', placeholder);
  });
  it('should call handleChange when change is registered', () => {
    const mockHandleChange = jest.fn();
    wrapper.setProps({ handleChange: mockHandleChange });
    wrapper.find('input').simulate('change');
    expect(mockHandleChange).toHaveBeenCalled();
  });
});
