import React from 'react';
import { shallow } from 'enzyme';
import FadedLine from '../index';

describe('FadedLine component', () => {
  const wrapper = shallow(<FadedLine />);

  it('should contain a hr tag', () => {
    expect(wrapper.find('hr')).toHaveLength(1);
  });
  it('should contain a hr tag with correct className', () => {
    expect(wrapper.find('.Faded-line')).toHaveLength(1);
  });
});
