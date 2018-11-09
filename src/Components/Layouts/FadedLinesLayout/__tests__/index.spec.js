/* eslint-disable react/display-name */
import React from 'react';
import { shallow } from 'enzyme';
import FadedLinesLayout from '../index';
import FadedLine from '../../../FadedLine';

describe('FadedLinesLayout component', () => {
  const child = <p>Random</p>;
  const render = jest.fn().mockReturnValue(child);
  const props = () => ({
    render,
  });
  let wrapper;

  beforeEach(() => {
    jest.clearAllMocks();
    wrapper = shallow(<FadedLinesLayout {...props()}/>);
  });

  it('should contain a div', () => {
    expect(wrapper.find('div')).toHaveLength(1);
  });
  it('should contain a div with correct className', () => {
    const className = 'Faded-lines-layout';
    expect(wrapper.find('div').hasClass(className)).toEqual(true);
  });
  it('should contain a div with two FadedLines as child elements', () => {
    expect(wrapper.find('.Faded-lines-layout').find(FadedLine)).toHaveLength(2);
  });
  it('should contain a div with props.render as child element', () => {
    const renderComp = render.mock.results[0].value;
    expect(wrapper.find('.Faded-lines-layout').children().contains(renderComp)).toBe(true);
  });
  it('should call render', () => {
    const mockRender = jest.fn();
    wrapper.setProps({ render: mockRender });
    expect(mockRender).toHaveBeenCalled();
  });
});
