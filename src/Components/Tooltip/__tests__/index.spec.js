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
  /*
  it('should contain a div', () => {
    const size = { width: 100, height: 100 };
    const div = shallow(wrapper.instance().someNameFunc(size));
    expect(wrapper.find(div)).toHaveLength(1);
  });
  it('should contain a div with correct className', () => {
    const className = 'Tooltip animate';
    expect(wrapper.find('div').hasClass(className)).toEqual(true);
  });
  it('should contain 7 p tags', () => {
    expect(wrapper.find('p')).toHaveLength(7);
  });
  */
});
