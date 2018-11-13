import React from 'react';
import { shallow } from 'enzyme';
import CardLayout from '../index';
import Tooltip from '../../../Tooltip';

describe('CardLayout component', () => {
  const child = <p>Random</p>;
  const render = jest.fn().mockReturnValue(child);
  const props = () => ({
    render,
    data: {},
    coordX: 0,
    coordY: 0,
    hoveredObject: {},
    setHover: jest.fn(),
    resetHover: jest.fn(),
    handleHover: jest.fn(),
  });
  let wrapper;

  beforeEach(() => {
    jest.clearAllMocks();
    wrapper = shallow(<CardLayout {...props()}/>);
  });

  it('should contain a div', () => {
    expect(wrapper.find('div')).toHaveLength(1);
  });
  it('should contain a div with correct className', () => {
    const data = {
      percent_change_24h: 0,
      market_cap_usd: 0,
    };
    wrapper.setProps({ data });
    const performance = 'zero-card';
    const size = 'size-zero';
    const className = `Card-layout ${performance} ${size}`;
    expect(wrapper.find('div').hasClass(className)).toEqual(true);
  });
  it('should call render', () => {
    const mockRender = jest.fn();
    wrapper.setProps({ render: mockRender });
    expect(mockRender).toHaveBeenCalled();
  });
  it('should render Tooltip if hoveredObject is not null', () => {
    const hoveredObject = { id: 'Bitcoin' };
    wrapper.setProps({ hoveredObject });
    expect(wrapper.find(Tooltip)).toHaveLength(1);
  });
  it('should call setHover if there is mouseEnter event', () => {
    const mockSetHover = jest.fn();
    wrapper.setProps({ setHover: mockSetHover });
    wrapper.simulate('mouseenter');
    expect(mockSetHover).toHaveBeenCalled();
  });
});
