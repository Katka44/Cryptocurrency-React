import React from 'react';
import { shallow } from 'enzyme';
import ColorCodes from '../index';
import ColorCodesLayout from '../../../Components/Layouts/ColorCodesLayout';
import ColorCode from '../../../Components/ColorCode';

describe('ColorCodes component', () => {
  const props = () => ({
    isListView: false,
  });
  let wrapper;

  beforeEach(() => {
    jest.clearAllMocks();
    wrapper = shallow(<ColorCodes {...props()}/>);
  });

  it('should render ColorCodesLayout', () => {
    expect(wrapper.find(ColorCodesLayout)).toHaveLength(1);
  });
  it('should render a ul as a child of ColorCodesLayout', () => {
    expect(wrapper.dive().find('ul')).toHaveLength(1);
  });
  it('should render 7 instances of ColorCode', () => {
    expect(wrapper.dive().find(ColorCode)).toHaveLength(7);
  });
  it('should render ColorCode with -list in its className', () => {
    const mockIsListView = true;
    wrapper.setProps({ isListView: mockIsListView });
    const className = 'minus-five-list';
    expect(wrapper.dive().find(ColorCode).first().props()).toHaveProperty('className', className);
  });
});
