import React from 'react';
import { shallow } from 'enzyme';
import { SizeMe } from 'react-sizeme';
import Tooltip from '../index';

describe('Tooltip component', () => {
  const props = () => ({
    hoveredObject: {},
    coordX: 0,
    coordY: 0,
  });
  let wrapper;

  beforeEach(() => {
    jest.clearAllMocks();
    wrapper = shallow(<Tooltip {...props()}/>);
  });

  it('should contain a SizeMe element', () => {
    expect(wrapper.find(SizeMe)).toHaveLength(1);
  });
  it('should contain a div', () => {
    expect(wrapper.dive().find('div')).toHaveLength(1);
  });
  it('should contain 7 instances of p tags', () => {
    expect(wrapper.dive().find('p')).toHaveLength(7);
  });
});
