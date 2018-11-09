/* eslint-disable react/display-name */
import React from 'react';
import { shallow } from 'enzyme';
import ColorCodesLayout from '../index';

describe('ColorCodesLayout component', () => {
  const child = <p>Random</p>;
  const render = jest.fn().mockReturnValue(child);
  const props = () => ({
    render,
  });
  let wrapper;

  beforeEach(() => {
    jest.clearAllMocks();
    wrapper = shallow(<ColorCodesLayout {...props()}/>);
  });

  it('should contain a div', () => {
    expect(wrapper.find('div')).toHaveLength(1);
  });
  it('should contain a div with correct className', () => {
    const className = 'ColorCodesLayout';
    expect(wrapper.find('div').hasClass(className)).toEqual(true);
  });
  it('should contain a div with props.render as child element', () => {
    const renderComp = render.mock.results[0].value;
    expect(wrapper.find('.ColorCodesLayout').children().first().contains(renderComp)).toBe(true);
  });
  it('should call render', () => {
    const mockRender = jest.fn();
    wrapper.setProps({ render: mockRender });
    expect(mockRender).toHaveBeenCalled();
  });
});
